const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());



app.get("/", async (req, res) => {
    res.send("Hello World!");
});

app.get("/home", async (req, res) => {
    res.send("Hello World!");
});

app.post("/post", async (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
});


app.listen(process.env.PORT || 8080, () => console.log(`Server started on port ${PORT}`));

