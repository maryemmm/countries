import { createSlice,PayloadAction} from '@reduxjs/toolkit'

interface DataState{
  isAuthenticated:boolean,
}

const initialState :DataState = {
    isAuthenticated:false,
}

const slice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        handleUserAuthentication(state,action:PayloadAction<{isAuthenticated:boolean}>){
            state.isAuthenticated=action?.payload?.isAuthenticated
        }
    },
    extraReducers: (builder) => {
   
  },
})

export const {handleUserAuthentication}=slice.actions
export const reducer=slice.reducer
export default slice