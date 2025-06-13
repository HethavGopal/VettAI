import dayjs from 'dayjs';
import Image from "next/image";
import {getRandomInterviewCover} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import DisplayTechIcons from "@/components/displayTechIcons";
import {getFeedbackByInterviewId} from "@/lib/actions/general.action";

const InterviewCard = async ({
                                 interviewId,
                                 userId,
                                 role,
                                 type,
                                 techstack,
                                 createdAt,
                             }: InterviewCardProps) => {
    const feedback =
        userId && interviewId
            ? await getFeedbackByInterviewId({
                interviewId,
                userId,
            })
            : null;


    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const rawDate = feedback?.createdAt || createdAt;
    const formattedDate = dayjs(
        rawDate?.toDate ? rawDate.toDate() : rawDate
    ).format("MMM D, YYYY");


    return (
        <div className="relative w-full max-w-sm mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-200/20">
            {/* Type Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-200/20 border border-primary-200/30">
                <p className="text-xs font-medium text-primary-200">{normalizedType}</p>
            </div>

            {/* Content */}
            <div className="space-y-4">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <Image 
                        src={getRandomInterviewCover()} 
                        alt="cover image" 
                        width={80} 
                        height={80} 
                        className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20" 
                    />

                    <h3 className="text-lg sm:text-xl font-semibold text-white capitalize leading-tight">
                        {role} Interview
                    </h3>
                </div>

                {/* Stats */}
                <div className="flex flex-row justify-center gap-4 sm:gap-6">
                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/calendar.svg" alt="calendar" width={18} height={18} className="opacity-70" />
                        <p className="text-sm text-white/70">{formattedDate}</p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <Image src="/star.svg" alt="star" width={18} height={18} className="opacity-70" />
                        <p className="text-sm font-medium text-white">
                            {feedback?.totalScore || '---'}/100
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 line-clamp-3 text-center leading-relaxed min-h-[60px]">
                    {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
                </p>

                {/* Tech Stack */}
                <div className="flex justify-center">
                    <DisplayTechIcons techStack={techstack} />
                </div>

                {/* Action Button */}
                <Button className="w-full bg-primary-200 text-black hover:bg-primary-100 font-medium py-2.5 rounded-lg transition-colors">
                    <Link 
                        href={feedback
                            ? `/interview/${interviewId}/feedback`
                            : `/interview/${interviewId}`
                        }
                        className="w-full flex justify-center"
                    >
                        {feedback ? 'Check Feedback' : 'Start Interview'}
                    </Link>
                </Button>
            </div>
        </div>
    )
}
export default InterviewCard