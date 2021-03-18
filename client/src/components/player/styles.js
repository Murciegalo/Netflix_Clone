import styled from 'styled-components/macro'
import {Link as ReactLink} from 'react-router-dom'


export const Container = styled.div``;

export const Btn = styled.button`
  background-color: #e50914;
  border-color: #ff0a10;
  width: 114px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 20%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;

  video{
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 5px;
  width: 40px;
  height: 42px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3;
  font-size: 30px;
  color: #fff;

  &:hover {
    opacity: 1;
    transform: rotate(90deg);
  }
`;