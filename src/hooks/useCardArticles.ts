import { useState } from "react";

export type CardArticlesProps = {
    img: string;
    author: string;
    title: string;
    desc: string;
};

const useCardArticles = () => {
    const [articles, setArticles] = useState<CardArticlesProps[]>([
        {
            img: "./images/image-currency.jpg",
            author: "By Claire Robinson",
            title: "Receive money in any currency with no fees",
            desc: "he world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
        },
        {
            img: "./images/image-restaurant.jpg",
            author: "By Wilson Hutton",
            title: "Treat yourself without worrying about money",
            desc: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
        },
        {
            img: "./images/image-plane.jpg",
            author: "By Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            desc: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
        },
        {
            img: "./images/image-confetti.jpg",
            author: "By Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            desc: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
        },
    ]);

    function getArticles(): CardArticlesProps[] {
        return articles;
    }

    function setArticle(article: CardArticlesProps) {
        setArticles([...articles, article]);
    }

    return {
        getArticles,
        setArticle,
    };
};

export { useCardArticles };
