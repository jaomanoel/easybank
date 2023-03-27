/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "../Button";

function Hero() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center md:justify-start relative overflow-hidden bg-very-light-gray">
            <picture className="w-full h-full absolute">
                <source
                    media="(min-width: 768px)"
                    srcSet="./images/bg-intro-desktop.svg"
                />
                <img
                    className="absolute z-10 w-full md:w-[105rem] h-350 md:h-650 top-0 right-0 md:translate-x-250 md:-translate-y-90"
                    src="./images/bg-intro-mobile.svg"
                    alt="bg intro"
                />
            </picture>
            <div className="w-full max-w-screen-default flex flex-col md:flex-row-reverse items-center justify-start md:justify-between z-40 px-16 lg:px-0">
                <img
                    className="max-w-none w-360 md:w-[80rem] h-430 md:h-[80rem] -mt-[12.5rem] md:-mr-[31rem]"
                    src="./images/image-mockups.png"
                    alt="Mockups of phones"
                />

                <div className="w-full max-w-[45rem] flex flex-col gap-24 items-center md:items-start">
                    <h1 className="text-dark-blue text-4xl md:text-[5.5rem] text-center md:text-left leading-tight">
                        Next generation digital banking
                    </h1>

                    <p className="text-grayish-blue text-base md:text-lg text-center md:text-left">
                        Take your financial life online. Your Easybank account
                        will be a one-stop-shop for spending, saving, budgeting,
                        investing, and much more.
                    </p>

                    <Button label="Request Invite" />
                </div>
            </div>
        </div>
    );
}

export { Hero };
