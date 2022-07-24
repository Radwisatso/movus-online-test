import styled from "styled-components";

function MainTitle({
    text
}) {
    return (
        <Text>
            {text}
        </Text>
    )
};

export default MainTitle;

const Text = styled.p`
    font-size: 22px;
    font-weight: 700;
`