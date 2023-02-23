// mongosh

//use b40wd
// db.movies.find()
// show dbs (list all dbs)

// db   (current db)

// show collection

// db.movies.insertMany([
//     {
//       "id": "99",
//       "name": "Vikram",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//       "rating": 8.4,
//       "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//       "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//     },
//     {
//       "id": "100",
//       "name": "RRR",
//       "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//       "rating": 8.8,
//       "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//       "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//     },
//     {
//       "id": "101",
//       "name": "Iron man 2",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//       "rating": 7,
//       "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//       "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//     },
//     {
//       "id": "102",
//       "name": "No Country for Old Men",
//       "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//       "rating": 8.1,
//       "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//       "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//     },
//     {
//       "id": "103",
//       "name": "Jai Bhim",
//       "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//       "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//       "rating": 8.8,
//       "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//     },
//     {
//       "id": "104",
//       "name": "The Avengers",
//       "rating": 8,
//       "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//       "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//       "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//     },
//     {
//       "id": "105",
//       "name": "Interstellar",
//       "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//       "rating": 8.6,
//       "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//       "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//     },
//     {
//       "id": "106",
//       "name": "Baahubali",
//       "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//       "rating": 8,
//       "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//       "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//     },
//     {
//       "id": "107",
//       "name": "Ratatouille",
//       "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//       "rating": 8,
//       "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//       "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//     },
//     {
//       "name": "PS2",
//       "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//       "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//       "rating": 8,
//       "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//       "id": "108"
//     },
//     {
//       "name": "Thor: Ragnarok",
//       "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//       "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//       "rating": 8.8,
//       "trailer": "https://youtu.be/NgsQ8mVkN8w",
//       "id": "109"
//     }
//   ])
db.movies.find({});
// how many movies erukunu check pandrathu
db.movies.find({}).count();
db.movies.countDocuments();

// b40wd> db.movies.find({rating:{$gt:8.5}})

//PROJECTIONS THERE are tow types 
// :- are 

// 1. INCLUSION PROJECTION

    //    ore oru name mattum varum 
db.movies.find({}, {name:1})  
db.movies.find({}, {name:1, rating:1 })

//EXCLUSION PROJECTION
// kila erukkuratha ignore pannitu balance dadta va show pandrathu 

db.movies.find({},{summary:0, trailer:0})


//inclusion and exclusion onna mis panna mudiyathu 
// ex:=
db.movies.find({},{name:1, summary:0})
// so intha mathiri panna error aadikkum 
// but ore oru time mattum join panni access panna mudium
// object id venamnu nu eruintha mattum thaan work aagum 
db.movies.find({},  {_id: 0, name: 1, rating: 1})
//COUNT
// db.movies.find({}).count()
// db.movies.countDocuments()

    //SORTING METHOD
 // DATA ELLAME OBJECT ID LA THAAN ERUKKUM 
 //ORU DATA VA EPPADI INSERT PANDRAMO ANTHA MATHIRI THAAN OBJECT ID CREATE AAGUM 

//  SORTING IS HAVING TWO TYPES
// 1. IS Ascending order ace  
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating:1})

// 2.decending order dec 
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: -1})

// SORTING METHOD 
// RATING ORE MATHIRI ERUINTHAAL ANTHA
//  RATING LA ERUKKURA NAME VACHI ASE OR DEC METHOD PANNALAM
// asc oder 
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: -1, name:1})

// dsc order 
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: -1, name:-1})


//first 2 la erukkura value mattum varanumna  limit method
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: 1}).limit(2)
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: -1}).limit(2)

// offset sql but 

db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: 1}).limit(2).skip(2)
db.movies.find({},  {_id: 0, name: 1, rating: 1}).sort({rating: -1}).limit(2).skip(2)



//******************ORDERS MONGO DB *********************************************** */
db.orders.insertMany(
    [
        { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
        { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
        { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
        { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
        { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
        { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
        ]
)

//*****************************UPDATE  = $ SET
// mongosh
// use b40wd
// db.movies.find()

//   -this is empty code only show movies data 
db.movies.find({})
db.movies.updateMany({}, {$set:{language:"english"}})

//particular oru movie mattum language change pannanumna enna pannanum  
// -first thaniya antha movie veliya edukkanum  
db.movies.findOne({id:'99'}) 
db.movies.updateOne({id:'99'}, {$set:{language:"tamil"}}) 

// onemore practice for telugu language 

db.movies.findOne({id:'100'}) 
db.movies.updateOne({id:'100'}, {$set:{language:"telugu"}}) 

//**************DELETE METHOD  */
db.movies.find({})
db.movies.deleteMany({})  //ella movie um delete aagidum

//particular movie mattum delete aaganumna  
db.movies.findOne({id:'105'}) 
db.movies.deleteOne({id:'105'}) 
