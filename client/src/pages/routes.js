import {Switch, Route, Redirect} from "react-router-dom"
import {LinksPage} from "./Links";
import {CreatePage} from "./Create";
import {DetailsPage} from "./Details";
import {AuthPage} from "./Auth";

export const useRoutes = (isAuthenticated = false) => {
    if (isAuthenticated) {
        return (
            <Switch >
                <Route exact path="/links" component={LinksPage}/>
                <Route exact path="/create" component={CreatePage}/>
                <Route path="/detail/:id" component={DetailsPage}/>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route exact path="/" component={AuthPage}/>
            <Redirect to="/" />
        </Switch>
    )
}
