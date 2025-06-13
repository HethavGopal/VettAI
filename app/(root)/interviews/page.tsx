import Link from "next/link";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId } from "@/lib/actions/general.action";
import { ArrowLeft, Calendar } from "lucide-react";

export default async function InterviewsPage() {
    const user = await getCurrentUser();
    const userInterviews = await getInterviewsByUserId(user?.id!);

    const hasInterviews = userInterviews?.length! > 0;

    return (
        <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" asChild className="text-white/70 hover:text-white">
                            <Link href="/dashboard" className="flex items-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Dashboard
                            </Link>
                        </Button>
                    </div>
                    
                    <Button asChild className="bg-primary-200 text-black hover:bg-primary-100 w-full sm:w-auto">
                        <Link href="/interview/start" className="flex items-center gap-2 justify-center">
                            Start New Interview
                        </Link>
                    </Button>
                </div>

                <div className="mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Your Interviews
                    </h1>
                    <p className="text-lg text-white/70">
                        Track your progress and review your interview history
                    </p>
                </div>

                {/* Interviews Grid */}
                {hasInterviews ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {userInterviews?.map((interview: any) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id || ''}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                techstack={interview.techstack}
                                createdAt={interview.createdAt}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                        <div className="p-6 bg-primary-200/20 rounded-full mb-6">
                            <Calendar className="w-12 h-12 text-primary-200" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">No interviews yet</h3>
                        <p className="text-white/60 mb-8 max-w-md">
                            Start your interview preparation journey today and track your progress over time.
                        </p>
                        <Button asChild className="bg-primary-200 text-black hover:bg-primary-100">
                            <Link href="/interview/start">Take Your First Interview</Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
} 