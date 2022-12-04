import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { List } from "./style";

import { Product } from "../../../Product/interfaces";

import { ArrowRight } from "phosphor-react";

import { SxProps, Theme } from "@mui/material";

interface IProductsList {
    category: string;
    url: string;
    products: Product[];
}

const ProductsList = ({ category, url, products }: IProductsList) => {
    return (
        <Stack gap={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h3">{category}</Typography>
                <Button component={RouterLink} variant="text" to={url}>
                    Ver tudo <ArrowRight weight="bold" size={16} />
                </Button>
            </Stack>

            <List>
                {products.map(({ name, price, image, id }, index) => {
                    const visible: SxProps<Theme> = {
                        display: index < 2 ? "flex" : index >= 2 && index < 4 ? { xs: "none", sm: "flex" } : { xs: "none", lg: "flex" },
                        alignItems: "stretch",
                        width: "100%",
                    };

                    return (
                        <ListItem disablePadding key={id} sx={visible}>
                            <Card sx={{ width: "100%" }}>
                                <CardMedia component="img" image={image} alt={name} />
                                <CardContent>
                                    <Typography gutterBottom variant="h2">
                                        {name}
                                    </Typography>
                                    <Typography variant="body2">R$ {price} </Typography>
                                    <Link component={RouterLink} to={`/products/${id}`}>
                                        Ver produto
                                    </Link>
                                </CardContent>
                            </Card>
                        </ListItem>
                    );
                })}
            </List>
        </Stack>
    );
};

export default ProductsList;
