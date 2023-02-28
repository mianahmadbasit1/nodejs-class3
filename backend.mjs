import express from "express";
import cors from "cors"
const app = express();

app.use(express.json())
app.use(cors());
const port = process.env.PORT || 4500;

let users=[];


app.post("/user", (req, res) => {
    console.log(req.body)
    users.push(req.body);
  res.send("user is created");

});
app.get("/user", (req, res) => {
  res.send(users)
  
});

app.put('/user', (req, res) => {
    res.send("your user is modify")
});

app.delete('/user', (req, res) => {
    res.send("your user is deleted")
});

// app.get("/", (req, res) => {
//     res.send("its home page");
// });

// app.get("/profile", (req, res) => {
//     res.send("its profile page");
// });
// app.get("/weather", (req, res) => {
//     res.send({
//         city:"lhr",
//         temp:4000
//     });
// });




app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});
