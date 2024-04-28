'use client'
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import CarouselComponent from "./carousel"

import img_one from "../public/nathan-dumlao-drov8-6RLUE-unsplash.jpg"

export default function ContactForm() {
    
    return (
        <>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col w-[50%] gap-y-8 py-5 justify-center items-center ">
                    <div className="border-2 border-red-800 flex flex-col gap-y-3 justify-start items-start">
                    <div className=" ">
                        <p className="text-dark-blue font-medium text-lg">Contact us</p>
                        <h1 className="text-2xl font-bold text-dark">Get in touch</h1>
                        <p className="text-lg font-medium text-gray-500">We&apos;d love to hear from you. Please fill this form</p>
                    </div>
                   </div>
                    <form action="" className="flex flex-col gap-y-3">
                        <div className="flex flex-row border  gap-y-3 gap-x-8 ">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="fname">First Name</label>
                                <input 
                                    type="text" 
                                    className="focus:outline-nontext-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="lname">Last Name</label>
                                <input 
                                    type="text" 
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="email-address">Email</label>
                                <input 
                                    type="text" 
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                               
                                <label htmlFor="phone-number">Phone Number</label>
                                <input 
                                    type="text"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                            
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="msg">Message</label>
                              
                               <textarea 
                                    cols={25} rows={7} maxLength={300} 
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <button type="submit" className="">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" flex flex-row ">
                    <div className="">
                       <Image 
                            src={img_one}
                            alt="coffee cup and jug"
                            width={600}
                            height={100}
                            className="!p-0 !m-0 h-screen"
                            sizes="(max-with: 100%) 100vh"
                            // style={{objectPosition: 'right', objectFit: 'cover'}}
                       />
                       
                    </div>
                </div>
            </div>
        </>
    )
};
