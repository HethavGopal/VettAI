import { NextResponse } from "next/server";
import { db } from "@/firebase/admin"; // your initialized Firebase admin
import { Timestamp } from "firebase-admin/firestore";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { getRandomInterviewCover } from "@/lib/utils";

export async function GET() {
    return Response.json({ success: true, data: 'THANK YOU!' }, { status: 200 });
}

export async function POST(req: Request) {
    try {
        // Log environment variables (without sensitive values)
        console.log("Environment check:", {
            hasFirebaseConfig: !!process.env.FIREBASE_PROJECT_ID,
            hasGoogleKey: !!process.env.GOOGLE_GENERATIVE_AI_API_KEY,
            hasVapiToken: !!process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN,
        });

        const body = await req.json();
        const { userId, role, type, level, techstack, amount } = body;

        if (!userId || !role || !type || !level || !techstack || !amount) {
            console.error("Missing required fields:", { userId, role, type, level, techstack, amount });
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // Validate Google API key
        if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
            console.error("Missing GOOGLE_GENERATIVE_AI_API_KEY");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        try {
            const { text: questionsText } = await generateText({
                model: google("gemini-2.0-flash-001"),
                prompt: `Prepare questions for a job interview.
The job role is ${role}.
The job experience level is ${level}.
The tech stack used in the job is: ${techstack}.
The focus between behavioural and technical questions should lean towards: ${type}.
The amount of questions required is: ${amount}.
Please return only the questions, without any additional text.
The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
Return the questions formatted like this:
["Question 1", "Question 2", "Question 3"]

Thank you! <3`,
            });

            let parsedQuestions: string[] = [];
            try {
                parsedQuestions = JSON.parse(questionsText);
            } catch (err) {
                console.error("Failed to parse questions from Gemini:", questionsText);
                parsedQuestions = []; // fallback to empty array if parsing fails
            }

            const interviewData = {
                userId,
                role,
                type,
                level,
                techstack: techstack.split(",").map((t: string) => t.trim()),
                amount,
                questions: parsedQuestions,
                finalized: true,
                coverImage: getRandomInterviewCover(),
                createdAt: Timestamp.now(),
            };

            try {
                await db.collection("interviews").add(interviewData);
                return NextResponse.json({ success: true });
            } catch (dbError) {
                console.error("Database error:", dbError);
                return NextResponse.json({ error: "Database error" }, { status: 500 });
            }
        } catch (aiError) {
            console.error("AI generation error:", aiError);
            return NextResponse.json({ error: "AI generation error" }, { status: 500 });
        }
    } catch (err) {
        console.error("Error creating interview:", err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}