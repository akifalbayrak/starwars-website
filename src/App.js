import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import People from "./components/People";
import Planets from "./components/Planets";
import Films from "./components/Films";
import Vehicles from "./components/Vehicles";
import PlanetDetail from "./components/PlanetDetail";
import PeopleDetail from "./components/PeopleDetail";
import FilmsDetail from "./components/FilmDetail";
import VehicleDetail from "./components/VehicleDetail";
import ErrorPage from "./components/ErrorPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/planets",
                children: [
                    { path: ":id", element: <PlanetDetail /> },
                    {
                        index: true,
                        element: <Planets />,
                    },
                ],
            },
            {
                path: "/people",
                children: [
                    { path: ":id", element: <PeopleDetail /> },
                    {
                        index: true,
                        element: <People />,
                    },
                ],
            },
            {
                path: "/films",
                children: [
                    { path: ":id", element: <FilmsDetail /> },
                    {
                        index: true,
                        element: <Films />,
                    },
                ],
            },
            {
                path: "/vehicles",
                children: [
                    { path: ":id", element: <VehicleDetail /> },
                    {
                        index: true,
                        element: <Vehicles />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;
