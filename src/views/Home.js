import { InnerContainer, OuterContainer } from "../common/Container";
import MainTitle from "../components/MainTitle";


function Home() {
    return (
        <OuterContainer>
            <InnerContainer>
                <MainTitle
                    text='Welcome to admin dashboard'
                />
            </InnerContainer>
        </OuterContainer>
    )
};

export default Home;