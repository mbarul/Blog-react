import React from 'react';
import { StyledCard } from './Card.styles';

/**
 * @author Marek
 * @function Card
 **/

const Card = (props) => {
  return (
    <StyledCard>
      <div className="card">{props.children}</div>
    </StyledCard>
  );
};

export default Card;
