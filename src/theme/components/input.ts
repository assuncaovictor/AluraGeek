import { Theme } from "@mui/material";

const inut: Theme = {
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: "white !important",
                }),
            },
        },
        MuiFilledInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: "white !important",
                }),
            },
        },
    },
} as Theme;

export default inut.components;
