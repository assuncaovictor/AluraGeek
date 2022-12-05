import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";

const Box = styled(MuiBox)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const Developer = styled(MuiBox)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    padding: `${theme.spacing(2)} 0`,
}));

const Component = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    padding: `${theme.spacing(1)} 0`,
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
        padding: `${theme.spacing(2)} 0`,
    },

    [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
        padding: `${theme.spacing(4)} 0`,
        flexDirection: "row",
    },
}));

const Nav = styled(List)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("sm")]: {
        gap: theme.spacing(0.5),
    },

    [theme.breakpoints.up("md")]: {
        alignItems: "flex-start",
    },
}));

export { Box, Nav, Developer, Component };
