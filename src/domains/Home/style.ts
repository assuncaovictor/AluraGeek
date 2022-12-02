import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import bannerImage from "./img/banner.jpg";

const Banner = styled(Box)(({ theme }) => ({
    background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 41.15%, rgba(0, 0, 0, 0.8) 100%)",
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5),
    height: theme.spacing(12),
    justifyContent: "flex-end",
    width: "100%",

    [theme.breakpoints.up("sm")]: {
        height: theme.spacing(22),
    },

    [theme.breakpoints.up("md")]: {
        gap: theme.spacing(1),
    },
}));

export { Banner };
