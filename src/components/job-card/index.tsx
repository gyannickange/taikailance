import React from 'react';
import { Link } from "react-router-dom";
import { Button, Tag } from '../';
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
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
  
  return (
    <Style.Wrapper>
      <Style.CollapseButton onClick={() => setIsCollapsed(!isCollapsed)}>
        <div>
          <Style.JobCardCompanyName>{company_name}</Style.JobCardCompanyName>
          <Style.JobCardTitle>{name}</Style.JobCardTitle>
          <Style.JobCardSubtitle>{location} . {type} . {salary}</Style.JobCardSubtitle>
        </div>
        <ul style={{ padding: 0 }}>
          {skills!.map((skill: Skill, i: number) => <Tag key={i} value={skill.name} />)}
        </ul>
        <Button
          value="Apply"
          action={(e) => {
            e.preventDefault();
            window.location.href = "mailto:no-reply@example.com";
          }}
        />
      </Style.CollapseButton>
      <Style.CollapseContent className={`${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}>
        <Typography.Paragraph dangerouslySetInnerHTML={{ __html: description }} />
        <div style={{margin: '2rem 0 3rem'}}>
        <Link
          to='#'
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:no-reply@example.com";
          }}
        >
          <Button value="Apply" />
        </Link>
        </div>
      </Style.CollapseContent>
    </Style.Wrapper>
  );
};

export default JobCard;
