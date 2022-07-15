"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
class StocksUtils {
    sanitizeDateQuery(req) {
        let queryParam = req.query && req.query.date ? req.query.date : null;
        if (queryParam) {
            queryParam = queryParam.toString(); // if queryParam exists, convert it to string
        }
        else {
            return null;
        }
        const [day, month, year] = queryParam.split("-");
        const dayNum = parseInt(day);
        const yearNum = parseInt(year);
        if (dayNum > 0 &&
            dayNum < 31 &&
            yearNum > 1900 &&
            yearNum < 2100 &&
            months.includes(month)) {
            return queryParam;
        }
        else
            return null;
    }
}
exports.default = new StocksUtils();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlZGljdGlvbi51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZWRpY3Rpb24vdXRpbHMvcHJlZGljdGlvbi51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQU0sTUFBTSxHQUFHO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixPQUFPO0lBQ1AsT0FBTztJQUNQLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixVQUFVO0NBQ1gsQ0FBQztBQUNGLE1BQU0sV0FBVztJQUNmLGlCQUFpQixDQUFDLEdBQW9CO1FBQ3BDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckUsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVLEdBQUcsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsNkNBQTZDO1NBQ2xGO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQ0UsTUFBTSxHQUFHLENBQUM7WUFDVixNQUFNLEdBQUcsRUFBRTtZQUNYLE9BQU8sR0FBRyxJQUFJO1lBQ2QsT0FBTyxHQUFHLElBQUk7WUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUN0QjtZQUNBLE9BQU8sVUFBVSxDQUFDO1NBQ25COztZQUFNLE9BQU8sSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDRjtBQUNELGtCQUFlLElBQUksV0FBVyxFQUFFLENBQUMifQ==