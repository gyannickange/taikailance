import React from 'react';
import { 
  Header,
  JobCard,
  Footer,
  Search
} from '../components';
import {
  Layout,
  Helpers
} from '../styles';
import CurvreBG from '../components/header/curve';
import Jobs from '../data/job-list.json';

function App() {
  return (
    <>
      <Helpers.PositionRelative style={{backgroundColor: '#f4f4f4'}}>
        <Header />
        <CurvreBG />
      </Helpers.PositionRelative>
      <Layout.Container style={{position: 'relative'}}>
        <Search />
        {Jobs.map((job, i) =>
          (
            <JobCard
              key={i}
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
      </Layout.Container>
      <Footer />
    </>
  );
}

export default App;
