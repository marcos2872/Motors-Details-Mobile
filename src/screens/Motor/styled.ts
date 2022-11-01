import styled from "styled-components/native";


export const Container = styled.View`
background-color: ${({theme}) => theme.COLORS.BACKGROUND};
flex: 1;
width: 100%;
align-items: center;

`

export const Scroll = styled.ScrollView`
background-color: transparent;
width: 90%;
padding: 0;
`

export const Title = styled.Text`
background-color: transparent;
font-family: ${({theme}) => theme.FONTS.BOLD};
font-size: 24px;
margin-top: 10px;
margin-bottom: 10px;
text-align: center;
`

export const Details = styled.View`
background-color: ${({theme}) => theme.COLORS.CARDS};
width: 90%;
padding: 30px;
border-radius: 10px;
margin: auto;
margin-top: 5px;
margin-bottom: 5px;
`

export const Text = styled.Text`
background-color: transparent;
font-family: ${({theme}) => theme.FONTS.MEDIUM};
margin-top: 10px;
`
export const Images = styled.View`
background-color: transparent;
width: 95%;
height: 100%;
flex: 1;
margin: auto;
`
export const ImageM = styled.Image`
background-color: gray;
border-radius: 10px;
width: 100%;
height: 400px;
margin: auto;
margin-top: 5px;
margin-bottom: 5px;
`

export const IconYouTube = styled.Image`
width: 50px;
height: 50px;
`

export const ButonVideo = styled.TouchableOpacity`
background-color: transparent;
margin-top: 10px;
color: white;
width: 50px;
height: 40px;
border-radius: 5px;
justify-content: center;
`