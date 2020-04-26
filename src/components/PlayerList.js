import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPlayer } from "../actions";
class PlayerList extends Component {
  renderList() {
    return this.props.players.map((player) => {
      return (
        <>
          <div className="item toColor" key={player.title}>
            <div className="right floated content">
              <button
                onClick={() => this.props.selectPlayer(player)}
                className="ui  button green"
              >
                View
              </button>
            </div>
            <div className="content">{player.title}</div>
          </div>
        </>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { players: state.players };
};

export default connect(mapStateToProps, { selectPlayer })(PlayerList);
