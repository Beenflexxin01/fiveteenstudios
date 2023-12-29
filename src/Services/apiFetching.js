// import mongoose from "mongoose";
// import mongodb from "mongodb";
// // const mongoose = require("mongoose");
// const DB = process.env.DATABASE.replace(
//   "<password>",
//   process.env.DATABASE_PASSWORD
// );

// const client = await mongodb.MongoClient.connect(DB);

// const conn = mongoose.createConnection().setClient(client);

// conn.getClient(); // MongoClient { ... }
// // conn.readyState; // 1, means 'CONNECTED'

// export async function getProducts(id) {
//   const { products, error } = await conn
//     .from("productdatas")
//     .select("*")
//     .eq("id", id);

//   if (error) {
//     console.error(error);
//     throw new Error("Product datas could not be loaded!!");
//   }

//   return products;
// }
