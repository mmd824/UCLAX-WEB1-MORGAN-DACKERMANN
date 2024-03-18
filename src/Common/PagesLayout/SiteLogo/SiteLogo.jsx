import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./Blossom and Bloom.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Blossom and Bloom" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #6e7070;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
