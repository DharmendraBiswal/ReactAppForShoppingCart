import React from 'react';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import '../assets/login.css';
import { connect } from 'react-redux';
import { validateLogin } from '../actions/userActions';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userData: {}
        }
    }

    handleChange=(e)=>{
        this.setState({
            userData: {
                ...this.state.userData,
                [e.target.name]: e.target.value
            }
        })
    }
  
    getProfilePage=(e)=>{        
        e.preventDefault();
         const {userData={}} = this.state;
        this.props.validateLogin(userData);

      
    }
  pageRedirect = () =>{
        if(this.props.loginData.data){
             return <Redirect to={{pathname: '/profile',state: { customerName: this.state.userData.userName }}} />
         
      }
      else if (this.props.loginData.status === 400){
          return <p>Username or password is incorrect!</p>
      }
  }


    render(){
      
        return(
           
            <div className="login_Container">
                {
                  this.props.loginData !== undefined ? this.pageRedirect():null
                }             
                
                <form className="formData_login">

                <div>
                    <h4>Login To Account</h4>
                </div>
                <div>
                    <input type="text" id="user" name="userName" placeholder="user name..." className="textField" onChange={this.handleChange} />
                </div>

                <div>
                    <input type="password" id="pwd" name="password" placeholder="password..." className="textField" autoComplete="off" onChange={this.handleChange} />
                </div>          
                        
                <div>
                    <button type="button" className="formSubmit_login" onClick={this.getProfilePage}>Sign In</button>
                </div>       
               
                <div>
                    <h5>New?<Link to="/signUp">Sign Up</Link>- it's Free</h5>
                </div>  
                       
            </form>
                
            </div>
           
        );
    }
}
const mapStateToProps = state =>({
    loginData: state.UserReducer.loginData
    
});

export default connect(mapStateToProps,{ validateLogin })(Login);
