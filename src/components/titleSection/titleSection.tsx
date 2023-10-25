import React from 'react'

interface titleSectionProps {
    title: string;
}

const TitleSection = ({ title }: titleSectionProps) => {
    return (
        <div className="max-w-7xl py-12 px-12 m-auto">
            <div className="flex justify-between w-full ">

                <div className="text-3xl lg:text-5xl font-bold opacity-80 text-violet-950">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default TitleSection;
