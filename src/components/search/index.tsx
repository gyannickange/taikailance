import React, { useState } from 'react';
import { 
  Button,
  Modal,
  Select2
} from '../';
import icons from '../../utils/icons';
import * as Style from './styles';
import { searchJobs } from '../../components/jobs/indexSlice';
import { useAppDispatch } from '../../store/hooks';

function Search() {
  const dispatch = useAppDispatch();
  const {filter_circle} = icons;
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setTobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');

  interface Search {
    job_title?: string,
    company_name?: string,
    location?: string
  }

  const handleInputChange = (data: any, context: string) => {
    let search: Search = {
      job_title: '',
      company_name: '',
      location: ''
    }
    if (!data) {
      data = {} ;
      data.value = '';
    }
    if (context === 'job_title') {
      setTobTitle(data.value);
      search.job_title = data.value;
      search.company_name = companyName;
      search.location = location;
    }
    if (context === 'company_name') {
      setCompanyName(data.value);
      search.job_title = jobTitle;
      search.company_name = data.value;
      search.location = location;
    }
    if (context === 'location') {
      setLocation(data.value);
      search.job_title = jobTitle;
      search.company_name = companyName;
      search.location = data.value;
    }

    dispatch(searchJobs(search));
  };

  return (
    <>
      <Style.Wrapper>
        <Style.SearchTop>
          <Select2
            options={[
              {label: 'Software Engineer', value: 'software engineer'},
              {label: 'Mobile Developer', value: 'mobile developer'},
              {label: 'iOS Developer', value: 'ios developer'},
              {label: 'Frontend Engineer', value: 'frontend engineer'},
              {label: 'Backend Engineer', value: 'backend engineer'},
              {label: 'Full-Stack Engineer', value: 'full-stack engineer'},
            ]}
            placeholder="Job title"
            onChange={(e: any) => handleInputChange(e, 'job_title')}
          />
          <Select2
            options={[
              {label: 'Toptal', value: 'toptal'},
              {label: 'OarRx', value: 'oarrx'},
              {label: 'Akiflow', value: 'akiflow'},
              {label: 'Commvault Systems', value: 'commvault systems'},
              {label: 'Learning Tapestry', value: 'learning tapestry'}
            ]}
            placeholder="Company name"
            onChange={(e: any) => handleInputChange(e, 'company_name')}
          />
          <Select2
            options={[
              {label: 'Anywhere', value: 'anywhere'},
              {label: 'United State', value: 'united state'},
              {label: 'Europe', value: 'europe'}
            ]}
            placeholder="Location"
            onChange={(e: any) => handleInputChange(e, 'location')}
          />
        </Style.SearchTop>
      </Style.Wrapper>
      <Style.Wrapper style={{position: 'sticky', zIndex: 2, top: 0}}>
        <Style.SearchBottom>
          <Button
            value="Filter"
            variant="text"
            icon={filter_circle}
            style={{width: '100%'}}
            action={() => setShowModal(true)}
          />
          <Modal
            onClose={() => setShowModal(false)}
            isShowing={showModal}
          >
            <div>
            </div>
          </Modal>
        </Style.SearchBottom>
      </Style.Wrapper>
    </>
  );
}

export default Search;
