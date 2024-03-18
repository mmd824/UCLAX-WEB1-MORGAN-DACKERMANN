import styled from "styled-components";

const ReactComponent = ({ title, showDisc = false }) => {
    return (
        <ReactComponentStyled>
            <h3> {title}</h3>
            {showDisc && (
                <DisclaimerStyled>
                    Disclaimer: This film is intended for mature audiences.
                </DisclaimerStyled>
            )}
        </ReactComponentStyled>
    );
};

export default ReactComponent;

const ReactComponentStyled = styled.div`
    border: solid 3px #70877a;
    padding: 20px;
    margin: 30px 0px;
`;

const DisclaimerStyled = styled.p`
    color: #6e7070;
    margin: 20px 0px;
`;
