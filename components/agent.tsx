"use client";
import React from 'react'
import Image from "next/image"
import { useState, useEffect } from "react";
import {cn} from "@/lib/utils";


enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

const Agent = ({userName} :AgentProps) => {
    const isSpeaking = true;
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.FINISHED);
    const messages = [
        'Whats your name?',
        'My name is john, nice to meet you!',
    ];

    const lastmessage = messages[messages.length - 1];

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image src="/VLogoBlack.svg" alt="vapi" width={165} height={155} className="object-cover"/>
                        {isSpeaking && <span className="animate-speak"/> }
                    </div>
                    <h3>Vera</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image src="/userAvatarNew.svg" alt="user-avatar" width={1000} height={840} className="rounded-full object-cover size-[120px]"/>
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {messages.length > 0 && (
                <div className="transcript-border">
                    <div className="transcript">
                        <p key={lastmessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                            {lastmessage}
                        </p>
                    </div>
                </div>
            )}


            <div className="w-full flex justify-center">
                {callStatus !== 'ACTIVE' ? (
                    <button className="relative btn-call">
                        <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus !== 'CONNECTING' & 'hidden')} />
                            <span>
                                {callStatus === 'INACTIVE'||
                                callStatus === 'FINISHED' ? 'Call' : '...' }
                            </span>

                    </button>
                ) : (
                    <button className="btn-disconnect">
                        End
                    </button>
                )


                }
            </div>

        </>
    )
}
export default Agent
