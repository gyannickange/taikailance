import React from 'react';
import * as Styles from './styles';

interface LabelProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

const Label = (props: LabelProps) => {
  const { 
    value,
    className = 'label',
    style
  } = props;
  return (
    <Styles.LabelStyle className={className} style={style}>
      {value}
    </Styles.LabelStyle>
  );
};

export default Label;
