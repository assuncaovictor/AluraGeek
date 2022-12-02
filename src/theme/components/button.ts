import { Theme } from "@mui/material";

const button: Theme = {
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },

            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: 0,
                    fontSize: theme.spacing(0.875),
                    fontWeight: 600,
                    padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,

                    [theme.breakpoints.up("lg")]: {
                        fontSize: theme.spacing(1),
                        fontWeight: 400,
                        padding: theme.spacing(1),
                    },
                }),

                contained: ({ theme }) => ({
                    ":hover": {
                        backgroundColor: theme.palette.primary.light,
                    },
                }),
            },
        },
    },
} as Theme;

export default button.components;
