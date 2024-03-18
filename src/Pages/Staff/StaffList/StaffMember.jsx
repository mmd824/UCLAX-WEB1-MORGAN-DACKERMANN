import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

import ModalImage from "react-modal-image";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <ModalImage small={image} large={image} alt={name} />

            <h4>{name}</h4>

            <div className="bottom">
                <p>
                    <b>Price:</b> {yearStarted}
                </p>

                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #eeeeee;

    .bottom {
        padding: 20px;
    }

    h4 {
        color: #f2e3c9;
        background-color: #70877a;
        padding: 5px 10px;
        margin: 0px;
    }

    p {
        color: #5a6e62;
    }
`;
