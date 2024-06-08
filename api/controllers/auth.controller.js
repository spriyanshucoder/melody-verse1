import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Hash the password
    const hashedPassword =  bcryptjs.hashSync(password, 10);
    
    // Create a new user instance with hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    
    // Save the user to the database
    await newUser.save();

    // Send success response
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Handle error
    console.error("Error creating user:", error);
    res.status(500).json( error.message);
  }
};
