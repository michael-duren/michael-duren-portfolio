import styled from 'styled-components';

export const UsesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;

  ul li {
    padding: 1rem;
    display: flex;

    span {
      padding-left: 5rem;
      text-align: right;
      width: 100%;
    }
  }
`;
