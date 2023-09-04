import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../domain/entities/User';

export interface UserState {
  value: User;
}

const initialState: UserState = {
  value: {
    idUser: '',
    name: '',
    email: '',
    accounts: [],
    transactions: [],
    urlImage:'',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;
