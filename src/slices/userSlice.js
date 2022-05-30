import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//make HTTP POST req to login user
export const userLogin=createAsyncThunk('loginuser',async(data,thunkApi)=>{

    let response=await axios.post('/user-api/login',data);
    // let data=response.data;
    if(response.data.message==='success'){
      //store token in local storage
      localStorage.setItem("token",response.data.payload);
      return response.data.userObj;

    }
    if(response.data.message==='Invalid user' || response.data.message==='Invalid password'){
      return thunkApi.rejectWithValue(response.data)
    }

})




let userSlice=createSlice({
  name:'user',
  initialState:{
    userObj:{},
    isError:false,
    isSuccess:false,
    isLoading:false,
    errMsg:''
  },
  reducers:{
    clearLoginStatus:(state)=>{
      state.isSuccess=false;
      state.userObj=null;
      state.isError=false;
      state.errMsg='';
      return state;
  }
  },
  extraReducers:{
    //track life cycle of primose returned by createAsyncThunk function
    [userLogin.pending]:(state,action)=>{
      state.isLoading=true;
    },
    [userLogin.fulfilled]:(state,action)=>{
      state.userObj=action.payload;
      state.isLoading=false;
      state.isError=false;
      state.isSuccess=true;
      state.errMsg=''
    },
    [userLogin.rejected]:(state,action)=>{
      state.isError=true;
      state.isLoading=false;
      state.isSuccess=false;
      state.errMsg=action.payload.message;
    }
  }
})

//export action creators
export const {clearLoginStatus}=userSlice.actions;
//export reducer
export default userSlice.reducer