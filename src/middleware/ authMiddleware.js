import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

export async function protect(request, response, next) {
  try {
    const token = request.cookies["auth-token"];

    if (!token) {
      response.status(401).json({ success: false, message: "Not authorized" });
      return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      response.status(401).json({ success: false, message: "Not authorized" });
      return;
    }

    request.user = user;

    next();
  } catch (error) {
    response.status(401).json({ success: false, message: "Not authorized" });
  }
}
