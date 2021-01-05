const express = require('express');
var request = require('request');
const router = express.Router();

router.use('/getanalysis', (req, res, next) => {
    const url = req.url;
    // console.log(url);
    const method = req.method;
    query = req.query.q;
    var unirest = require("unirest");

        var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis");
        
        req.query({
            "symbol": query,
            "region": "US"
        });
        
        req.headers({
            "x-rapidapi-key": "d1540548dfmsha0cd85689ac0ee4p132011jsn004d1de6da19",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "useQueryString": true
        });
        // console.log(req);
        req.end(function (res) {
            if (res.error) {
                console.log("It is throwing error");
                throw new Error(res.error);
            }
        
            console.log(res.body);
        });
        res.send('Details for '+query+" on console.");
        next();
});



// router.route('/getanalysis')
// .get(function(req, res){
//     console.log('Comes here');
//   request({
//     method: 'GET',
//     uri: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
//     headers: {"x-rapidapi-key": "d1540548dfmsha0cd85689ac0ee4p132011jsn004d1de6da19",
//     "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//     "useQueryString": true},
//     query:{
//         "symbol":req.query.q,
//         "region": "US"
//     }
//   }, function (error, response, body){
//     if(!error && response.statusCode == 200){
//         console.log(body);
//       res.send(body);
//     }
//     console.log(req.query.q);
//     // console.log(req.headers["x-rapidapi-key"]);
//   })
// //   res.send(res.body);
  
// });

router.use('/getnews', (req, res, next) => {
    var unirest = require("unirest");
    const method = req.method;
    
    var query = req.query.q;
    console.log("QUERY:"+query);
    var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news");
    req.query({
        "category": query,
        "region": "US"
    });

    req.headers({
        "x-rapidapi-key": "d1540548dfmsha0cd85689ac0ee4p132011jsn004d1de6da19",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);
    });
    res.send('Details for news on '+query+" on console.");
});


module.exports = router;