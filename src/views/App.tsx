import React from 'react';
import { 
  Header,
  JobsList,
  Footer,
  Search,
  Button
} from '../components';
import { Layout, Helpers } from '../styles';
import CurvreBG from '../components/header/curve';
import icons from '../utils/icons';
import useHideOnScrolled from '../utils/hooks/use-hide-onscroll';
import useScrollToSearch from '../utils/hooks/use-scroll-to-search';

function App() {
  const hidden = useHideOnScrolled();
  const {chevron_up} = icons;
  const { ref, scrollToTop } = useScrollToSearch();

  return (
    <>
      <Helpers.PositionRelative style={{backgroundColor: '#f4f4f4'}}>
        <Header />
        <CurvreBG />
      </Helpers.PositionRelative>
      <Layout.Container 
        style={{position: 'relative'}}
        ref={ref}
      >
        <Search />
        <JobsList />
      </Layout.Container>
      {hidden && (
        <Button
          className="button floating"
          icon={chevron_up}
          action={() => {scrollToTop(ref)}}
          type="button"
          color="dark"
        />
      )}
      <Footer />
    </>
  );
}

export default App;
