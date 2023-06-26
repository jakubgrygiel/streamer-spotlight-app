import express, { Express, Request, Response } from "express";
const port = 8000;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("SERVER IS RUNNING");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
