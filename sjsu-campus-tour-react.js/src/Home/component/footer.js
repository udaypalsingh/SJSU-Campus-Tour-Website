import React, {Component} from "react";
import "./footer.css";
import classNames from 'classnames';

class Footer extends Component{
    render(){
        const btnClass = classNames("btn", "btn_get", "btn_get_two");
        return (
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{visibility: "visible", animationDelay:"0.2s", animationName:"fadeInLeft"}}>
                            <h3 className="f-title f_600 t_color f_size_18">Authors</h3>
                            <ul className="list-unstyled f_list">
                            <li><a>Chris Douglas</a></li>
                            <li><a>Gurjot Sandhu</a></li>
                            <li><a>Inderpreet Singh</a></li>
                            <li><a>Udaypal Singh</a></li>
                            </ul>
                            {/* <form action="#" className="f_subscribe_two mailchimp" method="post" novalidate="true" _lpchecked="1">
                            <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/>
                            <button className={btnClass} type="submit">Subscribe</button>
                            <p className="mchimp-errmessage" style={{display:"none"}}></p>
                            <p className="mchimp-sucmessage" style={{display:"none"}}></p>
                            </form> */}
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-3">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility: "visible", animationDelay:"0.4s", animationName:"fadeInLeft"}}>
                            <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                            <ul className="list-unstyled f_list">
                            <li><a href="#">Android App</a></li>
                            <li><a href="#">ios App</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility: "visible", animationDelay:"0.6s", animationName:"fadeInLeft"}}>
                            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                            <ul className="list-unstyled f_list">
                            {/* <li><a href="#">FAQ</a></li>
                            <li><a href="#">Term &amp; conditions</a></li>
                            <li><a href="#">Reporting</a></li> */}
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Support Policy</a></li>
                            {/* <li><a href="#">Privacy</a></li> */}
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility: "visible", animationDelay:"0.8s", animationName:"fadeInLeft"}}>
                            <h3 className="f-title f_600 t_color f_size_18">GitHub &amp; Social</h3>
                            <div className="f_social_icon">
                            <a href="#" className="fab fa-github"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                            <a href="#" className="fab fa-unity"></a>
                            {/* <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-pinterest"></a> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;