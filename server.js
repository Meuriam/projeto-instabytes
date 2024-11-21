import express from "express";
import routes from "./src/routes/postsRoutes.js";


const app = express();
routes(app)

app.listen(3000,()=> {
  console.log("servidor escutando..");
});






//const posts = [
//    {
//      id:1,
//      descricao: "Uma foto teste",
//      imagem: "https://placecats.com/millie/300/150"
//    },
//    {
//      id:2,
//      descricao: "Gato fofo dormindo",
//      imagem: "https://placekitten.com/400/200"
//    },
//    {
//      id:3,
//      descricao: "Paisagem montanhosa",
//      imagem: "https://source.unsplash.com/random/400x300/?mountain"
//    },
//    {
//      id:4,
//      descricao: "Cachorro brincando",
//      imagem: "https://source.unsplash.com/random/300x200/?dog"
//    },
//    {
//      id:5,
//      descricao: "Comida deliciosa",
//      imagem: "https://source.unsplash.com/random/200x300/?food"
//    },
//    {
//      id:6,
//      descricao: "Cidade à noite",
//      imagem: "https://source.unsplash.com/random/300x300/?city,night"
//    }
//  ];




//function buscarPostPorId(id){
 //   return posts.findIndex((post) => {
 //       return post.id ===Number(id)
 //   })
//}

//app.get("/posts/:id",(req,res) => {
 //   const index = buscarPostPorId(req.params.id)
 //   res.status(200).json(posts[index]);
//});
