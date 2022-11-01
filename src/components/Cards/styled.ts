import styled from "styled-components/native";
import ImageC from '../Image'

export const Container = styled.View`
flex: 1;
width: 100%;
align-items: center;
`

export const Scroll =  styled.ScrollView`
background-color: transparent;
width: 400px;
padding: 5px;
`

export const Name = styled.Text`
font-family: ${({theme}) => theme.FONTS.MEDIUM};
width: 30%;
text-align: center;
`

export const Image = styled(ImageC)`
background-color: transparent;
border-radius: 10px;
width: 70%;
height: 90%;
`

export const Buton = styled.TouchableOpacity`
background-color: ${({theme}) => theme.COLORS.CARDS};
width: 90%;
height: 200px;
border-radius: 10px;
margin: auto;
margin-top: 5px;
margin-bottom: 5px;
align-items: center;
justify-content: space-around;
flex-direction: row;
padding: 1%;
`