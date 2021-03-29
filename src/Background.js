import React from 'react';
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'


export default function Background() {
    let { topicId } = useParams()
    return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Under Construction Coming Soon...
          <br />
          Requested FolderID: {topicId}
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

