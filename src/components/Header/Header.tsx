/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Button } from "../Button";

export const Header = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const handleMenu = () => {
        console.log(menu);
        setMenu(!menu);
    };

    return (
        <div className="w-full h-48 md:h-90 flex items-center justify-center">
            <div className="w-full h-full max-w-screen-xl flex flex-col md:flex-row justify-center items-center px-16 xl:px-0 bg-white">
                <div className="w-full h-full flex items-center justify-between">
                    <img
                        className="relative w-80 h-60 object-contain"
                        src="./icons/logo.svg"
                        alt="Logo"
                    />

                    <nav className="hidden md:block h-full">
                        <ul className="h-full flex items-center justify-center gap-24">
                            {[
                                ["Home", "#"],
                                ["About", "#"],
                                ["Contact", "#"],
                                ["Blog", "#"],
                                ["Careers", "#"],
                            ].map(([label, url], index) => (
                                <li key={index} className="h-full">
                                    <a
                                        className="text-lg text-grayish-blue hover:text-dark-blue flex items-center justify-center h-full flex-col relative hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-lime-green hover:after:to-bright-cyan hover:after:h-4 hover:after:absolute hover:after:bottom-0"
                                        href={url}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <Button label="Request Invite" />
                    </div>

                    <button className="md:hidden" onClick={handleMenu}>
                        <img
                            className="w-20 h-20"
                            src={
                                menu
                                    ? "./icons/icon-close.svg"
                                    : "./icons/icon-hamburger.svg"
                            }
                            alt="Abrir Menu"
                        />
                    </button>
                </div>

                {menu && (
                    <div className="md:hidden overflow-hidden h-full w-full bg-grayish-blue py-16 px-16 fixed top-48">
                        <div className="w-full flex items-center justify-center py-20 bg-white rounded-lg">
                            <nav className="w-full">
                                <ul className="w-full flex flex-col items-center gap-20">
                                    {[
                                        ["Home", "#"],
                                        ["About", "#"],
                                        ["Contact", "#"],
                                        ["Blog", "#"],
                                        ["Careers", "#"],
                                    ].map(([label, url], index) => (
                                        <li key={index} className="h-full">
                                            <a
                                                className="text-dark-blue text-xl font-normal hover:underline underline-offset-8"
                                                href={url}
                                            >
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
