import { InnerContainer, OuterContainer } from "../common/Container";
import MainTitle from "../components/MainTitle";
import SubTitle from "../components/SubTitle";


function Home() {
    return (
        <OuterContainer>
            <InnerContainer>
                <MainTitle
                    text='Welcome to admin dashboard'
                />
                <SubTitle 
                    text='Click one of our car&apos;s data to check the quantities'
                />
            </InnerContainer>
        </OuterContainer>
    )
};

export default Home;