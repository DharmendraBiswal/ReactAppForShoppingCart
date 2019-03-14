import React from 'react';
import {Link} from "react-router-dom";
import '../assets/ProfileHeader.css';
import MenProducts from './MenProducts';
import WomenProducts from './WomenProducts';
import KidsProducts from './KidsProducts';



class ProfileHeader extends React.Component {

    constructor(props){
        super(props);
        this.state={
            showSideBar:false,
            productType:''
        }
    }

    showSideMenu=(event)=>{

        this.setState({
            showSideBar: !this.state.showSideBar
        })

    }

    handleClick = (e) =>{
        e.preventDefault();
        console.log(e.currentTarget.dataset.id);
        this.setState({
                productType: e.currentTarget.dataset.id
        });
        
    }
    renderProduct = () =>{
        switch(this.state.productType){
            case 'men': return <MenProducts />
            case 'women': return <WomenProducts />
            case 'kids': return <KidsProducts />
        }
    }
    
    render(){
        
        return(
            <div className="topNav">
                <button className="openbtn" onClick={this.showSideMenu}>&#9776;</button> 
                <ul className="ul_header_profile">                   
                    <li className="li_link_profile" data-id={"men"} onClick={this.handleClick}>Men</li>
                    <li className="li_link_profile" data-id={"women"} onClick={this.handleClick}>Women</li>
                    <li className="li_link_profile" data-id={"kids"} onClick={this.handleClick}>Kids</li>
                    <li className="li_link_profile" data-id={"kitchen"} onClick={this.handleClick}>Kitchen</li>
                </ul>
                <h5>Welcome, {localStorage.getItem('userName')}</h5>
                {
                    this.state.showSideBar===true ?
              
                <div className="sidenav">
                    <ul>                   
                    <li className="li_link_SideBar">my profile</li>
                    <li className="li_link_SideBar">my Orders</li>
                    <li className="li_link_SideBar">Settings</li>
                    <li className="li_link_SideBar">Help</li>
                    <li className="li_link_SideBar"><Link to={'./'} className="link_Dec">Log Out</Link></li>
                </ul>
                </div>
                :null
                }
                <div>
                    {this.renderProduct()}
              </div>
              
            </div>
        );
    }
}

export default ProfileHeader;