import styled from 'styled-components';

export const Container = styled.button`
 width: 100px;
 height: 30px;
 text-align: center;
 border-radius: 8px;
 margin-top: 10px;
 &:hover{
  transform: translate();
  border-radius: 5px;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  overflow: hidden;
}

/* wave {
  width: 1000px;
  height: 1025px;
  position: absolute;
  top: -25%;
  left: 50%;
  margin-left: -500px;
  margin-top: -500px;
  border-radius: 35%;
  background: rgba(255, 255, 255, .75);
  animation: wave 15s infinite linear;
} */
 
`