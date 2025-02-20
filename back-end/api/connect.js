import {MongoClient} from 'mongodb';

const URL = "mongodb+srv://jcarv:d0KZbqfMdEiowzde@cluster0.w7yig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL);

export const db = client.db("spotify");

const songCollection = await db.collection("songs").find({}).toArray(); //tudo isso fez com que acessasse o Mongo, pegasse a collection songs e transformasse em um array 

console.log(songCollection)