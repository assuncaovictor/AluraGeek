import Home from "../../../domains/Home";
import Login from "../../../domains/Login";
import Products from "../../../domains/Products";

interface IRoute {
    name: string;
    element: React.ReactNode;
    path: {
        route: string;
    };
}

const routes: IRoute[] = [
    {
        name: "Home",
        element: <Home />,
        path: {
            route: "/home",
        },
    },
    {
        name: "Login",
        element: <Login />,
        path: {
            route: "/login",
        },
    },
    
    {
        name: "Produtos",
        element: <Products />,
        path: {
            route: "/products",
        },
    }
];

export default routes;
