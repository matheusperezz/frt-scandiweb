import React from "react";
import styled from "styled-components";

import Divider from "./Divider";

type Props = {
    headerTitle: string;
    leftButtonTitle: string;
    rightButtonTitle: string;
    onLeftClick: () => void;
    onRightClick: () => void;
}

const Header: React.FC<Props> = ({headerTitle, leftButtonTitle, rightButtonTitle, onLeftClick, onRightClick }) => {
    return (
        <>
            <StyledHeader>
            <h2>{headerTitle}</h2>
            <button id="leftbutton" onClick={onLeftClick}>{leftButtonTitle}</button>
            <button id="delete-product-btn" onClick={onRightClick}>{rightButtonTitle}</button>
            </StyledHeader>

            <Divider />
        </>
    );
};

const StyledHeader = styled.header`
    
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: #2b2b2b;

    h2 {
        align-self: flex-start;
        font-size: 28px;
    }

    #leftbutton {
        margin-left: auto;
    }

    #delete-product-btn {
        background-color: #b10202;
        color: whitesmoke;
    }

    button {
        border: 0;
        border-radius: 8px;
        font-weight: bold;
    }

    #leftbutton:hover {
        background-color: #02b502;
        color: whitesmoke;
    }

    #delete-product-btn:hover {
        opacity: 90%;
    }
`

export default Header;