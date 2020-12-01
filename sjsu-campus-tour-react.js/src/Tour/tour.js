import React, {Component} from "react";
import NavBar from '../NavBar/navbar';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import "./tour.css";
import "./components/uparrow.css";
import "./components/downarrow.css";
import "./components/rightarrow.css";
import "./components/leftarrow.css";

class Tour extends Component{
    constructor(props){
        super(props)
        this.state = {
            buildings:[],
            currId: "5fc57c7b9d5374db554959c5",
            currBuilding:{}
        }
    };



    componentDidMount(){
        this.getBuildings();
        this.getBuildingsById(this.state.currId);
    }
    
    
    getBuildingsById = async (id) => {
        
        await fetch(`http://localhost:4040/api/building/${id}`)
          .then(res => res.json())
          .then(res => {
            this.setState({currId: id});
            this.setState({ currBuilding: res.data });
          })
          .catch(err => console.error(err));
          console.log(this.state.currBuilding, "This is the current building");
      };

    getBuildings = async _ => {
        await fetch(`http://localhost:4040/api/getBuildings`)
          .then(res => res.json())
          .then(res => {
            this.setState({ buildings: res.data });
          })
          .catch(err => console.error(err));
        //   console.log(this.state.buildings);
      };


      nextContent(_id){
        this.getBuildingsById(_id)
      }

      UpArrow = _=>{
        return(
            <a onClick={() => this.nextContent(this.state.currBuilding.up)}>
            <div class="up-arrow">
                <div class="up-arrow-top"></div>
                <div class="up-arrow-bottom"></div>
            </div>
            </a>
        );
      }

      DownArrow = _=>{
        return(
            <a onClick={() => this.nextContent(this.state.currBuilding.down)}>
            <div class="down-arrow">
                <div class="down-arrow-top"></div>
                <div class="down-arrow-bottom"></div>
            </div>
            </a>
        );
      }
      
      LeftArrow = _=>{
        return(
            <a onClick={() => this.nextContent(this.state.currBuilding.left)}>
                <div class="left-arrow">
                <div class="left-arrow-top" ></div>
                <div class="left-arrow-bottom"></div>
                </div>
            </a>
            
        );
      }

      RightArrow = _=>{
        return(
            <a onClick={() => this.nextContent(this.state.currBuilding.right)}>
            <div class="right-arrow">
                <div class="right-arrow-top" ></div>
                <div class="right-arrow-bottom"></div>
            </div> 
            </a>
        );
      }
      renderButtons = (id)=>{
        return(
            <div>
                {id.left !== "null" ? <this.LeftArrow /> : null}
                {id.right !== "null" ? <this.RightArrow/> : null}
                {id.up !== "null" ? <this.UpArrow/> : null}
                {id.down !== "null" ? <this.DownArrow/> : null}
            </div>
        );
    }

    dropdownClicked(_id){
        this.getBuildingsById(_id);
    }

    renderDropDown = ({_id,name}) =>{
        {console.log(name)}
        return (
           <MDBDropdownItem onClick={() => this.dropdownClicked(_id)}>{name}</MDBDropdownItem>

        );
    }

      renderBuildingContent = (currBuilding) => {
        var id = {"left":currBuilding.left, "right":currBuilding.right, "up":currBuilding.up, "down": currBuilding.down}
       {console.log(id)}
        return (
            <div style={{backgroundColor:" rgb(173, 216, 230)"}}>
                    <div>
                        <img src={currBuilding.img} 
                        style={{height:"95vh", width:"70vw", padding:"10px", borderRadius:"20px"}}/>
                    </div>
                   {this.renderButtons(id)}
                    
                    
                   
                    
                    <div  style={{position:"absolute", right:'5%', maxWidth:"300px", transform:"translateY(-75vh)"}}>
                    
                        <div class="card">
                            <h2>{currBuilding.name}</h2>
                            <hr/>
                            <p>{currBuilding.info}
                            </p>
                        </div>
                    </div>

                    <div  style={{position:"absolute", right:'10%', transform:"translateY(-90vh)"}}>
                        <MDBDropdown>
                            <MDBDropdownToggle caret color="primary" style={{borderRadius:"20px"}}>
                                Jump To
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                                {this.state.buildings.map(this.renderDropDown)}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                   </div>
                </div>
        );
    }

    render(){
        console.log(this.state.currBuilding);
        return (
                <div >
                    <NavBar title='Home'/>
                    {(this.renderBuildingContent(this.state.currBuilding))}
            </div>
        );
    }

}
export default Tour;