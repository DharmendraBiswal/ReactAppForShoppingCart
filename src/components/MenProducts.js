import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMenProducts } from '../actions/menProductActions';
import '../assets/table.css';
import '../assets/myprofile.css';

class MensProducts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productInCart:{},
            show:false
        }

    }
    componentWillMount = () => {
        this.props.fetchAllMenProducts();
    }

    onAddToCartClick = (e) => {
        e.preventDefault();
        this.props.updateCart(e.currentTarget.id);
        
    }
  
    render(){
       
        const productDetails = this.props.products.map(product => {
                return (
                <tr key={product.productID}>
                    <td>{product.productBrand}</td>
                    <td>{product.productType}</td>
                    <td>{product.productCategory}</td>
                    <td>{product.productPrice} &#8360;.</td>
                    <td>{product.stockAvailable} Pieces Available</td>
                    <td>
                        <button type="button" id={product.productType} onClick={this.onAddToCartClick}>add To Cart</button>
                        <button type="button" name="showProductDetail" onClick={this.showModal}>view</button>
                    </td>
                    
                </tr>
              );
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
    products: state.MenProductReducer.products
});

export default connect(mapStateToProps, { fetchAllMenProducts })(MensProducts);