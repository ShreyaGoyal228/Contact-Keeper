import React from 'react';
import {AppBar,Toolbar,styled} from '@mui/material';
const Heading=styled(Toolbar)`
  color:#060606;
  font-size:27px;
  font-weight:bold;
  background:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
font-family: "Gill Sans", sans-serif;
`;
const Head=styled(AppBar)`
height:9vh;
background:#fff;
`;
const Header =()=>{
    return(<>
      <Head style={{position:'static'}}>
        <Heading>
            Contact Manager
        </Heading>
      </Head>
      </>
    );
}
export default Header;