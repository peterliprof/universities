import { configureStore} from'@reduxjs/toolkit';
import  universitiesReducer from '../features/store/universitySlice';

export const store= configureStore({
reducer:universitiesReducer
});

export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>;