import React, { FC, HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    visible?: boolean;
}

const OverlayC = styled.div<Props>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .4);
    transition: all .2s;
    opacity: ${p => p.visible ? '1' : '0'};
    pointer-events: ${p => p.visible ? 'auto' : 'none'};
`;

const Overlay: FC<Props> = (props) => {
    return ReactDOM.createPortal(
        <OverlayC {...props}></OverlayC>,
        document.body);
};

export default Overlay;
