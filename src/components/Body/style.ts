import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const Main = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
}));

export { Main };
