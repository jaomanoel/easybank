import { CardProps } from "@/components/Card/Card";
import { useState } from "react";

export const useCard = () => {
    const [items, setItems] = useState<CardProps[]>([
        {
            image: "./icons/icon-online.svg",
            title: "Online Banking",
            desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        },
        {
            image: "./icons/icon-budgeting.svg",
            title: "Simple Budgeting",
            desc: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        },
        {
            image: "./icons/icon-onboarding.svg",
            title: "Fast Onboarding",
            desc: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
            image: "./icons/icon-api.svg",
            title: "Open API",
            desc: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        },
    ]);

    function getItems(): CardProps[] {
        return items;
    }

    function setItem(item: CardProps) {
        setItems([...items, item]);
    }

    return {
        getItems,
        setItem,
    };
};
