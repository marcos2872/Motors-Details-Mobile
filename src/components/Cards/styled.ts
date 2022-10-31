import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
`

export const Scroll =  styled.ScrollView`
background-color: transparent;
width: 400px;
padding: 5px;
`
export const Card = styled.View`
background-color: ${({theme}) => theme.COLORS.CARDS};
width: 100%;
height: 200px;
border-radius: 10px;
margin: 5px 0;
`