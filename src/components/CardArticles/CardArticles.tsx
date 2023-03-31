/* eslint-disable @next/next/no-img-element */
import { CardArticlesProps } from "@/hooks/useCardArticles";
import React from "react";

const CardArticles: React.FC<CardArticlesProps> = ({
    img,
    title,
    author,
    desc,
}) => {
    return (
        <div className="bg-white rounded-lg w-[34.3rem] overflow-hidden mb-24 ">
            <img className="w-[34.3rem] h-[25.7rem]" src={img} alt={title} />

            <div className="px-20 flex flex-col items-start gap-8 py-16">
                <span className="text-grayish-blue text-sm">{author}</span>

                <a
                    href="#"
                    className="text-dark-blue text-lg hover:text-lime-green"
                >
                    {title}
                </a>

                <p className="text-grayish-blue text-base">{desc}</p>
            </div>
        </div>
    );
};

export { CardArticles };
