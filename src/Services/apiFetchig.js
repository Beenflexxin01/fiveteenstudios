// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import mongoose from "mongoose";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// ...

// axios({
//         method: 'GET',
//         url: 'http://localhost:3001/',
//         params: {page: pageNumber, limit: limit},
//         cancelToken: new axios.CancelToken(c => cancel = c)
//     }).then( res => {
//         setSermons( prevSermons => {
//             return [...new Set([...prevSermons, ...res.data.map( sermon => sermon )])]
//     })
//         setHasMore(res.data.length > 0)
//         setLoading(false)
//     }).catch( e => {
//         if (axios.isCancel(e)) return
//         setError(true)
//     })
//     return () => cancel()
// }, [query, pageNumber, limit] )
// ... and here is my backend node/express server:

// const express = require('express')
// const cors = require('cors')
// const knex = require('knex')
// require('dotenv').config()

// const db = knex({client: 'pg', connection: <...connection stuff...>})
// const app = express()
// app.use(express.urlencoded({ extended: false }))
// app.use(express.json())
// app.use(cors())

// app.get('/', (req, res) => {
//     let page = req.query.page || 0
//     let limit = req.query.limit || 50
//     db.select('*')
//         .from('sermons')
//         .limit(limit, {skipBinding: true})
//         .offset(limit*page)
//         .then( (data) => {
//             res.json(data)
//         })
//         .catch( (err) => {
//             console.log(err)
//         })
// })

// const port = process.env.APP_PORT
// app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}, http://loca

export async function getProducts() {
  const { products, error } = await mongoose.from("products").select("*");

  if (error) {
    console.error(error);
    throw new Error("Products could not be loaded!!");
  }

  return products;
}
