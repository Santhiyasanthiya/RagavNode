// //index.js 
// import express from "express"
// import { client } from "../index.js"; // client index.js la eruinthu import pannanum 

// const router = express.Router();
// // app ellame route nu change pannanum 

// router.get("/", async function(request, response){ 
//     if  (request.query.rating){
//     request.query.rating = +request.query.rating;
//     }
//     console.log(request.query)
    
//       const movies = await client
//       .db("b40wd")
//       .collection("movies")
//       .find(request.query)  // which data va call pandramo antha movie data mattum show aagum 
//       .toArray();              // mongo db la erukkura data ellam varanum 
    
//       // console.log(movies)
    
//       response.send(movies)
//     });
    
//     router.get("/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//       const { id } = request.params;
     
//       const movie = await client
//     .db("b40wd")
//     .collection("movies")
//     .findOne({ id: id}) 
    
//     console.log(movie)
//       movie 
//       ? response.send(movie)
//       : response.status(404).send({message:"movie not found "})
//     }); 
    
//     //-------POST ------
//     router.post("/",async function(request, response){ 
//       const data = request.body; 
//       console.log(data)
    
//       const result = await client
//       .db("b40wd")
//       .collection("movies")
//       .insertMany(data) 
     
    
//       response.send(result)
//     });
    
    
//     router. delete("/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//       const { id } = request.params;
    
//     const result = await client
//     .db("b40wd")
//     .collection("movies")
//     .deleteOne({ id: id}) 
    
//     console.log(result)
//     result.deletedCount > 0
//       ? response.send({message:"movie deleted sucessfully "})
//       : response.status(404).send({message:"movie not found "})
//     }); 
    
//     //---------PUT METHOD or Update ------------------------------------------------
    
//     router.put("/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//       const { id } = request.params;
//       const data = request.body; 
    
//       const result = await client
//     .db("b40wd")
//     .collection("movies")
//     .updateOne({ id: id}, {$set: data }) 
    
//     console.log(result)
//       response.send(result)
     
//     }); 

//     export default router;




//====================================== db set pandra method
// app nu erukkurathu ellam router nu kodukkurom 
//db la connect pandra detail ellam thani thaniya 
// function create panni vaikkanum 

 
import express from "express"
import {
    getMovies,
    getMovieById,
    createMovies,
    deleteMovieById,
    updateMovieById,
} from "../services/movies.service.js";


const router = express.Router();
// app ellame route nu change pannanum 

router.get("/", async function(request, response){ 
    if  (request.query.rating){
    request.query.rating = +request.query.rating;
    }
    console.log(request.query)
    
      const movies = await getMovies(request);              // mongo db la erukkura data ellam varanum 
    
      
    
      response.send(movies)
    });
    
    router.get("/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
      const { id } = request.params;
     
      const movie = await getMovieById(id) 
    
    console.log(movie)
      movie 
      ? response.send(movie)
      : response.status(404).send({message:"movie not found "})
    }); 
    
    //-------POST ------
    router.post("/",async function(request, response){ 
      const data = request.body; 
      console.log(data);
    
      const result = await createMovies(data); 
     
    
      response.send(result)
    });
    
    
    router. delete("/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
      const { id } = request.params;
    
    const result = await deleteMovieById(id);
    
    console.log(result)
    result.deletedCount > 0
      ? response.send({message:"movie deleted sucessfully "})
      : response.status(404).send({message:"movie not found "})
    }); 
    
    
    router.put("/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
      const { id } = request.params;
      const data = request.body; 
    
      const result = await updateMovieById(id, data); 
    
    console.log(result)
      response.send(result)
     
    }); 

    export default router;


    //------------db la connect pandra details ellame thani thani function la pottachi ----------------------------------
// etha thani folder la podanum so 
// "go to services folder and  movies.service.js"
// search panna easy ah kedaikkurathukkaga thani ya folder create panni adhukulla podanum 
   

// async function updateMovieById(id, data) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .updateOne({ id: id }, { $set: data });
// }

//  async function deleteMovieById(id) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .deleteOne({ id: id });
// }

// async function createMovies(data) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .insertMany(data);
// }

// async function getMovieById(id) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .findOne({ id: id });
// }

// async function getMovies(request) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .find(request.query) // which data va call pandramo antha movie data mattum show aagum 
//         .toArray();
// }


//-------------cut panni services movies.service la podanum adhanala copy and paste panni erukken --------------------------------------------


// async function updateMovieById(id, data) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .updateOne({ id: id }, { $set: data });
// }

//  async function deleteMovieById(id) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .deleteOne({ id: id });
// }

// async function createMovies(data) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .insertMany(data);
// }

// async function getMovieById(id) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .findOne({ id: id });
// }

// async function getMovies(request) {
//     return await client
//         .db("b40wd")
//         .collection("movies")
//         .find(request.query) // which data va call pandramo antha movie data mattum show aagum 
//         .toArray();
// }