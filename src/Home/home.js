import React, {Component} from "react";
import NavBar from '../NavBar/navbar';
import "./home.css";
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    };

    render(){
        return (
            <div className="bg">
                <NavBar/>
            </div>
        );
    }

}
export default Home;