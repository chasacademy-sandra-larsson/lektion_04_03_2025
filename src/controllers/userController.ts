import { Request, Response } from "express"
import { query } from "../config/db"
import { User } from "../types";


// CREATE
export const createUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

    // TODO: No user duplicate?

    try {
        const result = await query<User[]>(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, password]
        );

        // TODO: Kolla på result.affectedRows om den är true

        res.status(201).json({message: "User created successfully"});

    } catch(error) {

        res.status(500).json({error: "Internal server error"});
    }

};

// READ ONE
export const getUser = async (req: Request, res: Response) => {

    // Hämta url-parameter
    const { id } = req.params;
    try {
        const result = await query<User[]>(
            "SELECT * FROM users WHERE id = ?",
            [id]
          );

          // TODO: Om användaren inte hittas

          res.status(200).json({message: "User fetched successfuly", user: result[0]});

    } catch(error) {
        res.status(500).json({error: "Internal server error"});
    }

}


// READ MANY


// UPDATE 


// DELETE

