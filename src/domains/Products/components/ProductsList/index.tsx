import React from "react";
import { Link } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Carousel from "react-material-ui-carousel";

import { Product } from "../../../Product/interfaces";

import { ArrowRight } from "phosphor-react";

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
                <Button component={Link} variant="text" to={url}>
                    Ver tudo <ArrowRight weight="bold" size={16} />
                </Button>
            </Stack>

            <Carousel
                sx={{
                    "& .MuiIconButton-root": {
                        margin: 0,
                        opacity: 0.1,
                    },
                }}
            >
                {products.map(({ name, price, url }) => (
                    <Typography variant="h2">{name}</Typography>
                ))}
            </Carousel>
        </Stack>
    );
};

export default ProductsList;
