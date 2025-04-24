"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import FormField from "@/components/FormField";
import {getCurrentUser} from "@/lib/actions/auth.action";

const interviewSchema = z.object({
    role: z.string().min(2),
    type: z.string().min(2),
    level: z.string().min(2),
    techstack: z.string().min(2),
    amount: z.coerce.number().min(1),
});

export default function StartInterviewPage() {
    const router = useRouter();

    const methods = useForm<z.infer<typeof interviewSchema>>({
        resolver: zodResolver(interviewSchema),
        defaultValues: {
            role: "",
            type: "",
            level: "",
            techstack: "",
            amount: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof interviewSchema>) => {
        try {
            const user = await getCurrentUser();

            if (!user) {
                toast.error("Not authenticated");
                return;
            }

            const userId = user.id;


            const res = await fetch("/api/vapi/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, userId }),
            });

            if (!res.ok) throw new Error("Failed to submit interview data");

            toast.success("Interview started!");
            router.push("/");
        } catch (err) {
            console.error(err);
            toast.error("Someth ing went wrong!");
        }
    };


    return (
        <div className="max-w-xl mx-auto mt10 card-border">
            <div className="card p-10 ">
                <h2 className="text-xl mb-4 font-bold">Customize Your Interview</h2>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4 ">
                        <FormField name="role" label="Job Role" placeholder="e.g. Frontend Developer" />
                        <FormField name="type" label="Question Type" placeholder="e.g Technical, Behavioural" />
                        <FormField name="level" label="Experience Level" placeholder="e.g. Junior, Senior" />
                        <FormField name="techstack" label="Tech Stack" placeholder="e.g. React, Node.js" />
                        <FormField name="amount" label="Number of Questions" type="number" />
                        <Button type="submit" className="btn w-full">Generate Interview</Button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}