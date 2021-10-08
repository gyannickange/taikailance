import React, { createRef } from 'react';
import { 
  Header,
  JobCard,
  Footer,
  Search,
  Button
} from '../components';
import { Layout, Helpers } from '../styles';
import CurvreBG from '../components/header/curve';
import Jobs from '../data/job-list.json';
import icons from '../utils/icons';
import useHideOnScrolled from '../utils/hooks/use-hide-onscroll';

function App() {
  const searchSectionRef = createRef<HTMLDivElement>();
  const hidden = useHideOnScrolled();
  const {chevron_up} = icons;

  const scrollToTop = (ref: any) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Helpers.PositionRelative style={{backgroundColor: '#f4f4f4'}}>
        <Header />
        <CurvreBG />
      </Helpers.PositionRelative>
      <Layout.Container 
        style={{position: 'relative'}}
        ref={searchSectionRef}
      >
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
      {hidden && (
        <Button
          className="button floating"
          icon={chevron_up}
          action={() => {scrollToTop(searchSectionRef)}}
          type="button"
          color="dark"
        />
      )}
      <Footer />
    </>
  );
}

export default App;
