import {createAsyncThunk, createSlice,PayloadAction} from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axiosInstance from '../../Utils/axios';

interface DataState{
  data:[],
  loading:boolean,
  error:string | null
}

const initialState :DataState = {
    data:[],
    loading: false,
    error: null,
}

type exampleFetchDataAsyncQueries={
  fields:string,
}

export const exampleFetchDataAsync = createAsyncThunk(
  "example/getAllCountries",
  async (queries, thunkAPI) => {
  let data;
  try {
    const response = await axiosInstance.get(`/all/`)
    data = await response.data;
    if (response.status === 200) {
       return data
    }
    throw new Error(response.statusText);
  } catch (err:any) {
    toast.error(`${err?.message ? err?.message : err}`)
    return Promise.reject(err.message ? err.message : err);
  }
}
); 

export const exampleFetchDataWithParamsAsync = createAsyncThunk(
    "example/getAllCountriesWithParams",
    async (queries:exampleFetchDataAsyncQueries, thunkAPI) => {
    let data;
    try {
      const response = await axiosInstance.get(`/all/`,{params:{fields:queries?.fields}})
      data = await response.data.slice(0,8);
      if (response.status === 200) {
         return data
      }
      throw new Error(response.statusText);
    } catch (err:any) {
      toast.error(`${err?.message ? err?.message : err}`)
      return Promise.reject(err.message ? err.message : err);
    }
  }
); 


const slice=createSlice({
    name:'example',
    initialState:initialState,
    reducers:{
        handleReducerExample(state,action:PayloadAction<{exampleId:number,type:'add' | 'remove'}>){
             const {exampleId,type}= action.payload
             console.log(state.data)
        }
    },
    extraReducers: (builder) => {
      builder
          .addCase(exampleFetchDataWithParamsAsync.pending, (state) => {
              state.loading = true;
              state.error = null;
          })
          .addCase(exampleFetchDataWithParamsAsync.fulfilled, (state, action) => {
              state.loading = false;
              state.data = action.payload;
          })
          .addCase(exampleFetchDataWithParamsAsync.rejected, (state, action) => {
              state.loading = false;
              state.error = (action.error.message as string) || 'Failed to fetch data';
          });
  },
})

export const {handleReducerExample}= slice.actions
export const reducer=slice.reducer
export default slice