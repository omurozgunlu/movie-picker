# userdict = {
#     1 : {'crime':{'rating':x,count:y}}
#{'Biography': {'rating': 18.0, 'count': 2}, 'Drama': {'rating': 25.0, 'count': 3},
#  'History': {'rating': 9.0, 'count': 1}, 'War': {'rating': 9.0, 'count': 1}, 
# 'Action': {'rating': 13.0, 'count': 2}, 'Crime': {'rating': 7.0, 'count': 1}, 
# 'Thriller': {'rating': 7.0, 'count': 1}, 'Comedy': {'rating': 6.0, 'count': 1}, 
# 'Romance': {'rating': 6.0, 'count': 1}}
#     2 : {}
#     3 : {}
# }
# filmDict = {
#     filmId : {
#         name: '',
#         rate : x,
#         genres: [],
            # votes: y,
#     }
# }
import numpy as np
import json
from sklearn.cluster import KMeans

genreDict= { 'Crime':0,
    'Drama':1,
    'Comedy':2,
    'Short':3,
    'Romance':4,
    'Family':5,
    'Documentary':6,
    'Action':7,
    'Fantasy':8,
    'Adventure':9,
    'War':10,
    'Musical':11,
    'Western':12,
    'Horror':13,
    'Sci-Fi':14,
    'Mystery':15,
    'History':16,
    'Biography':17,
    'Animation':18,
    'Film-Noir':19,
    'Thriller':20,
    'Music':21,
    'Sport':22,
    'News':23,
    'Adult':24,
    'Talk-Show':25,
    'Reality-TV':26,
  'Game-Show':27
    }
userDict = {}
userFilmRatings = {} # userId:{filmId1: rating, filmId2:rating }
filmDict = {}
filmArray = []
ratingsArray = []
with open('./datasets/MovieTweetings-master/latest/movies.dat',encoding="utf-8") as f:
    filmArray = f.readlines()
for film in filmArray:
    splitElement = film.split('::')
    splitElement[-1] = splitElement[-1].replace("\n",'')
    splitElementGenres = splitElement[-1].split('|')
    filmDict[str(splitElement[0])]={}
    filmDict[str(splitElement[0])]['name'] = splitElement[1]
    filmDict[str(splitElement[0])]['genres']= splitElementGenres

with open('./datasets/MovieTweetings-master/latest/ratings.dat',encoding="utf-8") as f:
    ratingsArray = f.readlines()
for ratings in ratingsArray:
    splitElement = ratings.split('::')
    userId = splitElement[0]
    filmId = splitElement[1]
    filmRating = splitElement[2]
    genres = filmDict[str(filmId)]['genres']

    if userId not in userFilmRatings:
        userFilmRatings[userId] ={}
    userFilmRatings[userId][filmId] = float(filmRating)

    if 'votes' not in filmDict[str(filmId)]:
        filmDict[str(filmId)]['votes'] = 1
    else:
        filmDict[str(filmId)]['votes'] +=1
    if userId not in userDict:
        userDict[userId] = {}
    for genre in genres:
        if genre not in userDict[userId]:
            userDict[userId][genre] = {}
        if 'rating' not in userDict[userId][genre]:
            userDict[userId][genre]['rating'] = float(filmRating)
            userDict[userId][genre]['count']= 1
        else:
            userDict[userId][genre]['rating'] += float(filmRating)
            userDict[userId][genre]['count'] += 1
userGenreRatingsArray = np.empty([len(userDict.keys())+1,28])
#calculate average genre rating and convert it to vector for each user
for userId,genreRatings  in userDict.items():
    # generate zero array size 24
    userGenreRatings = np.zeros(28)
    for genreName, genreRating in genreRatings.items():
        userDict[userId][genreName]['rating'] = userDict[userId][genreName]['rating'] / userDict[userId][genreName]['count']
        if(genreName == ''):
            continue
        userGenreRatingsArray[int(userId)][genreDict[genreName]] = userDict[userId][genreName]['rating']
