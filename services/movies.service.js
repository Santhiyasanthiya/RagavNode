import { client } from "../index.js";

//-------------cut panni services movies.service la podanum adhanala copy and paste panni erukken --------------------------------------------
export async function updateMovieById(id, data) {
  return await client
    .db("b40wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
}
export async function deleteMovieById(id) {
  return await client.db("b40wd").collection("movies").deleteOne({ id: id });
}
export async function createMovies(data) {
  return await client.db("b40wd").collection("movies").insertMany(data);
}
export async function getMovieById(id) {
  return await client.db("b40wd").collection("movies").findOne({ id: id });
}
export async function getMovies(request) {
  return await client
    .db("b40wd")
    .collection("movies")
    .find(request.query) // which data va call pandramo antha movie data mattum show aagum
    .toArray();
}
