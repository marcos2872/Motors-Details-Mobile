import styled from "styled-components/native";

export const Container = styled.View`
background-color: ${({theme}) => theme.COLORS.HEADER};
width: 100%;
height: 100px;
justify-content: space-around;
flex-direction: row;
align-items: center;

`;

export const InputText = styled.TextInput`
background-color: white;
width: 70%;
height: 30px;
border-radius: 5px;
margin-top: 46px;
padding-left: 5px;
justify-content: flex-end;

`;

export const Menu = styled.Image`
background-color: transparent;
width: 30px;
height: 30px;
margin-top: 50px;
`

export const Image = styled.Image`
background-color: transparent;
width: 20px;
height: 20px;
`