import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Main = styled(MuiBox)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "70vh",
}));

const Box = styled(Stack)({
    minHeight: "100vh",
    maxWidth: "100vw",
    overflowX: "hidden",
});

export { Main, Box };
