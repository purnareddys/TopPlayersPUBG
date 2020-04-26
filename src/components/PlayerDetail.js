import React, { Component } from "react";
import { connect } from "react-redux";

const playerDetail = ({ player }) => {
  if (!player) {
    return (
      <div>
        <h3>Please Select a Player!</h3>
      </div>
    );
  }
  return (
    <div className="ui card">
      <div className="image">
        <img alt="someing" src={player.img}></img>
      </div>
      <div className="content">
        <a className="header">{player.title}</a>
        <div class="description bold">
          Description: {player.description}
          <div class="ui three column grid">
            <div class="row">
              <div class="column">AvgKills</div>
              <div class="column">AvgDamage</div>
              <div class="column">TimeSurvived</div>
            </div>
            <div class="row">
              <div class="column">{player.AvgKills}</div>
              <div class="column">{player.AvgDamage}</div>
              <div class="column">{player.TimeSurvived}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { player: state.selectedPlayer };
};
export default connect(mapStateToProps)(playerDetail);
