import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />

            <h3>{name}</h3>

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

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: #f2e3c9;
        background-color: #70877a;
        padding: 5px 10px;
        margin: 0px;
    }

    p {
        color: #5a6e62;
    }
`;
