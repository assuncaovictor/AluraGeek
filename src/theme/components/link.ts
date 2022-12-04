import { Theme } from "@mui/material";

const link: Theme = {
    components: {
        MuiLink: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    textDecoration: "none",
                }),
            },
        },
    },
} as Theme;

export default link.components;
