const express = require("express");
const app = express();
const port = 3000;

// Your details
const name = "Gerard Michael V. Gonzales";
const section = "IT BA - 4101";
const quote = "Success is not final; failure is not fatal.";

app.get("/", (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Profile</title>
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    text-align: center;
                }
                h1 {
                    margin: 0;
                    font-size: 40px;
                }
                p {
                    margin-top: 10px;
                    font-size: 20px;
                    font-style: italic;
                    color: gray;
                }
            </style>
        </head>
        <body>
            <h1>${name}</h1>
            <h2>${section}</h2>
            <p>${quote}</p>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});