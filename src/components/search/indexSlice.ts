import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Option {
  label?: string,
  value?: string,
}
export interface Skills {}
export interface TeamSizes {}
export interface Levels {}
export interface Salaries {}
export interface Types {}
export interface Markets {}

export interface SearchObj {
  job_title?: string,
  company_name?: string,
  location?: string,
  skills?: Skills[],
  team_sizes?: TeamSizes[],
  markets?: Markets[],
  levels?: Levels[],
  salaries?: Salaries[],
  types?: Types[],
}

interface SearchState {
  search: SearchObj;
}

const initialState: SearchState = {
  search: {}
}

const jobs = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveValues(state, action: PayloadAction<SearchObj>) {
      state.search = action.payload;
    }
  }
})

export const {
  saveValues
} = jobs.actions
export default jobs.reducer;


