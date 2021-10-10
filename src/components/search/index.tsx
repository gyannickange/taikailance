import React, { useState, useEffect } from 'react';
import { Button, Modal, Select2, Checkbox } from '../';
import icons from '../../utils/icons';
import * as Style from './styles';
import { searchJobs } from '../../components/jobs/indexSlice';
import {
  saveValues,
  SearchObj,
  Skills,
  TeamSizes,
  Levels,
  Salaries,
  Types,
  Markets,
  Option
} from '../../components/search/indexSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { Helpers } from '../../styles';
import * as OptionValues from '../../data/search-data';

function Search() {
  const dispatch = useAppDispatch();
  const {
    typeOptions,
    salaryOptions,
    teamSizeOptions,
    levelOptions,
    jobTitleOptions,
    companyOptions,
    locationOptions,
    skillsOptions,
    marketsOptions
  } = OptionValues;
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

  const { searchDataStore, jobs } = useAppSelector(
    (state: RootState) => {
      return {
        searchDataStore: state.search.search,
        jobs: state.jobs.data
      }
    }
  )

  let searchData = {
    job_title: jobTitle,
    company_name: companyName,
    location: location,
    skills: skills,
    levels: levels,
    team_sizes: teamSizes,
    types: types,
    salaries: salaries,
    markets: markets,
  }

  useEffect(() => {
    updateSearch(searchDataStore);
  }, [searchDataStore])

  const updateSearch = (searchData: SearchObj) => {
    setTobTitle(searchData.job_title || '');
    setCompanyName(searchData.company_name || '');
    setLocation(searchData.location || '');
    setSkills(searchData.skills || []);
    setMarkets(searchData.markets || []);
    setLevels(searchData.levels || []);
    setTeamSizes(searchData.team_sizes || []);
    setTypes(searchData.types || []);
    setSalaries(searchData.salaries || []);
  }

  const handleInputChange = (data: any, context: string) => {
    if (!data) {
      data = {} ;
      data.value = '';
    }

    switch (context) {
      case 'job_title':
        searchData.job_title = data.value;
        setTobTitle(data.value);
        break;
      case 'company_name':
        searchData.company_name = data.value;
        setCompanyName(data.value);
        break;
      case 'location':
        searchData.location = data.value;
        setLocation(data.value);
        break;
      case 'markets':
        data = data.map((market: Option) => market.value);
        searchData.markets = data;
        setMarkets(data);
        break;
      case 'skills':
        data = data.map((skill: Option) => skill.value);
        searchData.skills = data;
        setSkills(skills);
        break;
      case 'level':
        let tempLevels: Levels[] = [];
        if (levels.includes(data.target.value)) {
          tempLevels = levels.filter(level => level !== data.target.value);
        } else {
          tempLevels = levels.concat(data.target.value)
        }
        searchData.levels = tempLevels;
        setLevels(tempLevels);
        break;
      case 'team_size':
        let teamSizesData: TeamSizes[] = [];
        if (teamSizes.includes(data.target.value)) {
          teamSizesData = teamSizes.filter(teamSize => teamSize !== data.target.value);
        } else {
          teamSizesData = teamSizes.concat(data.target.value)
        }
        searchData.team_sizes = teamSizesData;
        setTeamSizes(teamSizesData);
        break;
      case 'type':
        let typesData: Types[] = [];
        if (types.includes(data.target.value)) {
          typesData = types.filter(type => type !== data.target.value);
        } else {
          typesData = types.concat(data.target.value)
        }
        searchData.types = typesData;
        setTypes(typesData);
        break;
      case 'salary':
        let salariesData: Types[] = [];
        if (salaries.includes(data.target.value)) {
          salariesData = salaries.filter(salary => salary !== data.target.value);
        } else {
          salariesData = salaries.concat(data.target.value)
        }
        searchData.salaries = salariesData;
        setSalaries(salariesData);
        break;
    }

    dispatch(searchJobs(searchData));
    dispatch(saveValues(searchData));
  };

  const getCurrentSelect2value = (data: any, values: any) => data.filter((el: Option) => values.includes(el.value));

  const getCheckboxedInput = (data: any, value: string) => {
    let exist = data.find((el: Option) => value === el);
    if (exist) return true;
  }

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
            <Style.SearchNumber>They is <span>{jobs.length}</span> results</Style.SearchNumber>
            <Helpers.FlexWrap>
              <Helpers.FlexWrapColumn>
                <h4>Skills</h4>
                <Select2
                  options={skillsOptions}
                  multi={true}
                  placeholder="Skills"
                  defaultValue={getCurrentSelect2value(skillsOptions, skills)}
                  onChange={(e: any) => handleInputChange(e, 'skills')}
                />
              </Helpers.FlexWrapColumn>
              <Helpers.FlexWrapColumn>
                <h4>Markets</h4>
                <Select2
                  options={marketsOptions}
                  multi={true}
                  placeholder="Markets"
                  defaultValue={getCurrentSelect2value(marketsOptions, markets)}
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
                    checked={getCheckboxedInput(salaries, salary.value)}
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
                    checked={getCheckboxedInput(types, type.value)}
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
                    checked={getCheckboxedInput(teamSizes, teamSize.value)}
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
                    checked={getCheckboxedInput(levels, level.value)}
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
