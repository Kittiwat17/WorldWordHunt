import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginPage from "../Pages/LoginPage";
import StoryPage from "../Pages/StoryPage";
import GamePlayPage from "../Pages/GamePlayPage";
import MyHome from "../Pages/Home";
import QuestionPage from '../Pages/QuestionPage';
import CorrectQuestionPage from '../Pages/CorrectQusetionPage';
import InCorrectQuestionPage from '../Pages/InCorrectQuestionPage';

export default class PagesRouter extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="questionPage" component={QuestionPage} title="Question" hideNavBar={true} initial={true}/>
          <Scene key="correctquestionPage" component={CorrectQuestionPage} title="CorrectQuestion" hideNavBar={true} />
          <Scene key="incorrectquestionPage" component={InCorrectQuestionPage} title="InCorrectQuestion" hideNavBar={true} />
          <Scene key="loginPage" component={LoginPage} title="Login" hideNavBar={true} />
          <Scene key="storyPage" component={StoryPage} title="Story" hideNavBar={true} />
          <Scene key="gamePlayPage" component={GamePlayPage} title="MainGame" hideNavBar={true}  />
        </Scene>
      </Router>
    )
  }
}
