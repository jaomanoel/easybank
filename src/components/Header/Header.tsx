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
        <div className="w-full h-48 md:h-90 flex items-center justify-center ">
            <div className="w-full h-full max-w-screen-default flex flex-col md:flex-row justify-center items-center bg-white">
                <div
                    className={`w-full h-full flex items-center justify-between bg-white z-[999] px-16 xl:px-0 ${
                        menu && "fixed h-fit"
                    } `}
                >
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
                    <div className="md:hidden overflow-hidden h-full w-full fixed px-16 top-0 z-[100]">
                        <div className="w-full overflow-hidden h-full opacity-50 bg-grayish-blue fixed top-0 left-0 -z-10"></div>
                        <div className="w-full overflow-hidden flex items-center justify-center py-20 mt-60 px-16 bg-white rounded-lg z-50">
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
