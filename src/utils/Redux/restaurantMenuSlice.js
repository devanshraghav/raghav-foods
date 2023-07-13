import {createSlice} from "@reduxjs/toolkit";

const restaurantMenuSlice = createSlice({
    name: 'rMenu',
    initialState: {
        menuItems: []
    },
    reducers: {
        addMenu : (state,action) =>{
            state.menuItems.push(action.payload);
        }
    }
});

export const {addMenu} =restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;