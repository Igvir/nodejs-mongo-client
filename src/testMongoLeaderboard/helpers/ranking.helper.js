const LeaderboardSchema = require('../mongo_schemas/leaderboard.schema');

const getDataForRanking = (startDate, endDate) => {
    return new Promise((resolve, reject) => {
        return LeaderboardSchema.find({createdate: { $gte: startDate, $lte: endDate }}, 
            function (err, recordset) {
                if(err){
                    reject(err);
                } else {
                    resolve(recordset);
                }
            });
        });
    }

module.exports = {
    getDataForRanking,
}