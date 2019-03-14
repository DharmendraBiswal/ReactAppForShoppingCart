import React from 'react';
import { Footer } from './Footer';
import NavMenu from './NavMenu';
import MensProducts from './MenProducts';
import WomenProducts from './WomenProducts';
import KidsProducts from './KidsProducts';
import Users from './Users';
import '../assets/myprofile.css';
import '../App.css';
import Cart from './Cart';
import { connect } from 'react-redux';
import { userLogOut } from '../actions/userActions';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headers:['my profile'],
            menus: ['men','women','kids','kitchen'],
            currentMenu: '',
            itemsInCart:[],
            openCart:false,
            showUsers:false
        }
    }
    handleClick = (event) =>{
        const{
            currentTarget: {
                id = ''
            } = {}
        } = event;
        this.state.menus.map((menu, i) => {
            return(this.setState({
                currentMenu: id
            }));
        })
               
    }
    handleShowUser = (e) => {
        if(e.target.id === 'userList'){
            this.setState({
                showUsers: !this.state.showUsers
            })
        }
    }
    updateCart = (productItem) => {
        this.setState({
            itemsInCart: [...this.state.itemsInCart,productItem]
        });
    }
    removeFromCart = (itemsInCart) => {
        this.setState({
            itemsInCart:itemsInCart
        })
    }
    componentShow = () =>{
          const{ currentMenu = '',showUsers=false }= this.state;      
   
       if(currentMenu === 'men'){
               return <MensProducts updateCart={this.updateCart}/>
        } if(currentMenu === 'women'){
            return <WomenProducts updateCart={this.updateCart} />
        } if (currentMenu === 'kids'){
            return <KidsProducts updateCart={this.updateCart} />
        }if (currentMenu === 'kitchen'){
            return <MensProducts />
        }
        if(currentMenu === 'openCart'){
            if(this.state.itemsInCart.length > 0){
                return <Cart items={this.state.itemsInCart}  removeFromCart={this.removeFromCart}/>
             }
            
        }
        if(currentMenu === 'userList'){
            console.log("button clicked")
            return <Users />
        }
    }
    displayCart = (e) => {
        e.preventDefault();
       this.setState({          
           currentMenu: 'openCart',
       });
    }
   handleLogout = (e) =>{
      this.props.loginData.length = 0;
      this.props.userLogOut();
      let path = `/`;
       this.props.history.push(path);
   }
    render(){
        console.log("LoginData:",this.props.loginData.data['firstName'])
        return(
            <div className="content_wrapper">
                    <NavMenu navValues ={this.state.menus} handleClick={this.handleClick}/>                    
                    <div className="nav-right">
                        <button type="button" onClick={this.handleLogout} className="logout" className="profile_button">Log out</button>
                        <button type="button" name="myCart" className="cart_button" id={this.state.itemsInCart.length} onClick={this.displayCart}>{this.state.itemsInCart.length}</button>
                        <button type="button" className="profile_button" name="userList" id="userList" onClick={this.handleClick}>Show Users</button>            
                    </div>
                    <div className="profile_Content">
                        <h5>Welcome, {this.props.loginData.data['firstName']}</h5>
                    </div>
                                            
                
            
            { this.componentShow()}
           
            <Footer />                
            </div>
        );
    }
}
const mapStateToProps = state =>({
    loginData: state.UserReducer.loginData
});
export default connect(mapStateToProps,{userLogOut })(Profile);