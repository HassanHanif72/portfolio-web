import React from 'react'
import { Button } from "@/components/ui/button"
import p1 from '../assets/images/p1.jpg'
import p2 from '../assets/images/p2.webp'
import p3 from '../assets/images/p3.png'
import p4 from '../assets/images/p4.jpg'
import p5 from '../assets/images/p5.jpg'
import p6 from '../assets/images/p6.jpg'

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        image: p1,
        description: "My personal website built with React, Tailwind CSS, and shadcn/ui.",
        tech: ["React", "Tailwind", "Vite"],
        link: "#",
    },
    {
        id: 2,
        title: "E-Commerce Store",
        image: p2,
        description: "A fully responsive online store with product filters and cart.",
        tech: ["React", "Firebase", "Stripe"],
        link: "#",
    },
    {
        id: 3,
        title: "Blog Platform",
        image: p3,
        description: "A simple blog platform with Markdown support and admin panel.",
        tech: ["Next.js", "Tailwind", "MongoDB"],
        link: "#",
    },
    {
        id: 4,
        title: "Portfolio Website",
        image: p4,
        description: "My personal website built with React, Tailwind CSS, and shadcn/ui.",
        tech: ["React", "Tailwind", "Vite"],
        link: "#",
    },
    {
        id: 5,
        title: "E-Commerce Store",
        image: p5,
        description: "A fully responsive online store with product filters and cart.",
        tech: ["React", "Firebase", "Stripe"],
        link: "#",
    },
    {
        id: 6,
        title: "Blog Platform",
        image: p6,
        description: "A simple blog platform with Markdown support and admin panel.",
        tech: ["Next.js", "Tailwind", "MongoDB"],
        link: "#",
    },
]

const Portfolio = () => {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold">My Portfolio</h2>
                <p className="text-black text-2xl font-normal mt-4">Some of my recent projects.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-lg border bg-card shadow-sm overflow-hidden"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 space-y-3">
                            <h3 className="text-[22px] font-medium">{project.title}</h3>
                            <p className="text-[16px] text-black font-medium">{project.description}</p>
                            <div className="flex flex-wrap gap-2 text-xs text-primary">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="bg-gray-800 text-white px-4 py-2 text-[16px] rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <Button className="mt-3 w-full text-[18px] p-3">
                                <a href={project.link}>
                                    View Project
                                </a>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
