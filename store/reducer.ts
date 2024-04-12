import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ProductModal {
  productData: any,
  isLoading: boolean,
  isError: boolean,
  isSuccess: boolean,
}

const initialState: ProductModal = {
  productData: null,
  isLoading: false,
  isError: false,
  isSuccess: false
}

interface OpenProductPayload {
  productId: string;
}

export const openProduct = createAsyncThunk('openCard', async (params: OpenProductPayload, thunkApi) => {
  try {    
    return { productId: '1' };
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
})

export const openProductSlice = createSlice({
  name: 'openProduct',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(openProduct.pending, state => {
      state.isLoading = true;
    })

    builder.addCase(openProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.productData = action.payload;
    })

    builder.addCase(openProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    })
  }
})

// Action creators are generated for each case reducer function
// export const { selectProduct } = openProductSlice.actions

export default openProductSlice.reducer