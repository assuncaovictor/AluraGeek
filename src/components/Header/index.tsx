import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import logo from "../../assets/img/logo.png";

function Header() {
    return (
        <AppBar position="static" variant="elevation">
            <Container>
                <Toolbar disableGutters>
                    <Box component="h1">
                        <Box component="img" src={logo} alt="logo"></Box>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
