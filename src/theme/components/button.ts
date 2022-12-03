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
                    display: "flex",
                    fontSize: theme.spacing(0.875),
                    fontWeight: 400,
                    gap: theme.spacing(0.375),
                    padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
                    textTransform: "none",

                    [theme.breakpoints.up("sm")]: {
                        gap: theme.spacing(0.75),
                    },

                    [theme.breakpoints.up("lg")]: {
                        fontSize: theme.spacing(1),
                        padding: theme.spacing(1),
                    },
                }),

                contained: ({ theme }) => ({
                    ":hover": {
                        backgroundColor: theme.palette.primary.light,
                    },
                }),

                text: ({ theme }) => ({
                    padding: `0 ${theme.spacing(0.15625)} !important`,
                    fontWeight: 700,
                }),
            },
        },
    },
} as Theme;

export default button.components;
