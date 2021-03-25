import React from 'react';
import styled from 'styled-components';

import game from '../game';


import rock from '../images/rock.webp';
import paper from '../images/paper.webp';
import scissors from '../images/scissors.webp';
import question from '../images/question.webp';

const cpu = (props) => {
    let image = question;

    switch (props.move) {
        case game.ROCK:
            image = rock;
            break;
        case game.PAPER:
            image = paper;
            break;
        case game.SCISSOR:
            image = scissors;
            break;
        default:
    }

    return (<Move src={image}/>);
};

const Move = styled.img`
    width: 100%;
`;

export default cpu;
