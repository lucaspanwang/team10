const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://muziyulin111:88888888@cluster0.lg3si.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri);

module.exports = {
    dbConnect: async function() {
        await client.connect();
        console.log("Connected to MongoDB successfully!");
    },
    getAllRequests: async function() {
        const cursor = client.db('hackathon').collection('food_requests').find({});
        const result = await cursor.toArray();
        return result;
    },
    getRequestsByCity: async function(cityname) {
        const cursor = client.db('hackathon').collection('food_requests').find({city: cityname});
        const result = await cursor.toArray();
        return result;
    },
    saveFoodRequest: async function(food_request) {
        await client.db('hackathon').collection('food_requests').insertOne(food_request);
    },
    deleteAllRequests: async function() {
        await client.db('hackathon').collection('food_requests').deleteMany({});
    }
}