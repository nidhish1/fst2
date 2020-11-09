import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    chennelId:null,
    channelName:null
  },
  reducers: {
    setChannelInfo: (state,action) => {
     
      state.chennelId = action.payload.channelId
      state.channelName = action.payload
    }
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = state => state.app.chennelId;
export const selectChannelName = state => state.app.channelName;

export default appSlice.reducer;
