import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css'; 

class Header extends React.Component {
    
    showHeaders = (values) => {

        const headers = values.map((headerValue)=> {
             return <li key={headerValue} className="li_link"><Link to={headerValue}  style={{ textDecoration: 'none', color:'white' }}>{headerValue}</Link></li>
        })
        return headers;
    }
    render(){

        return(
            
            <div className="topNav">
                
                <ul className="ul_header">

                    {this.showHeaders(this.props.headerValues)}
                    
                </ul>
            </div>
        );
    }
}

export default Header;