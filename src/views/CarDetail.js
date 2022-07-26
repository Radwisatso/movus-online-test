import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Global container
import { InnerContainer, OuterContainer } from "../common/Container";

// Components
import MainTitle from "../components/MainTitle";
import SubTitle from "../components/SubTitle";

// Rechart library
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

// Reusable colors 
import { Colors } from "../common/Colors";

// API
import { getCarWMI } from "../api/CarAPI";

// styled components
import styled from "styled-components";


function CarDetail() {

    const { carName } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [barData, setBarData] = useState([]);
    const [comparedData, setComparedData] = useState( // Not finished
        [{
            name: "Car name",
            car_model_1: 4000,
            car_model_2: 2400
        }]
    );

    // Fetch car data
    useEffect(() => {
        async function getCar() {
            try {
                const uniqueCars = [];
                const result = await getCarWMI(carName)
                const temporaryData = result.data.Results.map((value, index) => {
                    return {
                        id: index,
                        name: value.VehicleType,
                        total: result.data.Results.filter(item => item.VehicleType === value.VehicleType).length,
                        createdOn: new Date(value.CreatedOn).getFullYear()
                    }
                })
                const barData = temporaryData.filter(value => {
                    const isDuplicate = uniqueCars.includes(value.name);
                    if (!isDuplicate) {
                        uniqueCars.push(value.name)
                        return true;
                    } else {
                        return false
                    }
                })
                // gather all data
                setData(temporaryData)
                // data only for bar chart
                setBarData(barData)
            } catch (err) {
                console.log(err)
            }
        }
        getCar();
    }, [carName])
    
    // Fetch compared car (In progress - Not finished)
    useEffect(() => {
        async function getComparisonCar() {
            try {
                const uniqueCars = [];
                const result = await getCarWMI('Mitsubishi')
                const temporaryData = result.data.Results.map((value, index) => {
                    return {
                        id: index,
                        name: value.VehicleType,
                        total: result.data.Results.filter(item => item.VehicleType === value.VehicleType).length,
                        createdOn: new Date(value.CreatedOn).getFullYear()
                    }
                })
                const barData = temporaryData.filter(value => {
                    const isDuplicate = uniqueCars.includes(value.name);
                    if (!isDuplicate) {
                        uniqueCars.push(value.name)
                        return true;
                    } else {
                        return false
                    }
                })
                console.log(result.data.Results)
                console.log(temporaryData)
                console.log(barData)
            } catch (error) {
                console.log(error)
            }
        }
        getComparisonCar()
    }, [carName, data])
    
    // Debug console
    useEffect(() => {
        console.log(data)
        console.log(barData)
    }, [data, barData])

    // TODOS:
    // Implement filter with useEffect and set the new data with 'setComparedData'

    return (
        <OuterContainer>
            <InnerContainer>
                <BackButton onClick={() => navigate(`/`)}>
                    Back to dashboard
                </BackButton>
                <MainTitle
                    text={carName}
                />
                <TextTitle>
                    All {carName}&apos;s model
                </TextTitle>
                <ResponsiveContainer width={500} height="30%" >
                    <BarChart
                        data={barData}
                        barSize={20}
                        margin={{
                            top: 30,
                            right: 15,
                            left: 15,
                            bottom: 5
                        }}
                    >
                        <XAxis
                            dataKey="name"
                            interval={0}
                            padding={{
                                left: 10,
                                right: 10,
                            }}
                            tickMargin={20}
                            fontSize={12}
                            angle={10}
                            orientation='top'
                        />
                        <YAxis
                            fontSize={12}
                        />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar
                            dataKey="total"
                            fill={Colors.primaryColor}
                            background={{
                                fill: "#eeeeee"
                            }} />
                    </BarChart>
                </ResponsiveContainer>
                <br />
                <TextTitle>
                    Comparison
                </TextTitle>
                <ResponsiveContainer width={500} height="30%">
                    <BarChart data={comparedData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="car_model_2" fill={Colors.primaryColor} />
                        <Bar dataKey="car_model_1" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </InnerContainer>
        </OuterContainer>
    )
};

export default CarDetail;

const BackButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    &:hover {
        text-decoration: underline;
    }
`

const TextTitle = styled.h3`

`


