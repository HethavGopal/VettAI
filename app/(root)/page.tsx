import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {dummyInterviews} from "@/constants";
import InterviewCard from "@/components/interviewCard";

const Page = () => {
    return (
       <>
       <section className="card-cta">
           <div className="flex flex-col gap-6 max-w-lg">
               <h2>Ace your interviews with AI-driven mock sessions and real-time feedback.</h2>
                <p className="text-lg">
                    Practice smarter. Get job-ready with AI-powered interview coaching
                </p>
                <Button asChild className="btn-primary max-sm:w-full">
                    <Link href="/interview"> Start an Interview</Link>
                </Button>
           </div>

           <Image src="/customRobot.png" alt="robot" width={350} height={350} className="max-sm:hidden pr-6"/>
       </section>

       <section className="flex flex-col gap-6 mt-8">
           <h2>Your Interviews </h2>
           <div className="interviews-section">
               {dummyInterviews.map((interview) => (
                   <InterviewCard {...interview} key={interview.id} />
               ))}
               {/*<p>You haven't taken any interviews</p>*/}
           </div>
       </section>

       <section className="flex flex-col gap-6 mt-8">
           <h2>Take an Interview</h2>
           <div className="interviews-section">
               {dummyInterviews.map((interview) => (
                   <InterviewCard {...interview} key={interview.id} />
               ))}
           </div>

       </section>



       </>
    )
}
export default Page
