import styled from 'styled-components';

export const Container = styled.div`
  color: #08f7fe;
  background: #1f6f78;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  height: 77vh;
  width: 55%;
  padding: 1rem;
  margin: 3rem auto;
  font-size: 1.5rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 678px) {
    justify-content: stretch;
  } */
  .ant-form-item-required {
      color: #08f7fe;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  /* text-decoration: underline double; */
  margin-bottom: 2rem;
  

  &:after {
      content:' ';
    display:block;
    height: 0.3rem;
    width: 100%;
    background: #08f7fe;
  }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`