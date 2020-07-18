import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import alice from "./images/sprite_running-alice-queen_small.png";
import "./App.css";
const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};

const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};
const App = () => {
  const {
    ref: foregroundOne,
    getAnimation: foreOneAnimation,
  } = useWebAnimations({
    sceneryFrames,
    sceneryTimingForeground,
  });
  const {
    ref: foregroundTwo,
    getAnimation: foreTwoAnimation,
  } = useWebAnimations({
    sceneryFrames,
    sceneryTimingForeground,
  });

  const {
    ref: backgroundOne,
    getAnimation: backOneAnimation,
  } = useWebAnimations({
    sceneryFrames,
    sceneryTimingBackground,
  });
  const {
    ref: backgroundTwo,
    getAnimation: backTwoAnimation,
  } = useWebAnimations({
    sceneryFrames,
    sceneryTimingBackground,
  });

  const { ref: aliceQueen, getAnimation: aliceAnimation } = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ],
    timing: {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    },
  });
  const speedup = () => {
    const animationOne = aliceAnimation();
    const animationForeOne = foreOneAnimation();
    const animationForeTwo = foreTwoAnimation();
    const animationBackOne = backOneAnimation();
    const animationBackTwo = backTwoAnimation();
    animationOne.updatePlaybackRate(animationOne.playbackRate * 1.1);
    animationForeOne.updatePlaybackRate(animationForeOne.playbackRate * 1.05);
    animationForeTwo.updatePlaybackRate(animationForeTwo.playbackRate * 1.05);
    animationBackOne.updatePlaybackRate(animationBackOne.playbackRate * 1.05);
    animationBackTwo.updatePlaybackRate(animationBackTwo.playbackRate * 1.05);
  };
  setInterval(function () {
    /* Set decay */
    if (foreOneAnimation() && aliceAnimation().playbackRate > 0.8) {
      aliceAnimation().playbackRate *= 0.9;
      const animationForeOne = foreOneAnimation();
      const animationForeTwo = foreTwoAnimation();
      const animationBackOne = backOneAnimation();
      const animationBackTwo = backTwoAnimation();
      animationForeOne.updatePlaybackRate(aliceAnimation().playbackRate);
      animationForeTwo.updatePlaybackRate(aliceAnimation().playbackRate);
      animationBackOne.updatePlaybackRate(aliceAnimation().playbackRate);
      animationBackTwo.updatePlaybackRate(aliceAnimation().playbackRate);
    }
  }, 5000);
  return (
    <div className="wrapper" onClick={speedup}>
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            id="red-queen_and_alice_sprite"
            ref={aliceQueen}
            src={alice}
            alt=""
          />
        </div>
      </div>
      <div className="scenery" id="foreground1" ref={foregroundOne}>
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="foreground2" ref={foregroundTwo}>
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="background1" ref={backgroundOne}>
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="background2" ref={backgroundTwo}>
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          alt=" "
        />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          alt=" "
        />
      </div>
    </div>
  );
};
export default App;
