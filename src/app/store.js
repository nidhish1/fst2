import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReduer from '../features/appSlice'



export default configureStore({
  reducer: {
    user: userReducer,
    app : appReduer,
  },
});
