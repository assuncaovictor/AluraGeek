import React from "react";
import { OnlyChildren } from "../../interfaces/children";
import Container from "@mui/material/Container";
import Header from "../Header";
import { Main, Box } from "./style";

const Body = ({ children }: OnlyChildren) => {
    return (
        <Box>
            <Header />
            <Main component="main">
                <Container>{children}</Container>
            </Main>
        </Box>
    );
};

export default Body;
