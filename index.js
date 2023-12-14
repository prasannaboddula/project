import express from "express";

const app = express();
const port = 9000

let jokes = [
    {"value":"They call it the PS4 because there are only 4 games worth playing!"},
    {"value":"So this person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."},
    {"value":"The computer tired when it got home because it had a hard drive"},
    {"value":"Java developers wear glasses because they don't C#"},
    {"value":"Jack and Jill 'really' go up the hill to get better Wi-fi."},
    {"value":"So this person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."},
    {"value":"The robot say to the dead robot, Rust-in-peace."},
    {"value":"So this person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."},
    {"value":"How do you comfort a JavaScript bug? You console it"},
    {"value":"A SQL query goes into a bar, walks up to two tables and asks, 'Can I join you?'"},
    {"value":"Jack and Jill 'really' go up the hill to get better Wi-fi."},
]

app.use("/jokes", (req,res) => {
    const i = Math.floor(Math.random()*11);
    res.json(jokes[i]);
});

app.use("/", (req,res) => {
    res.json("welcome to the random jokes");
});

app.listen(9000, () => {
    console.log(`Start server on ${port}`);
});