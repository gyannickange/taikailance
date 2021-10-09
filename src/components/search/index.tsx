import React, { useState } from 'react';
import { 
  Button,
  Modal,
  Select2,
  Checkbox
} from '../';
import icons from '../../utils/icons';
import * as Style from './styles';
import { searchJobs } from '../../components/jobs/indexSlice';
import { useAppDispatch } from '../../store/hooks';
import { Helpers } from '../../styles';
import {
  typeOptions,
  salaryOptions,
  teamSizeOptions,
  levelOptions,
  jobTitleOptions,
  companyOptions,
  locationOptions,
  skillsOptions,
  marketsOptions
} from '../../data/search-data';

function Search() {
  const dispatch = useAppDispatch();
  const {filter_circle} = icons;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [jobTitle, setTobTitle] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [markets, setMarkets] = useState<Markets[]>([]);
  const [location, setLocation] = useState<string>('');
  const [skills, setSkills] = useState<Skills[]>([]);
  const [levels, setLevels] = useState<Levels[]>([]);
  const [teamSizes, setTeamSizes] = useState<TeamSizes[]>([]);
  const [salaries, setSalaries] = useState<Salaries[]>([]);
  const [types, setTypes] = useState<Types[]>([]);
  
  interface Skills {}
  interface TeamSizes {}
  interface Levels {}
  interface Salaries {}
  interface Types {}
  interface Markets {}
  interface Search {
    job_title?: string,
    company_name?: string,
    location?: string,
    skills?: Skills[],
    teamSizes?: TeamSizes[],
    markets?: Markets[],
    levels?: Levels[],
    salaries?: Salaries[],
    types?: Types[],
  }
  interface Option {
    label?: string,
    value?: string,
  }

  const handleInputChange = (data: any, context: string) => {
    let search: Search = {
      job_title: '',
      company_name: '',
      location: '',
      skills: [],
    }
    if (!data) {
      data = {} ;
      data.value = '';
    }
    search.job_title = jobTitle;
    search.company_name = companyName;
    search.location = location;
    search.skills = skills;
    search.levels = levels;
    search.teamSizes = teamSizes;
    search.types = types;
    search.salaries = salaries;
    search.markets = markets;

    if (context === 'job_title') {
      setTobTitle(data.value);
      search.job_title = data.value;
    }
    if (context === 'company_name') {
      setCompanyName(data.value);
      search.company_name = data.value;
    }
    if (context === 'location') {
      setLocation(data.value);
      search.location = data.value;
    }
    if (context === 'markets') {
      data = data.map((market: Option) => market.value);
      search.markets = data;
      setMarkets(data);
    }
    if (context === 'skills') {
      search.skills = data;
      data = data.map((skill: Option) => skill.value);
      setSkills(skills);
    }
    if (context === 'level') {
      if (levels.includes(data.target.value)) {
        levels.splice(levels.indexOf(data.target.value), 1);
      } else {
        levels.push(data.target.value);
      }
      search.levels = levels;
      setLevels(levels);
    }
    if (context === 'team_size') {
      if (teamSizes.includes(data.target.value)) {
        teamSizes.splice(teamSizes.indexOf(data.target.value), 1);
      } else {
        teamSizes.push(data.target.value);
      }
      search.teamSizes = teamSizes;
      setTeamSizes(teamSizes);
    }
    if (context === 'type') {
      if (types.includes(data.target.value)) {
        types.splice(types.indexOf(data.target.value), 1);
      } else {
        types.push(data.target.value);
      }
      search.types = types;
      setTypes(types);
    }
    if (context === 'salary') {
      search.salaries = data;
      data = data.map((salary: Option) => salary.value);
      setSalaries(data);
    }

    dispatch(searchJobs(search));
  };

  return (
    <>
      <Style.Wrapper>
        <Style.SearchTop>
          <Helpers.FlexWrapColumn>
            <Select2
              options={jobTitleOptions}
              placeholder="Job title"
              onChange={(e: any) => handleInputChange(e, 'job_title')}
            />
          </Helpers.FlexWrapColumn>
          <Helpers.FlexWrapColumn>
            <Select2
              options={companyOptions}
              placeholder="Company name"
              onChange={(e: any) => handleInputChange(e, 'company_name')}
            />
          </Helpers.FlexWrapColumn>
          <Helpers.FlexWrapColumn>
            <Select2
              options={locationOptions}
              placeholder="Location"
              onChange={(e: any) => handleInputChange(e, 'location')}
            />
          </Helpers.FlexWrapColumn>
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
            <Helpers.FlexWrap>
              <Helpers.FlexWrapColumn>
                <h4>Skills</h4>
                <Select2
                  options={skillsOptions}
                  multi={true}
                  placeholder="Skills"
                  onChange={(e: any) => handleInputChange(e, 'skills')}
                />
              </Helpers.FlexWrapColumn>
              <Helpers.FlexWrapColumn>
                <h4>Markets</h4>
                <Select2
                  options={marketsOptions}
                  multi={true}
                  placeholder="Markets"
                  onChange={(e: any) => handleInputChange(e, 'markets')}
                />
              </Helpers.FlexWrapColumn>
            </Helpers.FlexWrap>

            <Helpers.FlexWrap>
              <Style.FlexWrapColumn>
                <h4>Salary</h4>
                {salaryOptions.map((salary, i) => (
                  <Checkbox 
                    key={i}
                    label={salary.label}
                    value={salary.value}
                    name="salary"
                    style={{marginBottom: '0.5rem'}}
                    onChange={(e: any) => handleInputChange(e, 'salary')}
                  />
                ))}
              </Style.FlexWrapColumn>
              <Style.FlexWrapColumn>
                <h4>Type</h4>
                {typeOptions.map((type, i) => (
                  <Checkbox 
                    key={i}
                    label={type.label}
                    value={type.value}
                    name="type"
                    style={{marginBottom: '0.5rem'}}
                    onChange={(e: any) => handleInputChange(e, 'type')}
                  />
                ))}
              </Style.FlexWrapColumn>
            </Helpers.FlexWrap>

            <Helpers.FlexWrap>
              <Style.FlexWrapColumn>
                <h4>Team Size</h4>
                {teamSizeOptions.map((teamSize, i) => (
                  <Checkbox 
                    key={i}
                    label={teamSize.label}
                    value={teamSize.value}
                    name="team_size"
                    style={{marginBottom: '0.5rem'}}
                    onChange={(e: any) => handleInputChange(e, 'team_size')}
                  />
                ))}
              </Style.FlexWrapColumn>
              <Style.FlexWrapColumn>
                <h4>Level</h4>
                {levelOptions.map((level, i) => (
                  <Checkbox
                    key={i}
                    label={level.label}
                    value={level.value}
                    name="level"
                    style={{marginBottom: '0.5rem'}}
                    onChange={(e: any) => handleInputChange(e, 'level')}
                  />
                ))}
              </Style.FlexWrapColumn>
            </Helpers.FlexWrap>
          </Modal>
        </Style.SearchBottom>
      </Style.Wrapper>
    </>
  );
}

export default Search;
