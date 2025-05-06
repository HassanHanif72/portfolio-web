import React from 'react'
import { Button } from "@/components/ui/button"
import profile_pic from '../assets/images/profile-pic.jpg'

const Home = () => {
    return (
        <>
            <section className="text-center pt-32 pb-32 px-4">
                <div className="container mx-auto">
                    <img
                        src={profile_pic}
                        alt="Your Name"
                        className="w-32 h-32 rounded-full border-4 border-primary mb-6 object-cover m-auto"
                    />

                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        Hi, I'm <span className="text-primary">Hassan </span>
                    </h1>
                    <p className="text-2xl text-black font-[600] mb-4">
                        Frontend Developer | React | Next Js
                    </p>

                    <p className="max-w-xl text-black text-2xl font-normal mb-6 m-auto">
                        I design and build modern, responsive, and accessible websites using React, Tailwind CSS, and shadcn/ui components.
                    </p>

                    <div className="flex gap-4 mb-6 justify-center">
                        <Button className="text-2xl p-8">Download Resume</Button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
