const express = require('express');

const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//     res.status(200).send("Hello World!")
// });

app.post('/requestfood', async (req, res) => {
    await db.saveFoodRequest(req.body);
    res.send("Your food request has been received!");
});

app.get('/allrequests', async (req, res) => {
    const result = await db.getAllRequests();
    const data = {data: result};
    res.json(data);
});

app.get('/citystatistics/:cityname', async (req, res) => {
    const cityname = req.params.cityname;
    const requestsByCity = await db.getRequestsByCity(cityname);
    
    let data = {};
    data.city = cityname;

    let typeAndAmount = {};
    typeAndAmount['beef'] = 0;
    typeAndAmount['diary'] = 0;
    typeAndAmount['egg'] = 0;
    typeAndAmount['fruitnut'] = 0;
    typeAndAmount['vegetable'] = 0;
    typeAndAmount['mushroom'] = 0;
    typeAndAmount['pork'] = 0;
    typeAndAmount['chicken'] = 0;
    typeAndAmount['other-poultry'] = 0;

    for (const request of requestsByCity) { 
        const food_list = request['request-food-list'];       
        for (const food of food_list) {
            const type = food['type'];
            const amount = food['amount'];
            typeAndAmount[type] += amount;
        }
    }
    data['food_list'] = typeAndAmount;
    res.json(data);
});

app.get('/delete', async (req, res) => {
    await db.deleteAllRequests();
    res.send("All food requests deleted!");
});


db.dbConnect().then(()=> app.listen(4000, ()=> {
    console.log('Ready to go!');
}));