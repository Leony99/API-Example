import { jwtVerify } from "jose";

export async function authMiddleware(req: Request) {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
        return false;
    }
    
    try {
        await jwtVerify(
            token,
            new TextEncoder().encode(process.env.JWT_SECRET)
        );

        return true;
    } catch (err) {
        console.log("Error decoding token -> " + err);
        return false;
    }
}