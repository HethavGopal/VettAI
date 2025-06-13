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
            <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 via-primary-100/10 to-transparent" />
                <div className="absolute inset-0 hero-bg" />
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
                            <div className="space-y-4">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                    Welcome back, <br />
                                    <span className="bg-gradient-to-r from-primary-200 to-primary-100 text-transparent bg-clip-text">
                                        {(user as any)?.firstName || user?.email?.split('@')[0] || 'Interviewer'}
                                    </span>
                                </h1>
                                
                                <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                                    Ready to ace your next interview? Practice with AI-driven scenarios and get instant feedback to improve your skills.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="bg-gradient-to-r from-primary-200 to-primary-100 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:from-primary-100 hover:to-primary-200 transition-all duration-300 shadow-lg hover:shadow-primary-200/30 transform hover:scale-105">
                                    <Link href="/interview/start" className="flex items-center justify-center gap-2">
                                        <Plus className="w-5 h-5" />
                                        Start New Interview
                                    </Link>
                                </Button>
                                
                                {hasPastInterviews && (
                                    <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg">
                                        <Link href="/interviews" className="flex items-center justify-center gap-2">
                                            View All Interviews
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 lg:mt-0 flex-shrink-0 hidden lg:block">
                            <Image
                                src="/customRobot.png"
                                alt="AI Interview Assistant"
                                width={400}
                                height={400}
                                className="w-96 h-96 xl:w-[400px] xl:h-[400px] drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
                {/* Your Recent Interviews */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Recent Interviews</h2>
                        {hasPastInterviews && (
                            <Link href="/interviews" className="text-primary-200 hover:text-primary-100 transition-colors text-sm sm:text-base flex items-center gap-1">
                                View All
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                            <div className="col-span-full">
                                <div className="glass-card p-6 sm:p-8 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 bg-primary-200/20 rounded-full">
                                            <Calendar className="w-8 h-8 text-primary-200" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl sm:text-2xl font-semibold text-white">No interviews yet</h3>
                                            <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">Start your interview preparation journey today!</p>
                                            <Button asChild className="bg-primary-200 text-black hover:bg-primary-100 w-full sm:w-auto">
                                                <Link href="/interview/start">Take Your First Interview</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Available Practice Interviews */}
                <section>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Practice Interviews</h2>
                        <div className="flex items-center gap-2 text-white/60">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{allInterview?.length || 0} available</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                            <div className="col-span-full">
                                <div className="glass-card p-6 sm:p-8 text-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 bg-blue-500/20 rounded-full">
                                            <Clock className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl sm:text-2xl font-semibold text-white">No practice interviews available</h3>
                                            <p className="text-white/60 text-sm sm:text-base">Check back soon for new interview opportunities!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard; 