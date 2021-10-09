import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store';
import Jobs from '../../data/job-list.json';

interface Skill {
  name: string;
}

interface Job {
  id?: number;
  name?: string;
  job_title?: string;
  company_name?: string;
  location?: string;
  type?: string;
  salary?: string;
  description?: any;
  team_size?: string;
  company_market?: string;
  level?: string;
  skills?: Skill[];
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
    }
  }
})

export const {
  getJobsStart,
  getJobsSuccess,
  getJobsFailure
} = jobs.actions
export default jobs.reducer;

export const fetchJobs = (): AppThunk => async dispatch => {
  try {
    dispatch(getJobsStart());
    const jobs = Jobs;
    dispatch(getJobsSuccess({ jobs }));
  } catch (err) {
    dispatch(getJobsFailure('Nothing when wrong'));
  }
}

export const searchJobs = (data: any): AppThunk => async dispatch => {
  try {
    dispatch(getJobsStart());
    let jobs;
    if (!data) {
      jobs = Jobs;
      dispatch(getJobsSuccess({ jobs }));
      return;
    };
    jobs = Jobs;

    if (data.job_title) jobs = jobs.filter(job => data.job_title === job.job_title.toLowerCase());
    if (data.company_name) jobs = jobs.filter(job => data.company_name === job.company_name.toLowerCase());
    if (data.location) jobs = jobs.filter(job => data.location === job.location.toLowerCase());
    if (data.skills?.length) jobs = jobs.filter(job => job.skills.filter(skill => data.skills.includes(skill.name.toLowerCase())));
    if (data.markets?.length) jobs = jobs.filter(job => data.markets.includes(job.company_market.toLowerCase()));
    if (data.levels?.length) jobs = jobs.filter(job => data.levels.includes(job.level.toLowerCase()));
    if (data.teamSizes?.length) jobs = jobs.filter(job => data.teamSizes.includes(job.team_size.toLowerCase()));
    if (data.types?.length) jobs = jobs.filter(job => data.types.includes(job.type.toLowerCase()));
    if (data.salaries?.length) jobs = jobs.filter(job => data.salaries.includes(job.salary.toLowerCase()));
    console.log(data, 'data')
    console.log(jobs, 'jobs')
    
    dispatch(getJobsSuccess({ jobs }));
  } catch (err) {
    dispatch(getJobsFailure('Nothing when wrong'));
  }
}
