import express from 'express';
import {createClient} from '@supabase/supabase-js'
import { routerApi } from "./routes";
import morgan from 'morgan'
import bodyParser from "body-parser";
const app = express();
const port = 8000;

app.use(express.json());

// Get the values or provide default values if they are undefined
const databaseUrl = "";
const databaseKey = "";

export const supabase = createClient(databaseUrl, databaseKey);

// using morgan for logs
app.use(morgan('combined'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req:any, res:any) => {
  res.send({ msg: "Hola mi server en express" });
});

app.listen(port, () => {
  console.log(`Corriendo en http://localhost:${port}`);
});

routerApi(app);
