import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${({theme}) => theme.COLORS.HEADER};
width: 100%;
height: 100px;
justify-content: baseline;
flex-direction: row;
/* align-items: center; */

`;

export const InputText = styled.TextInput`
background-color: white;
width: 70%;
height: 30px;
border-radius: 5px;
margin-top: 50px;

`;

export const Menu = styled.Image`
background-color: transparent;
width: 30px;
height: 30px;
margin-top: 50px;
`