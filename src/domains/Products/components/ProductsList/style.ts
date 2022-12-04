import MuiList from "@mui/material/List";
import { styled } from "@mui/system";

const List = styled(MuiList)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(1),
}));

export { List };
