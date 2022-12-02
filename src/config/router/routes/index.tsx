import Home from "../../../domains/Home";

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
];

export default routes;
