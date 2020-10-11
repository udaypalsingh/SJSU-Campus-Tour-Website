import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home/home'
import Tour from './Tour/tour'
class PageRouter extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path = "/" exact component = {Home}/>
                    <Route path = "/tour" exact component = {Tour}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default PageRouter;