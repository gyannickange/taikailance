import React, { useEffect } from 'react';
import JobCard from './card';
import { ErrorField } from '../';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store';
import { fetchJobs } from '../../components/jobs/indexSlice';

const JobsList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch])

  const { loading, error, jobs } = useAppSelector(
    (state: RootState) => {
      return {
        loading: state.jobs.loading,
        error: state.jobs.error,
        jobs: state.jobs.data
      }
    }
  )

  let renderedComments;
  
  
  if (jobs) {
    renderedComments = (
      <>
        {jobs.map(job =>
          (
            <JobCard
              key={job.id}
              name={job.name}
              company_name={job.company_name}
              location={job.location}
              salary={job.salary}
              type={job.type}
              description={job.description}
              skills={job.skills}
            />
          )
        )}
      </>
    )
  } else if (loading) {
    renderedComments = (
      <div>
        <p>Loading jobs...</p>
      </div>
    )
  } else if (error) {
    renderedComments = (
      <div style={{textAlign: 'center', paddingTop: '3rem'}}>
        <ErrorField error={error} />
      </div>
    )
  }

  return (
    <>{renderedComments}</>
  );
};

export default JobsList;
