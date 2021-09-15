// import { createPortal } from "react-dom";
import Logo from "./profile.png";
import "./Exit.css";
import { useHistory } from "react-router-dom";
// const Forfeit = ({ isYes, onClose }) => {

const Exit = ({ isYes, handleClick }) => {
  let history = useHistory();
  if (!isYes) {
    return null;
  }
  // return createPortal(
  return (
    <div className="forfeit__container">
      <div className="forfeit__modal">
        <article className="forfeit__header">
          <div className="profile">
            <img src={Logo} alt="profile" />
          </div>
        </article>
        <section className="forfeit__content">
          <p className="forfeit__text">
            You are probably tired of waiting for player 2, are you sure you
            want to leave the game?
          </p>
        </section>
        <footer className="forfeit__footer">
          <button
            className="forfeit__button forfeit__button--yes"
            onClick={() => {
              history.push("/");
            }}
          >
            Yes
          </button>
          <button
            className=" forfeit__button forfeit__button--no"
            onClick={() => handleClick()}
          >
            No
          </button>
        </footer>
      </div>
    </div>

    // ,document.getElementById("forfeit")
  );
};

export default Exit;
