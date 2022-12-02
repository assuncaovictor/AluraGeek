import React from "react";
import { OnlyChildren } from "../../interfaces/children";
import Header from "../Header";
import { Main, Box } from "./style";

const Body = ({ children }: OnlyChildren) => {
    return (
        <Box>
            <Header />
            <Main component="main">{children}</Main>
        </Box>
    );
};

export default Body;
