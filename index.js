//npm init -y 
// npm i express 
// ragav sir oda link la eruinthu copy panna lines 

// import express from "express"; // "type": "module"
// less then 10line la oru api panni mudichidalaam 


// const express = require("express"); // "type": "commonjs" it is 3rd party package
// const app = express();  //rest api method use panni erukkom  

// const PORT = 4000;
// app.get("/", function (request, response) {  // "/use panna route mathiri work pannum 2 object erukku 1.request 2. response "
//   response.send("🙋‍♂️, 🌏 🎊✨🤩");
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));  // app start aagura syntax which port la start pannanum nu inga thaan sollanum  




//****************************MOVIE DATA KODUTHU PANDRA METHOD ******************************************** */
// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, 🌏 🎊✨🤩 SANTHIYA");
// });

// app.get("/movies", function (request, response) { 
//   response.send(movies);
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

//*********************nodemon  auto save ********************************************** */
// package.json la erukura script commend paaru 
// ella movie data vum onna varum  

// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   response.send(movies);
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

//************************Particular ah oru movie data mattum venumna  (id) *********************************************** */
// but id use pannalum full data varum 
// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   response.send(movies);
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

//******filter method ************************************ */
// and single data varavaikkura method but array [] kulla varum 

// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const movie = movies.filter((mv) => mv.id === id)
//   response.send(movie);
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 


//************************array ellama varanumna FIND *********************************** */
//FIND

// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const movie = movies.find((mv) => mv.id === id) 
//   response.send(movie);
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 



// *************************oru velai ID match aagalana enna pannanum *********************************
// error pass aganum but inspect la console la 200 status sucess nu vanthidum 

// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const movie = movies.find((mv) => mv.id === id) 
//   movie ? response.send(movie): response.send({message:"movie not found "})
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

//**************************** * status 404 ********************************** */


// const express = require("express"); 
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const movie = movies.find((mv) => mv.id === id) 
//   movie ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 


//***********required is old version  */
// modules is new version

// const express = require("express"); 

// import express from "express"
// const app = express(); 

// const PORT = 4000;

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies", function(request, response){
//   response.send(movies)
// })
// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const movie = movies.find((mv) => mv.id === id) 
//   movie ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 


//********************************* CONNECTION PART mongo db um node js um   */
// connect aagura time late aachunna promise ah return pannanum 
//AWAIT use pannanum 
// any mistake or error ah code write pannieruintha await work pannnathu 

// ****** WHAT IS TOP LEVEL AWAIT ? ************
// You can use the await keyword on its own
//  (outside of an async function) 
//  at the top level of a module


// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1" //the number is ip address of mongodb localhost 
//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies", function(request, response){
//   response.send(movies)
// })
// app.get("/movies/:id", function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const movie = movies.find((mv) => mv.id === id) 
//   movie ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 


//****************************************************************************************************************************************************** */
//*********************************************************************************************************************************************** */
//FUNCTION KULLA AWAIT USE PANDROM 
//MONGO DB CONNECT 


// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1" //the number is ip address of mongodb localhost 
//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies",  function(request, response){ 
//   response.send(movies)
// })

// //MOVIE ID LA ERUINHU ore oru movie details 
// // venumna mongodb connect panni edukkum bothu 
// // mongodb la koduthirukka document and collection um call panni edukanum 


// //------------------------------------------------------------
// // ASYNC USE PANNATHAAN AWAIT WORK PANNUM 
// // BECUSE function la await mattum 
// // thaniya call panna error adikkum 

// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   // const movie = movies.find((mv) => mv.id === id) 

// // **************sql la pannieruintha************************* 

// //db.movies.findOne({ id : "100"})


// //****************MONGO DB LA pannieruintha  ***************************

// // ********http://localhost:4000/movies/100
// //  or 102,103,104,nu entha id number koduthaalum ore oru data va mattum thaan show pannum 
// const movie = await client
// .db("b40wd")
// .collection("movies")
// // .findOne({ id: "100"}) //intha mathir potta ore oru data mattum thaan show aagum 
// .findOne({ id: id})  // entha id ya call pandramo antha id yoda data varum 
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// });  

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

 //************************************************************************************************************************************************** */







 //******************************************************************************************************************************* */
