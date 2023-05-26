import express, { Request, Response } from "express";
import { MySQLDb } from "../db/db";

export const controller = express.Router();

controller.get("/", (req: Request, res: Response) => {
    const mysql = MySQLDb.getInstance();
    const db = mysql.db;
    db.query(`SELECT * FROM data`, function(err, data) {
        if (err) throw err;
        console.log(data);
        
        res.render("index", { data })
    })
})

controller.get("/login", (req: Request, res: Response) => {
      res.render("login", {validate: ""})
})

controller.get("/register", (req: Request, res: Response) => {
    res.render("register", {result: ""});
})
