import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://hamoon:llKN7DvHJr53z14G@cluster0-shard-00-00.vtvol.mongodb.net:27017,cluster0-shard-00-01.vtvol.mongodb.net:27017,cluster0-shard-00-02.vtvol.mongodb.net:27017/?ssl=true&replicaSet=atlas-2d0gs2-shard-0&authSource=admin&retryWrites=true&w=majority"
      );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
