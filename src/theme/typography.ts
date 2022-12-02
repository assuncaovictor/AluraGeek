import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Theme } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";

const getTypography = (theme: Theme) => {
    const typography: TypographyOptions = {
        fontFamily: ["Raleway", "Sans-serif", "Arial"].join(","),

        h1: {
            fontSize: theme.spacing(1),

            [theme.breakpoints.up("lg")]: {
                fontSize: theme.spacing(3.5),
            },
        },

        allVariants: {
            textAlign: "left",
        },
    };

    return typography as Typography;
};

export default getTypography;
