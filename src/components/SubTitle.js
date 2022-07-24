import styled from "styled-components";
import { Colors } from "../common/Colors";

function SubTitle({
    text
}) {
    return (
        <Text>
            {text}
        </Text>
    )
};

export default SubTitle;

const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${Colors.grayText};
    font-style: italic;
    
`