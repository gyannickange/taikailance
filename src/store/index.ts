import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import jobsReducer from '../components/jobs/indexSlice';
import searchReducer from '../components/search/indexSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    search: searchReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
