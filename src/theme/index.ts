import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import palette from "./palette";

import appbar from "./components/appbar";
import button from "./components/button";
import card from "./components/card";
import container from "./components/container";
import input from "./components/input";
import link from "./components/link";
import typography from "./components/typography";

const theme = createTheme({
    components: {
        ...appbar,
        ...button,
        ...card,
        ...container,
        ...input,
        ...link,
        ...typography,
    },

    palette,
    breakpoints,
    spacing: (factor: number) => `${factor}rem`,
});

theme.typography.fontFamily = ["Raleway", "Sans-serif", "Arial"].join(",");

theme.typography.h1 = {
    fontSize: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
        fontSize: theme.spacing(3.5),
    },
};

theme.typography.h2 = {
    fontSize: theme.spacing(0.875),
};

theme.typography.h3 = {
    fontSize: theme.spacing(1.25),
    fontWeight: 700,

    [theme.breakpoints.up("lg")]: {
        fontSize: theme.spacing(2),
    },
};

theme.typography.subtitle1 = {
    fontSize: theme.spacing(1.25),
};

theme.typography.body2 = {
    fontSize: theme.spacing(1),
    fontWeight: 700,
};

export default theme;
