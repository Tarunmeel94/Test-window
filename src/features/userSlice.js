import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  name:"",
  email:"",
  password:"",
  endTest:false,
  time:null,
  testStart:false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   submit:(state,action)=>{
     state.name=action.payload.name;
     state.email=action.payload.email;
     state.password=action.payload.password;
     
   },
   timer:(state,action)=>{
    state.time=action.payload.time;
   },
   testOver:(state,action)=>{
     state.endTest=action.payload.endTest;
   },
   setIsTestStart:(state,action)=>{
     state.testStart=true;
   }
  },
});

export const {submit,setIsTestStart,timer,testOver} = userSlice.actions;
export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPassword = (state) => state.user.password;
export const selectEndTest = (state) => state.user.endTest;
export const selectTime = (state) => state.user.time;
export const selectTestStart = (state) => state.user.testStart;
export default userSlice.reducer;
