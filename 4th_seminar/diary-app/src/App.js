import React, {useState,useEffect} from 'react';
import Main from './pages/Main';
import Diary from './pages/Diary';
import MainHeader from './components/common/MainHeader';
import Calendar from './components/common/Calendar';
import Footer from './components/common/Footer';
import Title from './components/common/Title';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import {getUserData} from './lib/api';


const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  return { year: currYear, month: currMonth };
};

function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);
  const [userData,setUserData] = useState(null);

  useEffect(() => {
    (async() => {
      const data = await getUserData();
      data[year] && setUserData(data[year][month]);
    })();

  },[year,month]);

  return (    <>
    <BrowserRouter>
      <MainHeader />
      <Calendar currYear={year} setCurrYear={setYear} currMonth={month} setCurrMonth={setMonth}/>
      <Title />
      <Switch>
          <Route
            exact
            path="/"
            component={() => <Main year={year} month={month} />}
          />
          <Route path="/diary" component={Diary} />
          <Route path="/diary/:id" component={Diary} />
        </Switch>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
