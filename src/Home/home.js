import React, {Component} from "react";
import NavBar from '../NavBar/navbar';
import HomeCard from '../Home/component/homecard'
import Img from './bg/secbg.png';
import Footer from './component/footer';
import "./home.css";

import { MDBContainer } from "mdbreact";

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    };

    render(){
        return (
            <div>
                <NavBar/>
                <div className="bg"> 
                    <HomeCard/>
                </div>
                <div>
                    <Footer/>
                </div>
                
            </div>
        );
    }

}
export default Home;