import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);


// CRUD för en resurs posts
// app.post("/posts", createPost);
// app.get("/posts", getPosts);
// app.get("/posts/:id", getPost);
// app.put("/posts/:id", updatePost);
// app.delete("/posts/:id", deletePost);
// app.get("/users/:id:/posts", getPostsByUser);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



