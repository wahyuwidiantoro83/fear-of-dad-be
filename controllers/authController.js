import { Prisma, PrismaClient } from "@prisma/client";
import responseTemplate from "../utils/responseTemplate.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const SECRET = process.env.SECRET_JWT;

async function loginController(req, res) {
  try {
    const { email, password } = req.body;
    const userData = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!userData) {
      return responseTemplate(res, 404, false, "Account Not Found");
    }
    const hashedPassword = userData.password;
    const comparePassword = await bcrypt.compare(password, hashedPassword);
    if (!comparePassword) {
      return responseTemplate(res, 401, false, "Wrong Account or Password");
    }
    delete userData.password;
    delete userData.id;
    delete userData.role;
    const token = jwt.sign(userData, SECRET, { expiresIn: "7d" });
    return responseTemplate(res, 200, true, "Login success", { token });
  } catch (error) {
    return responseTemplate(res, 500, false, "System Error");
  }
}

async function registerController(req, res) {
  try {
    const { email } = req.body;
    const isExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (isExist) {
      return responseTemplate(res, 400, false);
    }
  } catch (error) {}
}

export { loginController };
