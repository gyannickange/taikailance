import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import Jobs from '../../data/job-list.json';

interface Skill {
  name: string;
}

interface Job {
  id: number;
  name: string,
  company_name: string;
  location: string;
  type: string;
  salary: string;
  description: any;
  skills: Skill[];
}

interface JobsLoaded {
  jobs: Job[];
}

interface JobsState {
  data: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobsState = {
  data: [],
  loading: false,
  error: null,
}

const jobs = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getJobsSuccess(state, action: PayloadAction<JobsLoaded>) {
      const { jobs } = action.payload;
      state.data = jobs;
      state.loading = false;
      state.error = null;
    },
    getJobsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    searchJobs: (state) => {

    },
  }
})

export const {
  getJobsStart,
  getJobsSuccess,
  getJobsFailure,
  searchJobs
} = jobs.actions
export default jobs.reducer;

export const fetchJobs = (): AppThunk => async dispatch => {
  try {
    dispatch(getJobsStart());
    setTimeout(() => {
      const jobs = Jobs;
      dispatch(getJobsSuccess({ jobs }));
    }, 1500);
  } catch (err) {
    dispatch(getJobsFailure('Nothing when wrong'));
  }
}
