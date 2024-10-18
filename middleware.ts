import { NextResponse } from "next/server";
import { authMiddleware } from "@/middlewares/authMiddleware";

export const config = {
    matcher: "/api/:path*",
}

export default async function middleware(req: Request) {
    //Auth middleware
    if(req.url.includes("/api/users/") && req.method === "DELETE") {
        return NextResponse.json(
            { error: "Unauthorized" }, 
            { status: 401 }
        );
    }

    if(req.url.includes("/api/users") && req.method === "PATCH" ||
    req.url.includes("/api/articles") ||
    req.url.includes("/api/categories")) {

        const authResult = await authMiddleware(req);

        if (!authResult) {
            return NextResponse.json(
                { error: "Unauthorized" }, 
                { status: 401 }
            );
        }
    }

    return NextResponse.next();
}