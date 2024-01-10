import React from 'react';
import WorkArticle from "@/app/work/workArticle";

const WorkPage = () => {
    const experiences = [
        {
            title: 'Alternance Développeur Backend Laravel',
            company: 'Akawam',
            date: 'Septembre 2023 - Présent',
            description: 'Ajout de features et correction de bugs sur le site Le Kiosque à Pizzas',
        },
        {
            title: 'Stage Développeur Backend Laravel',
            company: 'Akawam',
            date: 'Avril 2023 - Juin 2023',
            description: 'Ajout de features et correction de bugs sur le site Le Kiosque à Pizzas',
        },
        {
            title: 'But Informatique',
            company: 'IUT de Lens',
            date: 'Septembre 2021 - Juin 2024',
            description: "But informatique à l'IUT de Lens",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Expériences</h1>
            <div className="grid gap-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <WorkArticle experience={experience}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkPage;
