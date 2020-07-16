import React, { Component } from 'react';
import LineItem from "./LineItem";
import Totals from "./Totals"

export default class ShoppingCart extends Component {
    constructor(){
        super();
        this.state ={
            applesQuantity : 0,
            applesCost : 1,
            orangesQuantity : 0,
            orangesCost : 2,
            tax : 0,
            subtotal : 0,
            total : 0,
            giftWrap: 0
        }
    }



    addApples = () => {
        // let this.state.subtotal + this.state.applesCost;totaltemp = this.state.subtotal + this.state.applesCost;
        // let appleQuTemp = this.state.applesQuantity + 1;
        console.log("******** Inside ShoppingCart.addApple ********");
        this.setState((stateAttr) => {
           return {
                applesQuantity: stateAttr.applesQuantity + 1,
                subtotal: stateAttr.subtotal + this.state.applesCost
            }
        });
        console.log("this.state.applesQuantity: ",this.state.applesQuantity);
        console.log("this.state.subtotal: ",this.state.subtotal);
        this.calculateTax();
    }

    minusApples = () => {
        console.log("Inside ShoppingCart.minusApple");
        if (this.state.applesQuantity !== 0) {
            this.setState((stateAttr) => {
                return {
                     applesQuantity: stateAttr.applesQuantity - 1,
                     subtotal: stateAttr.subtotal - this.state.applesCost
                 }
             });
        this.calculateTax();
        }
    }

    addOranges = () => {
        console.log("Inside ShoppingCart.addApple");
        this.setState((stateAttr) => {
            return {
                 orangesQuantity: stateAttr.orangesQuantity + 1,
                 subtotal: stateAttr.subtotal + this.state.orangesCost
             }
         });
 
        this.calculateTax();
    }

    minusOranges = () => {
        console.log("Inside ShoppingCart.minusApple");
        if (this.state.orangesQuantity !== 0) {
            this.setState((stateAttr) => {
                return {
                     orangesQuantity: stateAttr.orangesQuantity - 1,
                     subtotal: stateAttr.subtotal - this.state.orangesCost
                 }
            });
            this.calculateTax();
        }
    }

    addAppleGiftWrap = () =>{
        let appleGiftCheckbox = document.getElementById('giftApple');

        if (appleGiftCheckbox.checked === true)
        {
            this.setState((stateAttr) => {
                return {
                    giftWrap: stateAttr.giftWrap + 3,
                    subtotal: stateAttr.subtotal + 3
                 }
            });
        } else {
            this.setState((stateAttr) => {
                return {
                    giftWrap: stateAttr.giftWrap - 3,
                    subtotal: stateAttr.subtotal - 3
                 }
            });
        }   
        this.calculateTax(); 
    }

    addOrangeGiftWrap = () =>{
        let orangeGiftCheckbox = document.getElementById('giftOrange');

        if (orangeGiftCheckbox.checked === true)
        {
            this.setState((stateAttr) => {
                return {
                     subtotal: stateAttr.subtotal + 3,
                     giftWrap: stateAttr.giftWrap + 3,

                 }
            });
        } else {
            this.setState((stateAttr) => {
                return {
                     subtotal: stateAttr.subtotal - 3,
                     giftWrap: stateAttr.giftWrap - 3,
                 }
            });
        }   
        this.calculateTax(); 
    }




    calculateTax = () => {
        console.log("******* Inside calculate Tax *******");
        console.log("this.state.subtotal: ",this.state.subtotal);
        this.setState((stateAttr) => {
            return {
                tax: stateAttr.subtotal * 0.08,
                total: stateAttr.subtotal + (stateAttr.subtotal * 0.08)
            }
        })
    }


    render() {
        return (
            <div className="shoppingCart">
                <div className="leftHalf">
                    <LineItem name = "Apples" cost = {this.state.applesCost} quantity = {this.state.applesQuantity} pic= "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    <div className="buttonActions">
                        <button id="plusApples" onClick={this.addApples}>+</button>
                        <button id="minusApples" onClick={this.minusApples}>-</button>
                        <input type="checkbox" id="giftApple" name="giftApple" value="giftWrapApple" onChange={this.addAppleGiftWrap}/>Gift Wrap
                    </div>
                    <LineItem name = "Oranges" cost = {this.state.orangesCost} quantity = {this.state.orangesQuantity}pic= "https://images.unsplash.com/photo-1562599938-53b269c207a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80" />
                    <div className="buttonActions">
                        <button id="plusOranges" onClick={this.addOranges}>+</button>
                        <button id="minusOranges" onClick={this.minusOranges}>-</button>
                        <input type="checkbox" id="giftOrange" name="giftOrange" value="giftWrapOrange" onChange={this.addOrangeGiftWrap}/>Gift Wrap
                    </div>
                </div>
                <div className="rightHalf">
                <Totals subtotal={this.state.subtotal} tax={this.state.tax} total={this.state.total} gift={this.state.giftWrap} />
                </div>
            </div>
        )
    }
}
