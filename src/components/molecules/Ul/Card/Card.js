import React from 'react';
import { StyledCard } from './Card.styles';

/**
 * @author Marek
 * @function Card
 **/

const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
