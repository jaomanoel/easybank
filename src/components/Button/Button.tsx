import React from "react";

type ButtonProps = {
    label: string;
    uri?: string;
    style?: string;
};

const Button: React.FC<ButtonProps> = ({ label, uri, style }) => {
    return (
        <a
            className={`bg-gradient-to-r from-lime-green to-bright-cyan text-white font-bold text-lg px-24 py-12 rounded-full hover:opacity-50 ${style}`}
            href={!!uri ? uri : "#"}
        >
            {label}
        </a>
    );
};

export { Button };
