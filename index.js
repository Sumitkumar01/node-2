import express from "express";

const Port = 8000;
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>hello </h1>")
})

app.listen(Port, () => {
    console.log(`http://localhost:${Port}`)
})