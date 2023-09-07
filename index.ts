import express from 'express';
const app = express();
const port = 8000;

app.get("/", (req:any, res:any) => {
  res.send({ msg: "Hola mi server en express" });
});

app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port}`);
});
