import React from "react";
import { OnlyChildren } from "../../interfaces/children";
import Container from "@mui/material/Container";
import Header from "../Header";
import { Main } from "./style";

const Body = ({ children }: OnlyChildren) => {
    return (
        <>
            <Header />
            <Main component="main">
                <Container>{children}</Container>
            </Main>
        </>
    );
};

export default Body;
