import React from 'react';
import { StyledCard } from './Card.styles';

/**
 * @author Marek
 * @function Card
 **/

const Card = (props) => {
  return <StyledCard style={props.style}>{props.children}</StyledCard>;
};

export default Card;
