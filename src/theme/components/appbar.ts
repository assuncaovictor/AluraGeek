import { Theme } from "@mui/material";

const appbar: Theme = {
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: "#ffffff",
                    paddingBottom: theme.spacing(1),
                    paddingTop: theme.spacing(1),

                    [theme.breakpoints.up("lg")]: {
                        paddingBottom: theme.spacing(2),
                        paddingTop: theme.spacing(2),
                    },
                }),
            },
        },

        MuiToolbar: {
            styleOverrides: {
                regular: ({ theme }) => ({
                    minHeight: `${theme.spacing(2.5)} !important`,

                    [theme.breakpoints.up("lg")]: {
                        minHeight: `${theme.spacing(3.125)} !important`,
                    },
                }),
            },
        },
    },
} as Theme;

export default appbar.components;