//NEW DATA VA EPPADI POST PANDRATU 

 
// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1" 
//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies",  function(request, response){ 
//   response.send(movies)
// });


// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//  movie = await client
// .db("b40wd")
// .collection("movies")
// // .findOne({ id: "100"}) //intha mathir potta ore oru data mattum thaan show aagum 
// .findOne({ id: id})  
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 

//999999999999999999999999999 New data va eppadi post pandrathu 9999999999999999999999999999999999999999
 //*****POST MAN LA POST PANNA WORK AAGATHU  */
 //BECAUSE ENTHA FORMET LA MOVE AAGUTHUNU THERIYAATHU ADHANALA RESULT KATTATHU 



// app.post("/movies", async function(request, response){ 
//   const data = request.body 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany({data}) 
 
// // sql la eruintha 
// // db.movies.insertmany(data)

//   response.send(movies)
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 
//*************************************************************************---------------------------------------------------------******************************* */




//**************  MIDDLEWARE JSON *****************************
// EXPRESS.JSON   ************************************** */
// WHAT IS MIDDLEWARE ? 

// := API REQUEST VANTHAAL ADHU JSON FORMAT LA THAAN VARUM 
// MONGODB KU PURIANUMNA JAVASCRIPT OBJECT AH ERUNTHA MATTUM THAAN MONGO DB LA INSERT AAGUM SO 
// ADHUKKU THAAN MIDDLE WARE USE PANNANUM 
// API KUM ASYNC  MIDDLE LA KODUKKURATHUNALA  MIDDLE WARE 


// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1" 
//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies",  function(request, response){ 
//   response.send(movies)
// });


// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//  movie = await client
// .db("b40wd")
// .collection("movies")
// .findOne({ id: id})  
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 

// //*****POST ***************************************/

//  app.post("/movies", express.json(), async function(request, response){ 
//   const data = request.body; 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany(data) 
 
 //*********result nu kodutha thaan id varum movie nu kodutha data varum ************************************ */
//   response.send(result)
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 

 
//************************ app.use() ********************************************************************************************************************* */

// here after oru oru POST create pannumbothellam 
// express.json use pannitu erukka mudiyathu adhanala 
// specific ah oru place set pannita 
// eppolam post ah call pandramo appolam middle 
// ware use pannanumnu avasiyam ella 

// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1" 
//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]
// // permanent middle ware 
// //XML JSON Text 
// // middleware-express.json() inbuild middleware json ---> json object    
// app.use( express.json() )

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies",  function(request, response){ 
//   response.send(movies)
// });


// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//  movie = await client
// .db("b40wd")
// .collection("movies")
// .findOne({ id: id})  
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 

// //*****POST ***************************************/

//  app.post("/movies",async function(request, response){ 
//   const data = request.body; 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany(data) 
 

//   response.send(result)
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 


//************************************************************************************************* */









//*****************************FIND API ********************************************************************************** */


// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;

// const MONGO_URL = "mongodb://127.0.0.1" 
//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]
// // permanent middle ware 
// //XML JSON Text 
// // middleware-express.json() inbuild middleware json ---> json object    
// app.use( express.json() )

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// //********** normal find method  FIND (METHOD ) //////////////// */
// // app.get("/movies", async function(request, response){ 
// //   const movies = await client
// //   .db("b40wd")
// //   .collection("movies")
// //   .find({}) 
// //   console.log(movies)
// //   response.send(movies)
// // });
// // RESULT :- 
// // {
// //   "_events": {},
// //   "_eventsCount": 0
// // }

// // MONGO DB LA 20 THAAN SHOW AAGURA LIMIT ADHUKKUM MELA venumna cursor use pannanum
// //***********SO CURSOR ARRAY **************************** */


// app.get("/movies", async function(request, response){ 
//   const movies = await client
//   .db("b40wd")
//   .collection("movies")
//   .find({}) 
//   .toArray();
//   console.log(movies)
//   response.send(movies)
// });
// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
 
