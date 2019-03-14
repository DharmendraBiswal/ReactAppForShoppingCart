import React from 'react';
import {Link} from "react-router-dom";
import '../assets/ProfileHeader.css';
import '../assets/myprofile.css';

class NavMenu extends React.Component {
 
    showMenus = (values, handleClick) => {
        const headers = values.map((navValue, i)=> {
             return <li  key={i} className="li_link_profile"  data-id={navValue}><Link to={'#'} id={navValue} onClick={handleClick}  style={{ textDecoration: 'none', color:'white' }}>{navValue}</Link></li>
        })
        return headers;
    }
    render(){
        return(
            <div className="Nav">
            <ul className="ul_header_profile">

                    {this.showMenus(this.props.navValues, this.props.handleClick)}
                     {/*<button type="button" name="myCart" className="cart_button"></button>*/}
                </ul>
               </div>
        );
    }
}
export default NavMenu;
