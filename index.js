const { MongoClient } = require("mongodb");
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const uri =
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gzsrh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log(uri);

async function run() {
    try {
        await client.connect()
        console.log('database connected');

        //get api
        app.get("/hotels", async (req, res) => {
            const cursor = hotellist.find({});
            const hotels = await cursor.toArray();
            res.send(hotels);
        });
    }
    finally {
        // await client.close()
    }
}
run().catch(console.dir)

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


/*
One time: 
1. nodemon globally install
2. mongodb atlas user, access
3. network access (ip address allow)

Connect

Every Projects:
1. install mongodb
2. import (require), mongodb
3. copy uri and client
4. username and password update with dotenv(create dotenv file and save user and pass there)
5. import require('dotenv').config()
6. convert uri string to template string
7. create async func of run where has try and finally and call run with catch
8. in finally await client.close() will be comment out
9. in try await client.connect() will be called
*/