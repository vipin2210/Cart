import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
        price:999,
        title:'phone',
        qty:1,
        img:''
    }
   }
   
    render() {
        const {price,title,qty}=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttions */}
                        <img alt="increase" className="actions-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png"/>
                        <img alt="decrease" className="actions-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png" />
                        <img alt="delete" className="actions-icons"  src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"/>
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
        background:'#ccc'
    }
}

export default CartItem;