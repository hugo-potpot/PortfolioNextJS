import React from 'react';
import WorkArticle from "@/app/work/workArticle";
import ProjectArticle from "@/app/projects/projectArticle";
import {Project} from "@/app/projects/page";

const WorkPage = () => {
    const experiences: Project[] = [
        {
            title: 'Alternance Développeur Backend Laravel',
            image: '/image/works/akawam.jpeg',
            description: 'Ajout de features et correction de bugs sur le site Le Kiosque à Pizzas',
            link: 'https://akawam.com/',
        },
        {
            title: 'Stage Développeur Backend Laravel',
            image: '/image/works/akawam.jpeg',
            description: 'Ajout de features et correction de bugs sur le site Le Kiosque à Pizzas',
            link: 'https://akawam.com/',
        },
        {
            title: 'But Informatique - Université de Lens',
            image: '/image/works/iut.png',
            description: "But informatique à l'Université de Lens (IUT)",
            link: 'http://www.iut-lens.univ-artois.fr/',
        },
    ];

    return (
        <div className="md:h-dvh flex items-center justify-center">
            <div className="max-w-6xl mx-auto py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Expériences</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experiences.map((experiences, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md">
                            <ProjectArticle project={experiences}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkPage;
