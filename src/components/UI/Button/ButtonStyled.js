import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
box-shadow:inset 0px 1px 0px 0px #fce2c1;
	background:linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
	background-color:#ffc477;
	border-radius: ${({radius})=> `${radius}px` };
	border:1px solid #eeb44f;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 20px;
	text-decoration:none;
	text-shadow:0px 1px 0px #cc9f52;  
	
	&:hover {
		background:linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
	background-color:#fb9e25;
    }
    &:disabled {
        cursor: not-allowed;
		top:1px;
    }
	${({ secondary }) =>
    secondary &&
    css`
      background: #252525;
      & span {
        background: var(--btn-gradient);
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `}
    
`