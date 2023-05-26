import express from "express";
import { controller } from "./controllers";
import { login } from "./controllers/login/login";
import cookieParser from "cookie-parser";
import {json, urlencoded} from "body-parser";
import { register } from "./controllers/register/register";

const app = express();

app.use(json());
app.use(urlencoded());

app.set("view engine", 'ejs');  

app.use(express.static("views"));
app.use(cookieParser());

app.post("/login", login);
app.post("/register", register);

app.use("/", controller);
    

app.listen(3000, () => {
    console.info("Listen port 3000");
})

function stu_update(arg0: string, stu_update: any) {
    throw new Error("Function not implemented.");
}
