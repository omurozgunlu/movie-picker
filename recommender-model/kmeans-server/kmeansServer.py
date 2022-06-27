from flask import Flask, jsonify
from flask import request
import numpy as np
import joblib

app = Flask(__name__)
app.config['DEBUG'] = True
predictor = joblib.load('kmeans.pkl')
@app.route('/kmeans',methods=['POST'])
def kmeans():
    json_ = request.json
    print(json_)
    weights = json_['weights']
    result = predictor.predict([weights])
    result = result.tolist()
    if len(result) == 1:
        result = result[0]
    return jsonify({'clusterId':result})

if __name__ == '__main__':
    app.run(port=8050)
