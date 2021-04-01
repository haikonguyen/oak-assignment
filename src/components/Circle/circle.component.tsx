import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div<CircleProps>`
  height: ${(props) => (props.dimensions ? props.dimensions : '25px')};
  width: ${(props) => (props.dimensions ? props.dimensions : '25px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'black'};
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
`;

interface CircleProps {
  className?: string;
  dimensions?: string;
  backgroundColor?: string;
  textColor?: string;
}

export const Circle: FC<CircleProps> = (props) => {
  const { children, className, dimensions, backgroundColor, textColor } = props;
  return (
    <StyledCircle
      className={className}
      dimensions={dimensions}
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledCircle>
  );
};
