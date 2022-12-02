import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

const ContainerInput = styled(Box)(({ theme }) => ({
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 99999,
    display: "flex",
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
}));

const Input = styled(InputBase)(({ theme }) => ({
    width: theme.spacing(20.5),

    "::placeholder": {
        color: "#A2A2A2",
    },
}));

export { ContainerInput, Input };
