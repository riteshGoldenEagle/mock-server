import express from "express";
import { https } from "firebase-functions";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.listen(port, () => {
   console.log(`Example app listening on port http://localhost:${port}`);
});

export const api = https.onRequest(app);
