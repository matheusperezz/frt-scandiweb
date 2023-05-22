import React from "react";
import styled from "styled-components";
import Divider from "./Divider";

const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: calc(100% - 32px);
    margin: 0px;
    text-align: center;

    p {
        margin: 16px 0;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Divider />
            <p>Scandiweb Test assignment</p>
        </StyledFooter>
    )
}

export default Footer;