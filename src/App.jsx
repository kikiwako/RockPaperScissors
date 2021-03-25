import React from "react";
import styled from "styled-components";

import Result from "./components/result.component";
import Move from "./components/move.component";

import game from './game';

import rock from './images/rock.webp';
import paper from './images/paper.webp';
import scissors from './images/scissors.webp';

const App = ()=>  {
    const [cpuMove, setCpuMove] = React.useState();
    const [resultText, setResultText] = React.useState(game.CHOOSE);
    const [played, setPlayed] = React.useState(false);

    const reset = () => {
        setCpuMove();
        setResultText(game.CHOOSE);
        setPlayed(false);
    }

    const play = (move) => {
        const cpuMove = game.getRandomMove();
        setCpuMove(cpuMove);
        setPlayed(move);
        setResultText(game.compare(move, cpuMove));
        setTimeout(() => reset(), 2000);
    }
    
    const handleRock = ()=> {
        play(game.ROCK);
    }
    
    const handlePaper = ()=> {
        play(game.PAPER);
    }
    
    const handleScissors = ()=> {
        play(game.SCISSOR);
    }

    const AppContainer = styled.div`
        height: 90vh;
        width: 90vw;
        margin: 5vh 5vw;
    `;

    const GridContainer = styled.div`
        position: absolute;
        top: calc(50% - min(45vw, 45vh));
        left: calc(50% - min(45vw, 45vh));
        height: min(90vw, 90vh);
        width: min(90vw, 90vh);
        display: grid;
        grid-template-columns: min(30vw, 30vh) min(30vw, 30vh) min(30vw, 30vh);
        grid-template-rows: min(30vw, 30vh) min(30vw, 30vh) min(30vw, 30vh);
        grid-template-areas:
            "playerRock . ."
            "playerPaper result cpuMove"
            "playerScissors . ."
        ;
        /* background-color: yellow; */
    `;

    const Rock = styled.img`
        visibility: ${played ? "hidden" : "visible"};
        grid-area: playerRock;
        transform: scaleX(-1);
        width: 100%;
        transition: 0.2s all ease-out;
        opacity: 75%;

        &:hover {
            transform: scaleX(-1.1) scaleY(1.1);
            transition: 0.2s all ease-out;
            opacity: 90%;
        }
    `;

    const Paper = styled.img`
        visibility: ${played ? "hidden" : "visible"};
        grid-area: playerPaper;
        transform: scaleX(-1);
        width: 100%;
        transition: 0.2s all ease-out;
        opacity: 75%;

        &:hover {
            transform: scaleX(-1.1) scaleY(1.1);
            transition: 0.2s all ease-out;
            opacity: 90%;
        }
    `;

    const Scissors = styled.img`
        visibility: ${played ? "hidden" : "visible"};
        grid-area: playerScissors;
        transform: scaleX(-1);
        width: 100%;
        transition: 0.2s all ease-out;
        opacity: 75%;

        &:hover {
            transform: scaleX(-1.1) scaleY(1.1);
            transition: 0.2s all ease-out;
            opacity: 90%;
        }
    `;

    const PlayerMove = styled.div`
        visibility: ${played ? "visible" : "hidden"};
        transform: scaleX(-1);
        grid-area: playerPaper;
    `;

    const CpuMove = styled.div`
        grid-area: cpuMove
    `;

    return (
    <AppContainer>
        <GridContainer>
            <Rock onClick={handleRock} src={rock} alt="Rock"/>
            <Paper onClick={handlePaper} src={paper} alt="Paper"/>
            <Scissors onClick={handleScissors} src={scissors} alt="Scissors"/>
            <PlayerMove>
                <Move move={played}/>
            </PlayerMove>
            <Result content={resultText}/>
            <CpuMove>
                <Move move={cpuMove}/>
            </CpuMove>
        </GridContainer>
    </AppContainer>
)}

export default App;
