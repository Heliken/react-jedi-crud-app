import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import PeoplePage from "./pages/PeoplePage.js";
import PlanetsPage from "./pages/PlanetsPage.js";
import StarshipsPage from "./pages/StarshipsPage.js";
import 'bootstrap/dist/css/bootstrap.css';

const routes=[
    {
        path: "/people",
        component: PeoplePage,
        linkTitle: "People"
    },
    {
        path:"/planets",
        component: PlanetsPage,
        linkTitle: "Planets"
    },
    {
        path:"/starships",
        component: StarshipsPage,
        linkTitle: "Starships"
    }
]

function App() {
    return (
        <Router>
            <Navbar
                routes={routes}
            />
        
            <Switch>
                {routes.map((route, i) => (
                    <Route key={i} path={route.path}>
                        {route.component}
                    </Route>
                ))}
            </Switch>
        </Router>
    );
}

export default App;
