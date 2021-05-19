import React,{useState,useEffect} from 'react';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import {getUserData} from './lib/api';
import Styled from 'styled-components';
import { getByTitle } from '@testing-library/dom';

const MainWrap = Styled.div` 
  background-color :#ffd400;
  display : flex;
  flex-direction:colum;
  align-items:center;
  justify-content:center;
  height:100vh;

  h1{
    color : brown;
  }

`;

function App(){

  const [userData, setUserData] = React.useState({
    status:"idle",
    data:null,
  });

  const getUser = async (id) => {
    setUserData({ ...userData,status:"pending"});
    try{
      const data =await getUserData(id);
      if(data===null)throw Error;
      setUserData({status: "resolved" , data : data});
    }catch(e){
      setUserData({status:"rejected",data:null});
    }
    
      
  };


  return(
    <MainWrap>
      <container>
        
      <h1>GitHub Profile Finder</h1>

    
      <SearchBar getUser={getUser}/>
      <Result userData={userData}/>

      </container>

    </MainWrap>

  );
}

export default App; //다른 컴포넌트에서 사용하기 위해서는 exprot 해야한다.