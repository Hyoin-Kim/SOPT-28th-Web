import React from 'react';
import Styled from 'styled-components';

const SearchBarWrap = Styled.div` 
  input {
    width: 300px;
    align-items: center;
    background-color:#d6b534;
    border: 2px solid brown;
    color: white;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 30px;
  }
  input::placeholder {
    color: white;
  }
  input:focus {
    outline: none;
  }
`;

const SearchBar = ({getUser}) => {
    const  [userName,setUserName] = React.useState("");


    const handleChange = (event) => {
        setUserName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        getUser(userName);
        setUserName("");
    };

    return(
    <SearchBarWrap>
    <form onSubmit={handleSubmit}>
        <input type = "text" placeholder="GitHub ID를 입력하세요. " value={userName} onChange={handleChange}/>
    </form>
    </SearchBarWrap>
    );
};

export default SearchBar;