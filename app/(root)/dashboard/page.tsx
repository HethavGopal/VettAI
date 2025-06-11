import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
    getInterviewsByUserId,
    getLatestInterviews,
} from "@/lib/actions/general.action";
import { Calendar, Clock, Users, ArrowRight, Plus } from "lucide-react";

async function Dashboard() {
    const user = await getCurrentUser();

    const [userInterviews, allInterview] = await Promise.all([
        getInterviewsByUserId(user?.id!),
        getLatestInterviews({ userId: user?.id! }),
    ]);

    const hasPastInterviews = userInterviews?.length! > 0;
    const hasUpcomingInterviews = allInterview?.length! > 0;

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-3xl mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 via-primary-100/10 to-transparent" />
                <div className="absolute inset-0 hero-bg" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
                    <div className="flex flex-col gap-6 max-w-2xl">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Welcome back, <br />
                                <span className="bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
                                    {(user as any)?.firstName || user?.email?.split('@')[0] || 'Interviewer'}
                                </span>
                            </h1>
                            
                            <p className="text-xl text-white/70 leading-relaxed">
                                Ready to ace your next interview? Practice with AI-driven scenarios and get instant feedback to improve your skills.
                            </p>
                        </div>

                        <div>
                            <Button asChild className="bg-gradient-to-r from-primary-200 to-primary-100 text-black font-semibold px-8 py-4 rounded-full text-lg hover:from-primary-100 hover:to-primary-200 transition-all duration-300 shadow-lg hover:shadow-primary-200/30 transform hover:scale-105">
                                <Link href="/interview/start" className="flex items-center gap-2">
                                    <Plus className="w-5 h-5" />
                                    Start New Interview
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <Image
                            src="/customRobot.png"
                            alt="AI Interview Assistant"
                            width={400}
                            height={400}
                            className="max-sm:hidden drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Your Recent Interviews */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Your Recent Interviews</h2>
                    {hasPastInterviews && (
                        <Link href="/interviews" className="text-primary-200 hover:text-primary-100 transition-colors">
                            View All
                        </Link>
                    )}
                </div>
                
                <div className="interviews-section">
                    {hasPastInterviews ? (
                        userInterviews?.slice(0, 3).map((interview: any) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id || ''}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                techstack={interview.techstack}
                                createdAt={interview.createdAt}
                            />
                        ))
                    ) : (
                        <div className="glass-card p-8 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-primary-200/20 rounded-full">
                                    <Calendar className="w-8 h-8 text-primary-200" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">No interviews yet</h3>
                                    <p className="text-white/60 mb-4">Start your interview preparation journey today!</p>
                                    <Button asChild className="bg-primary-200 text-black hover:bg-primary-100">
                                        <Link href="/interview/start">Take Your First Interview</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Available Practice Interviews */}
            <section>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Practice Interviews</h2>
                    <div className="flex items-center gap-2 text-white/60">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{allInterview?.length || 0} available</span>
                    </div>
                </div>

                <div className="interviews-section">
                    {hasUpcomingInterviews ? (
                        allInterview?.map((interview: any) => (
                            <InterviewCard
                                key={interview.id}
                                userId={user?.id || ''}
                                interviewId={interview.id}
                                role={interview.role}
                                type={interview.type}
                                techstack={interview.techstack}
                                createdAt={interview.createdAt}
                            />
                        ))
                    ) : (
                        <div className="glass-card p-8 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-4 bg-blue-500/20 rounded-full">
                                    <Clock className="w-8 h-8 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">No practice interviews available</h3>
                                    <p className="text-white/60">Check back soon for new interview opportunities!</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Dashboard; 