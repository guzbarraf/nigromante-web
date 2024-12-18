import styled from 'styled-components'

export const ContRedes = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  aling-items: center;
  justify-content: flex-end;
`

export const ContRedesIcon = styled.div`
  width: 40px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  aling-items: center;
  justify-content: center;
`

export const ALinkFacebook = styled.a`
  font-size: 30px;
  color: #4267b2;
  text-shadow: 5px 1px 5px rgba(66, 103, 178, 1);

  &:hover {
    color: #fefffe;
  }
`
export const ALinkTwitter = styled.a`
  font-size: 30px;
  color: #02b0ec;
  text-shadow: 5px 1px 5px rgba(2, 176, 236, 1);

  &:hover {
    color: #f3f8fa;
  }
`
export const ALinkInstagram = styled.a`
  font-size: 30px;
  color: #db2c78;
  text-shadow: 5px 1px 5px rgba(219, 44, 120, 1);

  &:hover {
    color: #febc5b;
  }
`