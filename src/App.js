import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PeoplePage from "./components/pages/PeoplePage.js";
import PlanetsPage from "./components/pages/PlanetsPage.js";
import StarshipsPage from "./components/pages/StarshipsPage.js";
import NotFound from "./components/pages/NotFound.js";
import FormPage from "./components/pages/FormPage";
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
        <>
            <Navbar
                routes={routes}
            />
            <Switch>
                
                {routes.map((route, i) => (
                    <Route exact key={i} path={route.path} component={route.component}/>
                ))}
                <Route path="/people/:id" component={FormPage} />
                <Route path="/planets/:id" component={FormPage} />
                <Route path="/starships/:id" component={FormPage} />
                <Route path="/not-found" component={NotFound}/>
                <Redirect exact from="/" to="/people" component={PeoplePage}/>
                <Redirect to="/not-found"/>
            </Switch>
        </>
    );
}

export default App;