# print(userGenreRatingsArray)
kmeans = KMeans(n_clusters=6,random_state=0).fit(userGenreRatingsArray)
#dump classifier to pickle
import joblib
joblib.dump(kmeans,'kmeans.pkl')
#user cluster id
userClusterIds = {}
# clusterInfo = {
#     clusterId:{ 
#         films: {filmId:{totalVotes:, avgRatig:, popularityIndex: }},
#         totalVotes:,
#         totalMovieCount,
#         meanRating-> for all movies , 
#         votes: []
#         quantile: int
#     }
# }
clusters = {} #{clusterId : [users]}
for i in range(1,len(userGenreRatingsArray)):
    id = kmeans.predict([userGenreRatingsArray[i]])[0]
    id = round(id)
    if id not in clusters:
        clusters[id]=[]
    clusters[id].append(str(i))
#for each cluster find the most popular films among the users in cluster
for clusterId, users in clusters.items():
    for user in users:
        for filmId, rating in userFilmRatings[user].items():
            if clusterId not in userClusterIds:
                userClusterIds[clusterId] = {}
            if 'films' not in userClusterIds[clusterId]:
                userClusterIds[clusterId]['films'] = {}
            if filmId not in userClusterIds[clusterId]['films']:
                userClusterIds[clusterId]['films'][filmId] = {'totalVotes':0,'avgRating':0}
            userClusterIds[clusterId]['films'][filmId]['totalVotes'] +=1
            userClusterIds[clusterId]['films'][filmId]['avgRating'] +=rating
#for each cluster find avg rating for each movie
for clusterId, clusterInfo in userClusterIds.items():
    totalVotes = 0
    totalMovieCount = 0
    meanRating = 0
    for filmId, filmInfo in userClusterIds[clusterId]['films'].items():
        userClusterIds[clusterId]['films'][filmId]['avgRating'] = userClusterIds[clusterId]['films'][filmId]['avgRating'] / userClusterIds[clusterId]['films'][filmId]['totalVotes']
        totalVotes += userClusterIds[clusterId]['films'][filmId]['totalVotes']
        totalMovieCount += 1
        meanRating += userClusterIds[clusterId]['films'][filmId]['avgRating']
    userClusterIds[clusterId]['totalVotes'] = totalVotes
    userClusterIds[clusterId]['totalMovieCount'] = totalMovieCount
    userClusterIds[clusterId]['meanRating'] = meanRating/totalMovieCount
# append each film vote votes array, find quantile on them, append it to quantile field
for clusterId, clusterInfo in userClusterIds.items():
    clusterInfo['votes'] = np.empty([len(clusterInfo['films'].keys()),1])
    index = 0
    for filmId, filmInfo in clusterInfo['films'].items():
        clusterInfo['votes'][index] = filmInfo['totalVotes']
        index +=1
    clusterInfo['quantile'] = np.quantile(clusterInfo['votes'], 0.95)
# find popularity index for each movie in each cluster 
for clusterId, clusterInfo in userClusterIds.items():
    for filmId, filmInfo in clusterInfo['films'].items():
        a = filmInfo['totalVotes']/(filmInfo['totalVotes']+clusterInfo['quantile'])
        b = clusterInfo['quantile']/(filmInfo['totalVotes']+clusterInfo['quantile'])
        aR = a*filmInfo['avgRating']
        bC = clusterInfo['meanRating']*b
        filmInfo['popularityIndex'] = aR + bC
# list films by popularity in films field for each cluster
for clusterId,clusterInfo in userClusterIds.items():
    filmList = sorted(clusterInfo['films'].items(), key= lambda x:x[1]['popularityIndex'],reverse=True)
    clusterInfo['films'] = dict(filmList)
#write cluster info to json file
for clusterId, clusterInfo in userClusterIds.items():
    userClusterIds[clusterId].pop('votes',None)
with open('cluster-info.json', 'w') as fp:
    json.dump(userClusterIds, fp)

        
    
    
    