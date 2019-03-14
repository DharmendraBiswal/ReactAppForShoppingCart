import React from 'react';
import { connect } from 'react-redux';
import { fetchAllKidsProducts } from '../actions/kidsProductsActions';
import '../assets/table.css';

class KidsProducts extends React.Component{

    componentWillMount = () => {
        this.props.fetchAllKidsProducts();
    }
  
    onAddToCartClick = (e) => {
        e.preventDefault();
        this.props.updateCart(e.currentTarget.id);
        
    }
    render(){
        const productDetails = this.props.products.map(product => {
                return (<tr key={product.productID}>
                    <td>{product.productBrand}</td>
                    <td>{product.productType}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.productPrice} &#8360;.</td>
                    <td>{product.stockAvailable} Pieces Available</td>
                    <td>
                        <button type="button" id={product.productType} onClick={this.onAddToCartClick}>add To Cart</button>
                        <button type="button" name="showProductDetail">view</button>
                    </td>
                    
                </tr>);
        });
        return(
            <div className="product_detail">
                <table className="userData">
                        <tbody>
                            { productDetails }
                        </tbody>
                    </table>
            </div>
        );
    }
}
const mapStateToProps = state =>({
    products: state.KidsProductReducer.products
});

export default connect(mapStateToProps, { fetchAllKidsProducts })(KidsProducts);