import React from "react";
import { Banner } from "./style";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ProductsList from "../Products/components/ProductsList/index";

import { Link } from "react-router-dom";
import { ListProducts } from "../Product/interfaces";

const Home = () => {
    const lists: ListProducts[] = [
        {
            category: "Star Wars",
            url: "/products/starwors",
            products: [
                { name: "A", price: 10.99 },
                { name: "B", price: 10.99 },
                { name: "C", price: 10.99 },
                { name: "D", price: 10.99 },
                { name: "E", price: 10.99 },
                { name: "F", price: 10.99 },
                { name: "G", price: 10.99 },
            ],
        },
    ];

    return (
        <>
            <Banner>
                <Container>
                    <Stack gap={{ xs: 0.5, lg: 1 }} mb={{ xs: 1, sm: 2 }} alignItems="flex-start">
                        <Typography variant="h1" color="white" fontWeight={700}>
                            Dezembro Promocional
                        </Typography>
                        <Typography variant="subtitle1" color="white" fontWeight={700}>
                            Produtos selecionados com 33% de desconto
                        </Typography>
                        <Button variant="contained" component={Link} to="/products">
                            Ver Consoles
                        </Button>
                    </Stack>
                </Container>
            </Banner>
            <Container>
                {lists.map(({ category, url, products }) => (
                    <ProductsList category={category} url={url} products={products} />
                ))}
            </Container>
        </>
    );
};

export default Home;
