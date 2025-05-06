import React from 'react'
import { Button } from "@/components/ui/button"
import profile_pic from '../assets/images/profile-pic.jpg'

const About = () => {
  return (
    <section className="container mx-auto pb-32 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-32">
        <img
          src={profile_pic}
          alt="Your Name"
          className="rounded-lg object-cover shadow-md"
        />
        <div className="space-y-4">
          <h3 className="text-6xl font-bold">About Us</h3>
          <p className="text-black text-2xl font-normal">
            I specialize in frontend development, creating responsive and user-friendly interfaces. I love working with React and continuously improving my UI/UX skills. My goal is to build beautiful and accessible web applications that provide real value.
          </p>
          <Button className="text-2xl p-8">Download CV</Button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center  pt-32">
        <h3 className="text-6xl font-bold mb-10">My Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">React</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">Tailwind CSS</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">JavaScript</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">Vite</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">Git</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">Super Base</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">Firebase</div>
          <div className="border rounded-md p-4 shadow-sm text-2xl font-medium">Node.js</div>
        </div>
      </div>
    </section>
  )
}

export default About
