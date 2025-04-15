'use server';


import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60* 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
    const {uid, name, email} = params;
    try {
        // gets user record
        const userRecord = await db.collection('users').doc(uid).get();

        // Case when user already exists
        if (userRecord.exists) {
            return {
                success: false,
                message: `User already exists!`,
            }
        }

        await db.collection('users').doc(uid).set({
            name,email
        })

        return {
            success: true,
            message: `Account Created successfully. Please Sign in!`,
        }

    }catch(e: any) {
        console.log('Error', e);


        if(e.code === 'auth/email-already-exists') {
            return {
                success: false,
                message: 'This email is already in use',
            }
        }
        return {
            success: false,
            message: "Failed to create an account",
        }

    }
}

export async function signIn(params: SignInParams) {
    const { email, idToken } = params;

    try {
        const userRecord = await auth.getUserByEmail(email);
        if (!userRecord)
            return {
                success: false,
                message: "User does not exist. Create an account.",
            };

        await setSessionCookie(idToken);
    } catch (error: any) {
        console.log("");

        return {
            success: false,
            message: "Failed to log into account. Please try again.",
        };
    }
}

export async function setSessionCookie(idToken: string){
    const cookieStore = await cookies();

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000,
    })

    cookieStore.set('session', sessionCookie, {
        maxAge: ONE_WEEK,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax'
    });

}