import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
    border-bottom: 5px solid #cfcfcf;
    opacity: 90%;
    margin: 8px 0;
`

const Divider = () => {
    return (
        <StyledDivider/>
    )
}

export default Divider;