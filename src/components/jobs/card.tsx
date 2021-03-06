import React, { useState } from 'react';
import { Button, Tag } from '..';
import * as Style from './styles';
import { Typography } from '../../styles';

interface Skill {
  name: string;
}

interface JobCardProps {
  collapsed?: boolean;
  name?: string;
  company_name?: string;
  location?: string;
  type?: string;
  salary?: string;
  description?: any;
  skills?: Skill[];
}

const JobCard = (props: JobCardProps) => {
  const {
    collapsed = true,
    name,
    company_name,
    location,
    salary,
    type,
    description,
    skills,
  } = props;
  const [isCollapsed, setIsCollapsed] = useState(collapsed);
  
  return (
    <Style.Wrapper>
      <Style.CollapseButton onClick={() => setIsCollapsed(!isCollapsed)}>
        <div>
          <Style.JobCardCompanyName>{company_name}</Style.JobCardCompanyName>
          <Style.JobCardTitle>{name}</Style.JobCardTitle>
          <Style.JobCardSubtitle>{location} . {type} . {salary}/year</Style.JobCardSubtitle>
        </div>
        <Style.JobCardFirstSkillsList style={{ padding: 0 }}>
          {skills!.map((skill: Skill, i: number) => <Tag key={i} value={skill.name} />)}
        </Style.JobCardFirstSkillsList>
        <Button
          value="Apply"
          variant="outline"
          type="button"
          action={(e) => {
            e.preventDefault();
            window.location.href = `mailto:no-reply@example.com?subject=New applicant from Taikailance for ${name}`;
          }}
        />
      </Style.CollapseButton>
      <Style.CollapseContent className={`${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}>
        <Typography.Paragraph dangerouslySetInnerHTML={{ __html: description }} />
        <div style={{margin: '2rem 0 3rem'}}>
          <Button
            value="Apply"
            type="button"
            action={(e) => {
              e.preventDefault();
              window.location.href = `mailto:no-reply@example.com?subject=New applicant from Taikailance for ${name}`;
            }}
          />
        </div>
      </Style.CollapseContent>
    </Style.Wrapper>
  );
};

export default JobCard;
