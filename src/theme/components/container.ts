import { Theme } from "@mui/material";

const container: Theme = {
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: 1136,
                maxWidthXl: 1136,
                root: ({ theme }) => ({
                    margin: "0 auto",

                    [theme.breakpoints.up("lg")]: {
                        maxWidth: 1136,
                        padding: 0,
                    },
                }),
            },
        },
    },
} as Theme;

export default container.components;
