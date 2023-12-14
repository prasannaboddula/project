const express = require("express");
const app = express();
const port = 9000

let jokes = [
    ["They call it the PS4 because there are only 4 games worth playing!"],
    ["So this person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."],
    ["The computer tired when it got home because it had a hard drive"],
    ["Java developers wear glasses because they don't C#"],
    ["Jack and Jill 'really' go up the hill to get better Wi-fi."],
    ["So this person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."],
    ["The robot say to the dead robot, Rust-in-peace."],
    ["So this person went to the doctor and told the doctor he had an addiction to twitter and the doctor said well I am not following."],
    ["How do you comfort a JavaScript bug? You console it"],
    ["A SQL query goes into a bar, walks up to two tables and asks, 'Can I join you?'"],
    ["Jack and Jill 'really' go up the hill to get better Wi-fi."],
]

app.use("/", (req,res) => {
    res.json({jokes});
});

app.listen(9000, () => {
    console.log(`Start server on ${port}`);
});