import { createSlice, current } from "@reduxjs/toolkit";

const setItem = (item,totalAmount,totalQuantity) => {
    localStorage.setItem("cartItems", JSON.stringify(item));
    localStorage.setItem("totalAmount", totalAmount);
    localStorage.setItem("totalQuantity", totalQuantity);
}
const item = localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const totalAmount = localStorage.getItem("totalAmount") !== null ? JSON.parse(localStorage.getItem("totalAmount")) :0;
const totalQuantity = localStorage.getItem("totalQuantity") !== null ? JSON.parse(localStorage.getItem("totalQuantity")) : 0;
const initialState = {
    cartItems: item,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addItem(state, action) {
            // console.log(action);
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price,
                });
                state.totalQuantity++;

                // other Method
                // let clonedItem = {...newItem };bgg
                //  clonedItem.quantity =1;
                //  state.totalQuantity +=clonedItem.quantity;
                //  state.totalAmount+= clonedItem.price;
                //  state.cartItems.push(clonedItem);
            } else {
                existingItem.quantity++;
                existingItem.totalprice += newItem.price;
            }

            console.log(current(state.cartItems));

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            setItem(
                state.cartItems.map((item)=>item),
                state.totalAmount,
                state.totalQuantity
            )
            // return state;
        },
        removeItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.cartItems.pop({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price,
                });
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalprice -= newItem.price;
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            setItem(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
            // return state;
        },
        deleteItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            if (existingItem) {
                state.cartItems = state.cartItems.filter((item) => item.id !== newItem.id);
                state.totalQuantity--;
            }
            // if (!existingItem) {
            //     state.cartItems.pop({
            //         id: newItem.id,
            //         title: newItem.title,
            //         image01: newItem.image01,
            //         price: newItem.price,
            //         quantity: 1,
            //         totalprice: newItem.price,
            //     });
            //     state.totalQuantity--;
            // } else {
            //     existingItem.quantity--;
            //     existingItem.totalprice -= newItem.price;
            // }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            setItem(
                state.cartItems.map((item) => item),
                state.totalAmount,
                state.totalQuantity
            );
        },
    },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
