import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import ProductsList from "../Products/components/ProductsList/index";

import { Banner } from "./style";

import canecaStormTrope from "../../assets/img/StarWars/caneca.png";
import cabecaDarthVader from "../../assets/img/StarWars/Lego.png";
import yoda from "../../assets/img/StarWars/Yoda.png";
import stormTroper from "../../assets/img/StarWars/StormTroper.png";
import babyYoda from "../../assets/img/StarWars/BabyYoda.png";
import sus from "../../assets/img/StarWars/Brinquedo.png";

import { Link } from "react-router-dom";
import { ListProducts } from "../Product/interfaces";

const Home = () => {
    const lists: ListProducts[] = [
        {
            category: "Star Wars",
            id: "dsabi23141xsqe9ugh1-",
            url: "/products/starwars",
            products: [
                { name: "Caneca Storm Troper", price: 59.99, image: canecaStormTrope, id: "csabduhvaso" },
                { name: "Darth Vader Lego", price: 64.99, image: cabecaDarthVader, id: "4312fcdasf" },
                { name: "Yoda", price: 14.99, image: yoda, id: "esadc234" },
                { name: "Storm Troper", price: 10.99, image: stormTroper, id: "312zchyiuy" },
                { name: "Baby Yoda", price: 109.49, image: babyYoda, id: "csaf35" },
                { name: "Homem suspeito", price: 49.99, image: sus, id: "hred643523ca" },
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
                {lists.map(({ category, url, products, id }) => (
                    <React.Fragment key={id}>
                        <ProductsList category={category} url={url} products={products} />
                        <ProductsList category={category} url={url} products={products} />
                        <ProductsList category={category} url={url} products={products} />
                    </React.Fragment>
                ))}
            </Container>
        </>
    );
};

export default Home;
