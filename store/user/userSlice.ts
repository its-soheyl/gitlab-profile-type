import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// define type for user state
export interface IUsersState {
  token: string;
  users: any;
  loading: boolean;
  error: null | undefined | string;
}

// user state
const initialState: IUsersState = {
  token: '',
  users: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    fetchUserRequest: (state) => {
      state.loading = true;
    },

    fetchUserSuccess: (state, action: PayloadAction<[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    },

    fetchUserFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchUserToken,
} = userSlice.actions;

export default userSlice.reducer;
