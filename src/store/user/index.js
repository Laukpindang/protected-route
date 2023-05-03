import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../service';

const initialState = {
  user: {},
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // user list
    builder.addCase(User.sendUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(User.sendUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload?.data;
    });
    builder.addCase(User.sendUser.rejected, (state) => {
      state.loading = false;
      state.user = [];
      alert('gagal mengirim data');
    });
  },
});

export default userSlice.reducer;
