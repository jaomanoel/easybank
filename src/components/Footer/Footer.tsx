/* eslint-disable @next/next/no-img-element */
import { SVGFacebook } from "@/styles/icons/SVGFacebook";
import { SVGInstagram } from "@/styles/icons/SVGInstagram";
import { SVGLogo } from "@/styles/icons/SVGLogo";
import { SVGPinterest } from "@/styles/icons/SVGPinterest";
import { SVGTwitter } from "@/styles/icons/SVGTwitter";
import { SVGYoutube } from "@/styles/icons/SVGYoutube";
import React from "react";
import { Button } from "../Button";

function Footer() {
    return (
        <div className="w-full flex items-center justify-center px-16 bg-dark-blue py-30 md:py-60">
            <div className="w-full max-w-screen-default flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-32">
                <div className="flex flex-col md:flex-row items-center justify-center md:items-start md:justify-between gap-32 md:gap-200">
                    <div className="flex flex-col items-center justify-center gap-32 md:gap-[5rem]">
                        <SVGLogo fill="white" />
                        <ul className="flex items-center gap-8">
                            <li>
                                <a
                                    className="[&>svg]:hover:fill-lime-green [&>svg]:fill-white"
                                    href="#"
                                >
                                    <SVGFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="[&>svg]:hover:fill-lime-green [&>svg]:fill-white"
                                    href="#"
                                >
                                    <SVGYoutube />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="[&>svg]:hover:fill-lime-green [&>svg]:fill-white"
                                    href="#"
                                >
                                    <SVGTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="[&>svg]:hover:fill-lime-green [&>svg]:fill-white"
                                    href="#"
                                >
                                    <SVGPinterest />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="[&>svg]:hover:fill-lime-green [&>svg]:fill-white"
                                    href="#"
                                >
                                    <SVGInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className="flex flex-col items-center md:items-start justify-center gap-8 h-fit md:max-h-[12.5rem] flex-wrap">
                        {[
                            ["About Us", "#"],
                            ["Contact", "#"],
                            ["Blog", "#"],
                            ["Carrers", "#"],
                            ["Support", "#"],
                            ["Privacy Policy", "#"],
                        ].map(([label, url], index) => (
                            <li key={index}>
                                <a
                                    className="text-base md:text-lg p-0 md:pr-44 text-white md:text-light-grayish-blue hover:text-lime-green"
                                    href={!url ? url : "#"}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center justify-center gap-30">
                    <Button label="Request Invite" />
                    <p className="text-sm text-grayish-blue">
                        © Easybank. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Footer };
