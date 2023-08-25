import React from 'react';
import { IncreaseStyled } from './IncreasedStyles';

const Increase = ({
  children, bgcolor, disabled = false,onClick = e => e.preventDefault(),
}) => {
  return (
    <IncreaseStyled
      whileTap={{ scale: 0.7 }}
      bgcolor={bgcolor}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </IncreaseStyled>
  );
};

export default Increase;
