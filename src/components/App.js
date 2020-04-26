import React, { Component } from "react";
import PlayerList from "./PlayerList";
import PlayerDetail from "./PlayerDetail";
import LeaderBoard from "./LeaderBoard";
import "../styles/main.css";
const App = () => {
  return (
    <>
      <h3 className="ui top attached header ">
        <h3
          className="ui center aligned header "
          style={{ paddingBottom: "20px", paddingTop: "10px" }}
        >
          Top Players
        </h3>
      </h3>
      <div
        className="ui container inverted grid "
        style={{ paddingTop: "100px" }}
      >
        <div className="ui  inverted row">
          <div className="column eight wide ">
            <div className="ui raised olive segment ">
              <PlayerList />
            </div>
          </div>
          <div className="column eight wide ">
            <PlayerDetail />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
