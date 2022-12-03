import { Theme } from "@mui/material";

const container: Theme = {
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthLg: 1136,
                maxWidthXl: 1136,
                root: ({ theme }) => ({
                    margin: "0 auto",
                    paddingLeft: theme.spacing(1),

                    [theme.breakpoints.up("sm")]: {
                        paddingLeft: theme.spacing(2),
                    },

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
