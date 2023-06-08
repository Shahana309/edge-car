import React from 'react';
import { styled } from 'styled-components';
import { ShowroomImg } from '../data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
`

const Header = styled.h1`
  font-size: 40px;
  font-weight: medium;
  text-decoration: underline;
  text-decoration-color:red;
  text-decoration-thickness:2px;
  margin-bottom: 5px;
`
const Content = styled.p`
  width: 100%;
  margin-bottom:25px;
`
const Text = styled.p`
  color: red;
  margin-bottom:8px;
`

const ImageContainer = styled.div`
  width:100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem`

const MyIcon = styled.img.attrs(props => ({
    src: props.Img,
  }))`
  width: 31.333%;
  `;

function Showroom() {
    return ( 
        <Container>
            <Header>Showroom</Header>
            <Text>“Its One Reason To Work With Us.”</Text>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Content>
            <ImageContainer>
            {ShowroomImg.map((each)=>(
              <MyIcon Img={each.img}/>
            ))}
            </ImageContainer>
        </Container>
     );
}

export default Showroom;