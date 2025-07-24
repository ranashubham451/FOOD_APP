// Create a Store
const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./cartSlice";

const appStore=configureStore({
    reducer:{
        cart:reducer,
    }
});

export default appStore;