import { useCardArticles } from "@/hooks/useCardArticles";
import React from "react";
import { CardArticles } from "../CardArticles/CardArticles";

function Articles() {
    const articles = useCardArticles();

    return (
        <div className="w-full bg-very-light-gray flex items-center justify-center px-16 py-60 md:py-30">
            <div className="w-full max-w-screen-default flex flex-col items-center justify-center gap-32">
                <h2 className="text-dark-blue text-[3.2rem] md:text-[4.5rem] text-center md:text-left leading-tight">
                    Latest Articles
                </h2>

                <div className="w-full flex items-start justify-center md:justify-between flex-wrap">
                    {articles.getArticles().map((item, index) => (
                        <CardArticles 
                            key={index}
                            img={item.img}
                            title={item.title}
                            author={item.author}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export { Articles };
