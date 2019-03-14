import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCustomers } from '../actions/userActions';
import '../assets/table.css';

class Users extends React.Component{

    componentWillMount(){
        this.props.fetchAllCustomers();
    }
   
    render(){
        const userDetail = this.props.users.map(user => {
                return (<tr key={user.customerID}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>{user.mobileNo}</td>
                </tr>);
        });
          
        return(
            <div className="product_detail">
                <table className="userData">
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Mobile Number</th>
                            </tr>
                        { userDetail }
                        </tbody>
                    </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.UserReducer.users
});
export default connect(mapStateToProps,{ fetchAllCustomers })(Users);