//   const movie = await client
// .db("b40wd")
// .collection("movies")
// .findOne({ id: id}) 

// console.log(movie)
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 

// //***** -------------- POST -------------------******/

//  app.post("/movies",async function(request, response){ 
//   const data = request.body; 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany(data) 
 

//   response.send(result)
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 
  







//---------------online submit ip address ku pathila 
// mongodb cloud la erukkura url la va kodukkanum 



// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;
// // const MONGO_URL = "mongodb://127.0.0.1" 
// const MONGO_URL = "mongodb+srv://santhiya:santhiya2525@cluster0.mejii.mongodb.net" 
// // mongodb+srv://santhiya:<password>@cluster0.mejii.mongodb.net/?retryWrites=true&w=majority

//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]
// // permanent middle ware 
// //XML JSON Text 
// // middleware-express.json() inbuild middleware json ---> json object    
// app.use( express.json() )

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });


// app.get("/movies", async function(request, response){ 
//   const movies = await client
//   .db("b40wd")
//   .collection("movies")
//   .find({}) 
//   .toArray(); // mongo db la erukkura data ellam varanum 
//   console.log(movies)
//   response.send(movies)
// });
// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
 
//   const movie = await client
// .db("b40wd")
// .collection("movies")
// .findOne({ id: id}) 

// console.log(movie)
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 

// //***** -------------- POST -------------------******/

//  app.post("/movies",async function(request, response){ 
//   const data = request.body; 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany(data) 
 

//   response.send(result)
// });

// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 
  


//*************  29/12/2022 ***************************************************************************************************************** */
 // DELETE METHOD and PUT  method

// import express from "express"
// import { MongoClient } from "mongodb";
// const app = express(); 

// // CONNECTION  path 
// const PORT = 4000;
// const MONGO_URL = "mongodb://127.0.0.1" 
// // const MONGO_URL = "mongodb+srv://santhiya:santhiya2525@cluster0.mejii.mongodb.net" 


//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]
// // permanent middle ware 
// app.use( express.json() )

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });

// app.get("/movies", async function(request, response){ 
//   const movies = await client
//   .db("b40wd")
//   .collection("movies")
//   .find({}) 
//   .toArray(); // mongo db la erukkura data ellam varanum 
//   console.log(movies)
//   response.send(movies)
// });

// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
 
//   const movie = await client
// .db("b40wd")
// .collection("movies")
// .findOne({ id: id}) 

// console.log(movie)
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 



// //-------POST ------
//  app.post("/movies",async function(request, response){ 
//   const data = request.body; 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany(data) 
 

//   response.send(result)
// });


// app. delete("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;

// const result = await client
// .db("b40wd")
// .collection("movies")
// .deleteOne({ id: id}) 

// console.log(result)
// result.deletedCount > 0
//   ? response.send({message:"movie deleted sucessfully "})
//   : response.status(404).send({message:"movie not found "})
// }); 

// //---------PUT METHOD or Update ------------------------------------------------

// app.put("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const data = request.body; 

//   const result = await client
// .db("b40wd")
// .collection("movies")
// .updateOne({ id: id}, {$set: data }) 

// console.log(result)
//   response.send(result)
 
// }); 



// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 
  


//***************FILTER METHOD ********************************************************************************************************************************************** */
//mongodb collection 
// //.env method 
// import express from "express"
// import { MongoClient } from "mongodb";
// import * as dotenv from 'dotenv'
// dotenv.config()
// console.log(process.env.MONGO_URL)

// const app = express(); 

// // CONNECTION  path 
// const PORT = process.env.PORT;
// // const MONGO_URL = "mongodb://127.0.0.1" 
// const MONGO_URL = process.env.MONGO_URL

//  const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 
// await client.connect(); // call pandra method 
// console.log("mongo is connected")

// const movies = [ 
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]
// // permanent middle ware 
// app.use( express.json() )

// app.get("/", function (request, response) { 
//   response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
// });



// // query selector 

