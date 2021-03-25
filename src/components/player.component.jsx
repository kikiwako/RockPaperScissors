import React from 'react';
import styled from 'styled-components';
import game from '../game';

import rock from '../images/rock.webp';
import paper from '../images/paper.webp';
import scissors from '../images/scissors.webp';

const play = (move) => {
    const cpuMove = game.getRandomMove();
    alert(game.compare(move, cpuMove));
}

const handleRock = ()=> {
    play(game.ROCK);
}

const handlePaper = ()=> {
    play(game.PAPER);
}

const handleScissors = ()=> {
    play(game.SCISSORS);
}

const player = () => (
  <Player>
      <Rock onClick={handleRock} src={rock} alt="Rock"/>
      <Paper onClick={handlePaper} src={paper} alt="Paper"/>
      <Scissors onClick={handleScissors} src={scissors} alt="Scissors"/>
  </Player>
);

const Rock = styled.img`
    grid-area: playerRock;
    transform: scaleX(-1);
    width: 100%;
    transition: 0.2s all ease-out;

    &:hover {
        transform: scaleX(-1.1) scaleY(1.1);
        transition: 0.2s all ease-out;
    }
`;

const Paper = styled.img`
    grid-area: playerPaper;
    transform: scaleX(-1);
    width: 100%;
    transition: 0.2s all ease-out;

    &:hover {
        transform: scaleX(-1.1) scaleY(1.1);
        transition: 0.2s all ease-out;
    }
`;

const Scissors = styled.img`
    grid-area: playerScissors;
    transform: scaleX(-1);
    width: 100%;
    transition: 0.2s all ease-out;

    &:hover {
        transform: scaleX(-1.1) scaleY(1.1);
        transition: 0.2s all ease-out;
    }
`;

const Player = styled.div`

`;

export default player;
