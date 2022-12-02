import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import { ContainerInput, Input } from "./style";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

import { MagnifyingGlass } from "phosphor-react";

function Header() {
    return (
        <AppBar position="static" variant="elevation">
            <Container>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Stack gap={2} direction="row" alignItems="center">
                        <Link to="home">
                            <Box component="h1" mr={2}>
                                <Box component="img" src={logo} alt="logo" />
                            </Box>
                        </Link>

                        <ContainerInput component="form" onSubmit={(e) => e.preventDefault}>
                            <Input placeholder="O que deseja encontrar?" type="text" id="search" name="search" />
                            <IconButton>
                                <MagnifyingGlass size={24} />
                            </IconButton>
                        </ContainerInput>
                    </Stack>

                    <Button variant="outlined" sx={{ width: { xs: 166, lg: 182 } }} component={Link} to="/login">
                        Login
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