// app.get("/movies", async function(request, response){ 
// if  (request.query.rating){
// request.query.rating = +request.query.rating;
// }
// console.log(request.query)

//   const movies = await client
//   .db("b40wd")
//   .collection("movies")
//   .find(request.query)  // which data va call pandramo antha movie data mattum show aagum 
//   .toArray();              // mongo db la erukkura data ellam varanum 

//   // console.log(movies)

//   response.send(movies)
// });

// app.get("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
 
//   const movie = await client
// .db("b40wd")
// .collection("movies")
// .findOne({ id: id}) 

// console.log(movie)
//   movie 
//   ? response.send(movie)
//   : response.status(404).send({message:"movie not found "})
// }); 

// //-------POST ------
//  app.post("/movies",async function(request, response){ 
//   const data = request.body; 
//   console.log(data)

//   const result = await client
//   .db("b40wd")
//   .collection("movies")
//   .insertMany(data) 
 

//   response.send(result)
// });


// app. delete("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;

// const result = await client
// .db("b40wd")
// .collection("movies")
// .deleteOne({ id: id}) 

// console.log(result)
// result.deletedCount > 0
//   ? response.send({message:"movie deleted sucessfully "})
//   : response.status(404).send({message:"movie not found "})
// }); 

// //---------PUT METHOD or Update ------------------------------------------------

// app.put("/movies/:id",async function (request, response) {  //localhost:4000/movies nu kodutha result varum 
//   const { id } = request.params;
//   const data = request.body; 

//   const result = await client
// .db("b40wd")
// .collection("movies")
// .updateOne({ id: id}, {$set: data }) 

// console.log(result)
//   response.send(result)
 
// }); 



// app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 
  




//-------------- 30.12.2022  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// movies data ellam movies.routs.js la erukku 

import express from "express"
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
import moviesRouter from "./routes/movies.route.js"



dotenv.config()
console.log(process.env.MONGO_URL)

const app = express(); 

// CONNECTION  path 
const PORT = process.env.PORT;
// const MONGO_URL = "mongodb://127.0.0.1" 
const MONGO_URL = process.env.MONGO_URL
const client = new MongoClient(MONGO_URL) //dail "CLIENT THAAN line connection" 


await client.connect(); // call pandra method 
console.log("mongo is connected")

// const movies = [ 
//   {
//   "id": "99",
//   "name": "Vikram",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   "rating": 8.4,
//   "summary": "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   "trailer": "https://www.youtube.com/embed/OKBMCL-frPU"
//   },
//   {
//   "id": "100",
//   "name": "RRR",
//   "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   "rating": 8.8,
//   "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//   "id": "101",
//   "name": "Iron man 2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   "rating": 7,
//   "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//   "id": "102",
//   "name": "No Country for Old Men",
//   "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   "rating": 8.1,
//   "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//   "id": "103",
//   "name": "Jai Bhim",
//   "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   "rating": 8.8,
//   "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//   "id": "104",
//   "name": "The Avengers",
//   "rating": 8,
//   "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//   "id": "105",
//   "name": "Interstellar",
//   "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   "rating": 8.6,
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//   "id": "106",
//   "name": "Baahubali",
//   "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   "rating": 8,
//   "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//   "id": "107",
//   "name": "Ratatouille",
//   "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   "rating": 8,
//   "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   },
//   {
//   "name": "PS2",
//   "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   "rating": 8,
//   "trailer": "https://www.youtube.com/embed/KsH2LA8pCjo",
//   "id": "108"
//   },
//   {
//   "name": "Thor: Ragnarok",
//   "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   "rating": 8.8,
//   "trailer": "https://youtu.be/NgsQ8mVkN8w",
//   "id": "109"
//   }
//   ]
// permanent middle ware 
app.use( express.json() )

app.get("/", function (request, response) { 
  response.send("🙋‍♂️, SANTHIYA");  //localhost:4000 nu kodutha result varum 
});

// connection is very important 
// movies.route.js la erukkura data va 
// handle pannanum na any joining erukkanum 
// so router venum go to movies.route.js 
app.use('/movies', moviesRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`)); 
  

export { client } ;