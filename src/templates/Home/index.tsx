import { Header } from "@/components/Header";
import React from "react";

import { Public_Sans } from "next/font/google";
import { Hero } from "@/components/Hero";
import { useCard } from "@/hooks/useCard";
import { Card } from "@/components/Card";

const public_sans = Public_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

function Home() {
    const card = useCard();

    return (
        <div className={public_sans.className + " h-[100vh]"}>
            <Header />
            <Hero />
            <section className="w-full bg-light-grayish-blue flex items-center justify-center md:-translate-y-100 py-60 md:py-30">
                <div className="w-full max-w-screen-default flex flex-col items-center md:items-start gap-24 px-16 xl:px-16 ">
                    <h2 className="text-dark-blue text-[3.2rem] md:text-[4.5rem] text-center md:text-left leading-tight">
                        Why choose Easybank?
                    </h2>
                    <p className="text-grayish-blue text-center md:text-left text-base md:text-lg md:max-w-[50%]">
                        We leverage Open Banking to turn your bank account into
                        your financial hub. Control your finances like never
                        before
                    </p>

                    <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-24 pt-24 md:pt-32">
                        {card.getItems().map((item, index) => (
                            <Card
                                key={index}
                                image={item.image}
                                title={item.title}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export { Home };
