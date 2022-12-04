import { Theme } from "@mui/material";

const card: Theme = {
    components: {
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: "transparent",
                    borderRadius: 0,
                    boxShadow: "none",
                }),
            },
        },

        MuiCardContent: {
            styleOverrides: {
                root: ({ theme }) => ({
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(0.5),
                    marginTop: theme.spacing(0.5),
                    padding: 0,
                }),
            },
        },
    },
} as Theme;

export default card.components;
