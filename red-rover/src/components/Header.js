import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const nav = useNavigate();
  return(
    <StyledDiv>
      <Button onClick={() => {
        nav('/');
        // window.location.reload(false);
        }} variant="link" size="large" startIcon={<HomeIcon />}>Home</Button>
    </StyledDiv>
    
  )
}

export default Header;

const StyledDiv = styled.div`
text-align: center;

`;