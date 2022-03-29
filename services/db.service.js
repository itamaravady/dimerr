const MongoClient = require("mongodb").MongoClient;

const config = {
  dbURL: process.env.MONGODB_URI,
};

module.exports = {
  getCollection,
};
// Database Name
const dbName = "dimerr";

var dbConn = null;

async function getCollection(collectionName) {
  try {
    const db = await connect();
    const collection = await db.collection(collectionName);
    console.log('collection got!:', collectionName);
    return collection;
  } catch (err) {
    logger.error("Failed to get Mongo collection", err);
    throw err;
  }
}

async function connect() {
  if (dbConn) return dbConn;
  try {
    const client = await MongoClient.connect(config.dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(' process.env.MONGODB_URI:', config.dbURL);
    const db = client.db(dbName);
    dbConn = db;
    return db;
  } catch (err) {
    logger.error("Cannot Connect to DB", err);
    throw err;
  }
}
