import { Theme } from "@mui/material";

const typography: Theme = {
    components: {
        MuiTypography: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.secondary.main,
                }),
            },
        },
    },
} as Theme;

export default typography.components;
