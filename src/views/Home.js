
// Global container
import { InnerContainer, OuterContainer } from "../common/Container";

// Components
import MainTitle from "../components/MainTitle";
import SubTitle from "../components/SubTitle";

// libraries
import styled from "styled-components";
import Card from "../components/Card";

// utilities
import { cars } from "../utilities/car";
import { useNavigate } from "react-router-dom";


function Home() {

    const data = cars;
    const navigate = useNavigate();

    // Render cars collection
    function renderCars(data) {
        return data.map(value => (
            <Card
                key={value.id}
                title={value.title}
                subtitle={value.subtitle}
                imageSrc={value.imageSrc}
                imageAlt={value.imageAlt}
                onClick={() => navigate(`/car/${value.title}`)}
            />
        ))
    }

    return (
        <OuterContainer>
            <InnerContainer>
                <MainTitle
                    text='Welcome to admin dashboard'
                />
                <SubTitle
                    text='Click one of our car&apos;s data to check the quantities'
                />
                <CardsContainer>
                    {renderCars(data)}
                </CardsContainer>
            </InnerContainer>
        </OuterContainer>
    )
};

export default Home;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3em 0 3em 0;
`