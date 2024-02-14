const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://kmrichie611:Pantheon4ever!@cluster0.ff9r8bu.mongodb.net/Blog?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
  } catch (e) {
    console.error('Failed to connect to server', e);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);