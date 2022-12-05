import React from "react";

import { OnlyChildren } from "../../interfaces/children";

import Header from "../Header";
import Footer from "../Footer/";

import { Main, Box } from "./style";

const Body = ({ children }: OnlyChildren) => {
    return (
        <Box sx={{ overflow: "hidden" }}>
            <Header />
            <Main component="main">{children}</Main>
            <Footer />
        </Box>
    );
};

export default Body;
