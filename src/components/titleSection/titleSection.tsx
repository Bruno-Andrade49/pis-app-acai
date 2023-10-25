import React from 'react'

interface titleSectionProps {
    title: string;
}

const TitleSection = ({ title }: titleSectionProps) => {
    return (
        <div className="flex justify-between w-full pb-12">
            <div className="text-3xl lg:text-5xl font-bold opacity-80 text-violet-950">
                {title}
            </div>
        </div>
    )
}

export default TitleSection;
