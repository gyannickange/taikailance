import React, { useState } from 'react';
import { 
  // TextField,
  Button,
  Modal,
  Select2
} from '../';
import icons from '../../utils/icons';
import * as Style from './styles';

function Search() {
  const {filter_circle} = icons;
  const [showModal, setShowModal] = useState(false);

  return (
    <Style.Wrapper>
      <Style.SearchTop>
        <Select2 
          options={[
            {label: 'Software Engineer'},
            {label: 'Mobile Developer'},
            {label: 'iOS Developer'},
            {label: 'Frontend Engineer'},
            {label: 'Backend Engineer'},
            {label: 'Full-Stack Engineer'},
          ]}
          placeholder="Job title"
        />
        <Select2 
          options={[
            {label: 'Toptal'},
            {label: 'OarRx'},
            {label: 'Akiflow'},
            {label: 'Commvault Systems'},
            {label: 'Learning Tapestry'}
          ]}
          placeholder="Company name"
        />
        <Select2 
          options={[
            {label: 'Anywhere'},
            {label: 'United State'},
            {label: 'Europe'}
          ]}
          placeholder="Location"
        />
      </Style.SearchTop>
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
  );
}

export default Search;
