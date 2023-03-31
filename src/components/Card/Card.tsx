/* eslint-disable @next/next/no-img-element */
import { type } from "os";
import React from "react";

export type CardProps = {
    image: string;
    title: string;
    desc: string;
};

const Card: React.FC<CardProps> = ({ image, title, desc }) => {
    return (
        <div className="flex flex-col items-center md:items-start gap-24">
            <img
                className="w-32 h-32 md:w-60 md:h-60"
                src={image}
                alt={title}
            />
            <h3 className="text-dark-blue text-[2.8rem] md:text-[3rem]">
                {title}
            </h3>
            <p className="text-grayish-blue text-center md:text-left text-base md:text-lg ">
                {desc}
            </p>
        </div>
    );
};

export { Card };
