import React, {Component} from "react";
import "./homecard.css";

class HomeCard extends Component{


    render(){
        return (
            <div class="container" style={{float:"right", height:"max-content", width:"max-content", 
            transform: "translate(-30%, 5%)"}}>
                `<div class="post">
                    <div class="header_post">
                        <img src="https://i.pinimg.com/originals/99/7a/73/997a73e1a5091ad6fa152ad36045b5b6.jpg" alt=""/>
                    </div>

                    <div class="body_post">
                        <div class="post_content">

                        <h1>San José State University</h1>
                        <p>San José State University is a public university in San Jose, California. SJSU is the oldest public university 
                            on the West Coast and the founding campus of the California State University system. It is located in the heart of Silicon Valley.</p>
                        <div class="container_infos">
                            <div class="postedBy">
                                <span>Address</span>
                                1 Washington Square, San Jose, CA 95192
                            </div>

                            <div class="container_tags">
                                <span>Facts</span>
                                <div class="tags">
                                    <ul>
                                        <li>Graduation Rate: 62%</li>
                                        <li>Acceptance Rate: 55%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default HomeCard;












             