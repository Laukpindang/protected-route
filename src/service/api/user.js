import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../helper';

const sendUser = createAsyncThunk('post/user', async (payload, { rejectWithValue }) => {
  try {
    return await API.post({ url: '/url', payload });
  } catch (error) {
    return rejectWithValue(error);
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { sendUser };
