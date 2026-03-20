//контроллер авторизации

import bcrypt from "bcrypt";
import authUsers from "../models/authUser.js";
import generateToken from "../utils/generateToken.js";

// user register для регистрации
export async function register(req, res, next) {
  const { username, email, password } = req.body;

  try {
    if(!username || !email || !password){
        return res.status(400).json({
            message: 'Username, email and password are required'
        })
    }

    if(!email.includes("@")){
        return res.status(400).json({
            message: "Invalid email format"
        })
    }

    if(password.length < 6){
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        })
    }

    const existingEmail = await authUsers.findOne({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }

    const existingUsername = await authUsers.findOne({
      where: { username },
    });

    if (existingUsername) {
      return res.status(400).json({
        message: "User with this username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await authUsers.create({
      username,
      email,
      password: hashedPassword,
    });

    //generating JWT
    const token = generateToken(newUser);

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
}

// user signin  для входа
export async function signIn(req, res, next) {
  const { email, password } = req.body;

  try {
    //const user = users.find((user) => user.email === email)
    //const user = authUsers.findOne((user) => user.email === email)

    const user = await authUsers.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    //comparing password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        message: "Incorrect password",
      });
    }

    //generating JWT
    const token = generateToken(user);

    res.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    next(error);
  }
}

// getting profile  для защищённого профиля
// export function getProfile(req, res) {
//   res.json({
//     message: "User profile",
//     user: req.user,
//   });
// }

export async function getProfile(req, res, next) {
  try {
    const user = await authUsers.findByPk(req.user.id, {
      attributes: ["id", "username", "email"],
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User profile",
      user,
    });
  } catch (error) {
    next(error);
  }
}
