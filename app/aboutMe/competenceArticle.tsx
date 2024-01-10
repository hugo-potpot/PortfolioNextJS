import React from 'react';

interface CompetenceArticleProps {
    skill: {
        name: string;
        logo: string;
    };
}

const CompetenceArticle = (props: CompetenceArticleProps) => {
    return (
        <>
            <img src={props.skill.logo} alt={props.skill.name} className="w-16 h-16 mb-3 object-contain"/>
            <span className="text-black font-semibold">
                {props.skill.name}
            </span>
        </>
    );
};

export default CompetenceArticle;
