import React from 'react';
import { StyledCard } from './Card.styles';

/**
 * @author Marek
 * @function Card
 **/

const Card = (props) => {
<<<<<<< HEAD
  return <StyledCard {...props}>{props.children}</StyledCard>;
=======
  return <StyledCard style={props.style}>{props.children}</StyledCard>;
>>>>>>> Marek_2
};

export default Card;
