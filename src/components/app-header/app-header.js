import React from 'react';
import '../app-header/app-header.css';
import '../app-header/index.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
     font-size: 26px;
     color: ${props => props.colored ? 'red' : 'black'};
     :hover {
        color: blue;
     }
  }
  h2 {
     font-size: 1.2rem;
     color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header as='a'/*className="app-header d-flex"*/>
            <h1>Mikhail Bakhtin</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;