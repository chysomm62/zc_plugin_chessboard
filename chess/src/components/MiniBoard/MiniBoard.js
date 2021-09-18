import React from "react";
import { Link } from "react-router-dom";
import "./MiniBoard.css";
import boardImg from "../../assets/mini-board.svg";
import { useHistory } from "react-router";
import axios from "axios";

// function MiniBoard({ id, playerOne, playerTwo }) {
function MiniBoard({ playerOne, playerTwo, id }) {
  const history = useHistory();
  console.log(playerOne);

  const createGame = async () => {
    const sample_data = {
      user_id: "1234567",
      game_id: id,
      user_name: "codeJonin",
      image_url: "string",
    };

    const result = await axios.post(
      "https://chess.zuri.chat/api/v1/game/create",
      sample_data
    );
    console.log(result);
    if (result.data.success) {
      const game_id = result.data.data.object_id;
      history.push(`/game_nocomments/${result.data.data.object_id}`);
    } else {
      //....
    }
  };
  return (
    <div className="mini-board">
      <div className="mini-asideBar mini-topBar">
        {playerOne ? (
          <div className="mini-playerProfile">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">Player 1: @{playerOne}</p>
          </div>
        ) : (
          <button className="join-button" onClick={createGame}>
            Join as Player 1
          </button>
        )}
      </div>

      <div className="board-image">
        {/* eslint-disable-next-line */}
        <a href="/game">
          <img src={boardImg} alt="" />{" "}
        </a>
      </div>
      <div className="mini-asideBar mini-bottomBar">
        {playerTwo && (
          <div className="mini-playerProfile">
            <div className="mini-profile-image"></div>
            <div className="mini-profile-image-bg"></div>
            <p className="mini-profile-name">Player 2: @{playerTwo}</p>
          </div>
        )}
        {playerOne && !playerTwo && (
          <Link to="/game_comments">
            <button className="join-button bottom-button">
              Join as Player 2
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MiniBoard;
