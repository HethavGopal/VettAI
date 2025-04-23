import { NextResponse } from "next/server";
import { db } from "@/firebase/admin"; // your initialized Firebase admin
import { Timestamp } from "firebase-admin/firestore";

export async function GET() {
    return Response.json({ success: true, data: 'THANK YOU!' }, { status: 200 });
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userId, role, type, level, techstack, amount } = body;

        if (!userId || !role || !type || !level || !techstack || !amount) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const interviewData = {
            userId,
            role,
            type,
            level,
            techstack,
            amount,
            finalized: false, // optional for later use
            createdAt: Timestamp.now(),
        };

        await db.collection("interviews").add(interviewData);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Error creating interview:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}