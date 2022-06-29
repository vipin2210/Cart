import React from "react";

class CartItem extends React.Component {

    increaseQuantity = () => {
        //this.state.qty+=1;
        //    console.log('this.state',this.state);
        //setState form 1
        //     this.setState({
        //     qty:this.state.qty+1
        //   });

        //setState form 2 - if previous state required use it.
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });

    }

    decreaseQuantity = () => {
        const { qty } = this.state;
        if (qty == 0) {
            return;
        }

        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
    }

    render() {
        const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttions */}
                        <img
                            alt="increase"
                            className="actions-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="actions-icons"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />

                        <img
                            alt="delete"
                            className="actions-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"

                        />
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;