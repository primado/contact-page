'use client'
import { useForm } from "react-hook-form"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import Image from "next/image"
import CarouselComponent from "./carousel"
import { ErrorMessage } from "@hookform/error-message"
import { toast } from "sonner"


import img_one from "../public/nathan-dumlao-drov8-6RLUE-unsplash.jpg"


type ContactType = {
    first_name: string,
    last_name: string,
    phone_number: string,
    email_address: string,
    message: string
}

const api_url = process.env.NEXT_PUBLIC_API_BASE_URL

export default function ContactForm() {

    const {register, handleSubmit, formState: { errors}} = useForm<ContactType>({
        criteriaMode: 'all',
        defaultValues: {
            first_name: "",
            last_name: "",
            email_address: "",
            phone_number: "",
            message: ""
        }
    })

    // tanstack Query

    const contactFormMutate = useMutation({
        mutationKey: ['contact'],
        mutationFn: async (formData: ContactType) => {
            const response = await axios.post(`${api_url}`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data);
            return response.data
        },
        onSuccess: () => {
            toast.success('Submitted successfully', {
                position: 'top-center',
                duration: 4000,
                closeButton: true
            })
        },
        onError: (error) => {
            toast.error('Oops, an error occured, please try again', {
                position: 'top-center',
                duration: 4000,
                closeButton: true
            })
            console.log('Form error =>', error.cause, error.message)
        }
    })
        
    const onSubmit = async (data: ContactType) => {
        console.log("Contact form data => ", data)
        contactFormMutate.mutateAsync(data)
    }
    
    
    return (
        <>
            <div className="flex flex-row w-full justify-between items-center">
                <div className="flex flex-col justify-center items-start px-[10%] py-16">
                    <div className="flex flex-col gap-y-4 ">
                        <div className="flex flex-col gap-y-1 ">
                            <p className="text-dark-blue font-semibold text-lg">Contact us</p>
                            <h1 className="text-3xl  font-bold text-dark">Get in touch</h1>
                           
                        </div>
                        <p className="text-lg font-medium text-gray-500">We&apos;d love to hear from you. Please fill this form</p>
                   </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 mt-5">
                        <div className="flex flex-row gap-y-3 gap-x-8 ">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="fname">First Name</label>
                                <input 
                                    type="text" 
                                    {...register("first_name", {
                                        required: {
                                            value: true,
                                            message: "First name is required"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Accepts a maximum of 150 characters"
                                        }
                                    })}
                                    placeholder="First name"
                                    className="focus:outline-nontext-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 <ErrorMessage
                                   errors={errors}
                                   name="first_name"
                                   render={({ messages }) =>
                                     messages &&
                                     Object.entries(messages).map(([type, message]) => (
                                       <p key={type} className="text-sm text-red-500 font-normal">{message}</p>
                                     ))
                                   }
                                 />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="lname">Last Name</label>
                                <input 
                                    type="text" 
                                    {...register("last_name", {
                                        required: {
                                            value: true,
                                            message: "Last name is required"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Accepts a maximum of 60 characters"
                                        }
                                    })}
                                    placeholder="Last name"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 <ErrorMessage
                                   errors={errors}
                                   name="last_name"
                                   render={({ messages }) =>
                                     messages &&
                                     Object.entries(messages).map(([type, message]) => (
                                       <p key={type} className="text-sm text-red-500 font-normal">{message}</p>
                                     ))
                                   }
                                 />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="email-address">Email</label>
                                <input 
                                    type="text" 
                                    {...register("email_address", {
                                        required: {
                                            value: true,
                                            message: "Email Address is required"
                                        },
                                      
                                    })}
                                    placeholder="you@email.com"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 <ErrorMessage
                                   errors={errors}
                                   name="email_address"
                                   render={({ messages }) =>
                                     messages &&
                                     Object.entries(messages).map(([type, message]) => (
                                       <p key={type} className="text-sm text-red-500 font-normal">{message}</p>
                                     ))
                                   }
                                 />
                            </div>
                            <div className="flex flex-col gap-y-2">
                               
                                <label htmlFor="phone-number">Phone Number</label>
                                <input 
                                    type="text"
                                    {...register("phone_number", {
                                        required: {
                                            value: true,
                                            message: "Phone number is required"
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Accepts a maximum of 15 characters"
                                        }
                                    })}
                                    placeholder="+233 00 000 0000"
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 <ErrorMessage
                                   errors={errors}
                                   name="phone_number"
                                   render={({ messages }) =>
                                     messages &&
                                     Object.entries(messages).map(([type, message]) => (
                                       <p key={type} className="text-sm text-red-500 font-normal">{message}</p>
                                     ))
                                   }
                                 />
                            
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="msg">Message</label>
                              
                               <textarea 
                                    cols={25} rows={7} maxLength={300}
                                    {...register("message", {
                                        required: {
                                            value: true,
                                            message: "First name is required"
                                        },
                                      
                                    })} 
                                    className="text-base font-medium focus:outline-none ring-2 ring-gray-400 p-2 rounded-md focus:ring-2 focus:ring-dark-blue"
                                />
                                 <ErrorMessage
                                   errors={errors}
                                   name="message"
                                   render={({ messages }) =>
                                     messages &&
                                     Object.entries(messages).map(([type, message]) => (
                                       <p key={type} className="text-sm text-red-500 font-normal">{message}</p>
                                     ))
                                   }
                                 />
                            </div>
                            <div className="flex flex-col gap-y-2 mt-2">
                                <button type="submit" className="bg-dark-blue text-lg !font-medium  text-white p-2 rounded-md hover:bg-opacity-90 transition-transform duration-300 ease-in-out hover:translate-y-0 hover:scale-95 delay-100">
                                    {contactFormMutate.isPending ? (
                                        'Sending message...'
                                    ): 'Send message'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className=" flex flex-row ">
                    <div className="">
                       {/* <Image 
                            src={img_one}
                            alt="coffee cup and jug"
                            width={650}
                            height={100}
                            className="!p-0 !m-0 h-screen"
                            sizes="(max-with: 100%) 100vh"
                            // style={{objectPosition: 'right', objectFit: 'cover'}}
                       /> */}

                       {/* You can  use either the carousel or the single image */}
                       <CarouselComponent /> 
                    </div>
                </div>
            </div>
        </>
    )
};

