import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [{
   id:"",
   email: "",
   password: "",
   rpassword: "",
   fname: "",
   lname: "",
   number: "",
   address: "",
   town: "",
   pczip: "",
   country: ""
}];

const UserSlice = createSlice({
   name: "User",
   initialState,
   reducers: {
      // return the state if single value,if dealing with array use push
      SendData: (state, action) => {
         const obj = {
            id: nanoid(),
            ...action.payload
         };
         state.push(obj);
         // return { ...state, ...action.payload };

      },
      GetData: (state, action) => {

      }
   }
});

export const { SendData, GetData } = UserSlice.actions;
export default UserSlice.reducer;