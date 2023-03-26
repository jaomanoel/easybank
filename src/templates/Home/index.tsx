import { Header } from "@/components/Header";
import React from "react";

import { Public_Sans } from "next/font/google";

const public_sans = Public_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
});

function Home() {
    return (
        <div className={public_sans.className}>
            <Header />
        </div>
    );
}

export { Home };
