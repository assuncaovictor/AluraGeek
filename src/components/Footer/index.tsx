import React from "react";
import { Box, Component, Nav, Developer } from "./style";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Logo from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import logo from "../../assets/img/logo.png";
import Form from "./Form";

import { Link } from "react-router-dom";

const Footer = () => {
    const nav = [
        { text: "Quem somos nós" },
        { text: "Política de privacidade" },
        { text: "Programa fidelidade" },
        { text: "Nossas lojas" },
        { text: "Quero ser franqueado" },
        { text: "Anuncie aqui" },
    ];

    return (
        <Box>
            <Container>
                <Component justifyContent="space-between" gap={{ xs: 0.5, sm: 1, lg: 2 }}>
                    <Logo component="img" src={logo} />
                    <Nav disablePadding>
                        {nav.map(({ text }) => (
                            <ListItem disablePadding key={text}>
                                <ListItemButton component={Link} to="/">
                                    {text}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Nav>

                    <Form />
                </Component>
            </Container>

            <Developer>
                <Typography textAlign="center">Desenvolvido por Victor Assunção</Typography>
                <Typography textAlign="center"> 2022</Typography>
            </Developer>
        </Box>
    );
};

export default Footer;
