import { createTheme } from "@mui/material/styles";
import getTypography from "./typography";
import breakpoints from "./breakpoints";
import palette from "./palette";
import { Theme } from "@mui/material";

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

theme.typography = getTypography(theme as Theme);

export default theme;
