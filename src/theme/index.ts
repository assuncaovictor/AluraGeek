import { createTheme } from "@mui/material/styles";
import breakpoints from "./breakpoints";
import palette from "./palette";

import appbar from "./components/appbar";
import button from "./components/button";
import container from "./components/container";

const theme = createTheme({
    components: {
        ...appbar,
        ...button,
        ...container,
    },

    palette,
    breakpoints,
    spacing: (factor: number) => `${factor}rem`,
});

theme.typography.fontFamily = ["Raleway", "Sans-serif", "Arial"].join(",");

theme.typography.h1 = {
    fontSize: theme.spacing(1),

    [theme.breakpoints.up("lg")]: {
        fontSize: theme.spacing(3.5),
    },
};

export default theme;
