import React from 'react';
import '../assets/table.css';
class Cart extends React.Component{
    
    handleRemoveFromCart = (e) => {
        e.preventDefault();
        var itemsInCart = this.props.items;
        var index = e.currentTarget.id;
        itemsInCart.splice(index,1);
        this.props.removeFromCart(itemsInCart);

    }
    render(){
        const itemToShow = this.props.items.map((item, index)=>{
            return (<tr key={index}>
                        <td>{item}</td>
                        <td><button type="button" id={index} name="remove" onClick={this.handleRemoveFromCart}>Remove</button></td>
                    </tr>);
        })
        return (
                <div className="product_detail">
                    <table className="userData">
                        <tbody>
                            { itemToShow }
                        </tbody>
                    </table>
                </div>
            );
    }
}
export default Cart;