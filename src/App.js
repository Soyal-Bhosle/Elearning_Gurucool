import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import Home from './Pages/HomePage/HomePage';

import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Courses from './Pages/Courses/Courses';
import Python from './Pages/Courses/Python/python';
import Java from './Pages/Courses/Java/java';
import DSA from './Pages/Courses/DSA/dsa';
import CPP from './Pages/Courses/C++/CPP';
import CLang from './Pages/Courses/CLang/CLang';
import WebDev from './Pages/Courses/Web_Development/webdev';  
import DataScience from './Pages/Courses/Data_Science/datascience';
import AndroidDev from './Pages/Courses/Android_Development/androiddev';
import PHP from './Pages/Courses/PHP/php';
import JavaScript from './Pages/Courses/Java_Script/javascript';
import JavascriptPopup from './Pages/PopUps/JavascriptPop';
import PythonPopup from './Pages/PopUps/PythonPop';
import AndroiddevPopup from './Pages/PopUps/AndroiddevPop';
import DatasciencePopup from './Pages/PopUps/DatasciencePop';
import WebdevPopup from './Pages/PopUps/WebdevPop';
import CLangPopup from './Pages/PopUps/CLangPop';
import CppPopup from './Pages/PopUps/CppPop';
import DsaPopup from './Pages/PopUps/DsaPop';
import JavaPopup from './Pages/PopUps/JavaPop';
import AndroiddevQuiz from './Pages/Quiz/AndroiddevQuiz';
import Congratulation from './Pages/Congratulation/Congratulation';
import JavaQuiz from './Pages/Quiz/JavaQuiz';
import PythonQuiz from './Pages/Quiz/PythonQuiz';
import CppQuiz from './Pages/Quiz/CppQuiz';
import DsaQuiz from './Pages/Quiz/DsaQuiz';
import WebdevQuiz from './Pages/Quiz/WebdevQuiz';
import DatascienceQuiz from './Pages/Quiz/DatascienceQuiz';
import PhpQuiz from './Pages/Quiz/PhpQuiz';
import JavascriptQuiz from './Pages/Quiz/JavascriptQuiz';
import CLangQuiz from './Pages/Quiz/CLangQuiz';
import HomePage2 from './Pages/HomePage/HomePage2';
import AboutUsPage from './Pages/AboutUs/AboutUs';
import AboutUsPage2 from './Pages/AboutUs/AboutUs2';
// import UserSettings from './Pages/Usersettings';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <Route exact path="/homepage" component={HomePage2} />
          <Route>
            <AppBar position="static" style={{ backgroundColor: '#800000' }}>
              <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Gurucool
                </Typography>
                <Button color="inherit" href="/">
                  Home
                </Button>
                <Button color="inherit" href="/aboutus">
                  About Us
                </Button>
                <Button color="inherit" href="/register">
                  Register
                </Button>
                
              </Toolbar>
            </AppBar>
          </Route>
        </Switch> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/about" component={AboutUsPage2} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/usersettings" component={UserSettings} /> */}

          <Route exact path="/Homepage" component={HomePage2} />
          <Route exact path="/Homepage/courses" component={Courses} />
          <Route exact path="/Homepage/courses/python" component={Python} />
          <Route exact path="/Homepage/courses/java" component={Java} />
          <Route exact path="/Homepage/courses/dsa" component={DSA} />
          <Route exact path="/Homepage/courses/CPP" component={CPP} />
          <Route exact path="/Homepage/courses/CLang" component={CLang} /> 
          <Route exact path="/Homepage/courses/webdev" component={WebDev} />
          <Route exact path="/Homepage/courses/datascience" component={DataScience} /> 
          <Route exact path="/Homepage/courses/androiddev" component={AndroidDev} />
          <Route exact path="/Homepage/courses/php" component={PHP} />
          <Route exact path="/Homepage/courses/javascript" component={JavaScript} />
          <Route exact path="/Homepage/courses/python/pop" component={PythonPopup} />
          <Route exact path="/Homepage/courses/java/pop" component={JavaPopup} />
          <Route exact path="/Homepage/courses/dsa/pop" component={DsaPopup} />
          <Route exact path="/Homepage/courses/CPP/pop" component={CppPopup} />
          <Route exact path="/Homepage/courses/CLang/pop" component={CLangPopup} /> 
          <Route exact path="/Homepage/courses/webdev/pop" component={WebdevPopup} />
          <Route exact path="/Homepage/courses/datascience/pop" component={DatasciencePopup} /> 
          <Route exact path="/Homepage/courses/androiddev/pop" component={AndroiddevPopup} />
          <Route exact path="/Homepage/courses/php/pop" component={PythonPopup} />
          <Route exact path="/Homepage/courses/javascript/pop" component={JavascriptPopup} />
          <Route exact path="/Homepage/courses/androiddev/pop/androiddevquiz" component={AndroiddevQuiz} />
          <Route exact path="/Homepage/courses/androiddev/pop/androiddevquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/java/pop/javaquiz" component={JavaQuiz} />
          <Route exact path="/Homepage/courses/androiddev/pop/javaquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/java/pop/pythonquiz" component={PythonQuiz} />
          <Route exact path="/Homepage/courses/java/pop/pythonquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/CPP/pop/Cppquiz" component={CppQuiz} />
          <Route exact path="/Homepage/courses/CPP/pop/Cppquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/dsa/pop/dsaquiz" component={DsaQuiz} />
          <Route exact path="/Homepage/courses/dsa/pop/dsaquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/webdev/pop/webdevquiz" component={WebdevQuiz} />
          <Route exact path="/Homepage/courses/webdev/pop/webdevquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/datascience/pop/datasciencequiz" component={DatascienceQuiz} />
          <Route exact path="/Homepage/courses/datascience/pop/datasciencequiz/Congratulation" component={Congratulation} />  
          <Route exact path="/Homepage/courses/php/pop/phpquiz" component={PhpQuiz} />
          <Route exact path="/Homepage/courses/php/pop/phpquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/javascript/pop/javascriptquiz" component={JavascriptQuiz} />
          <Route exact path="/Homepage/courses/javascript/pop/javascriptquiz/Congratulation" component={Congratulation} />
          <Route exact path="/Homepage/courses/CLang/pop/CLangquiz" component={CLangQuiz} /> 
          <Route exact path="/Homepage/courses/CLang/pop/CLangquiz/Congratulation" component={Congratulation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
