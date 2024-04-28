"use client"
import { Pacifico } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"



const pacifico = Pacifico({weight: ["400"], subsets: ['latin']})

export default function Navbar() {
    const pathname = usePathname()
    return (
        <>
            <nav className="bg-white shadow-md w-full flex flex-row justify-between items-center  gap-x-5 px-[10%] py-5">
                <div className="">
                    <p className="text-xl font-bold ">
                        <span className={pacifico.className}>
                            <Link href={'/'}>Central Park Coffee</Link>    
                        </span> 
                    </p>
                </div>
                <div className="flex flex-row gap-x-10 text-lg transition-colors duration-300 ">
                    <div className="">
                        <Link href={'/'} className={`  ${pathname === '/' ? 'active text-black font-semibold' : 'text-gray-400 font-semibold'}`}>
                            Home
                        </Link>
                    </div>
                    <div className="">
                        <Link href={'/contact'} className={` ${pathname === '/contact' ? 'active text-black font-semibold' : 'text-gray-400 font-semibold'}`}>
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
};
