import React from 'react';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/userActions';
import '../assets/SignUp.css';
import { Redirect } from 'react-router-dom';

class CreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
            address:'',
            mobileNo:0,

        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        const user ={
            userName: this.state.userName,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            address:this.state.address,
            mobileNo:this.state.mobileNo
        }
        this.props.createNewUser(user);
    }

    pageRedirect = () =>{        
        return <Redirect to="/login" />
    }
    render(){
        
        return(
            <div className="signUp_Container">
                <form onSubmit={this.onFormSubmit} className="formData">                    
                    <div className='inputData'>
                        <lable>User Name:</lable>
                        <input type="text" name="userName" value={this.state.userName} onChange={this.onInputChange}/>
                    </div>
                    <div className='inputData'>
                        <lable>password</lable>
                        <input type="password" name="password" value={this.state.password} onChange={this.onInputChange}/>
                    </div>
                    <div className='inputData'>
                        <lable>First Name:</lable>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onInputChange}/>
                    </div>
                    <div className='inputData'>
                        <lable>Last Name:</lable>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onInputChange}/>
                    </div>
                    <div className='inputData'>
                        <lable>Email:</lable>
                        <input type="text" name="email" value={this.state.email} onChange={this.onInputChange}/>
                    </div>
                    <div className='inputData'>
                        <lable>Country:</lable>
                        <input type="text" name="address" value={this.state.address} onChange={this.onInputChange}/>
                    </div>
                    <div className='inputData'>
                        <lable>Mobile :</lable>
                        <input type="text" name="mobileNo"  onChange={this.onInputChange}/>
                    </div>
                    <div>
                        <button type="submit" className="formSubmit">Sign Up</button>
                    </div>
                </form>
                <div>
                    {
                        this.props.status === true ? this.pageRedirect():null
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    user: state.UserReducer.user,
    status: state.UserReducer.status
});
export default connect(mapStateToProps , { createNewUser })(CreateUser);