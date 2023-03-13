import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
  padding: 16px 80px;
  border: groove;
  border-radius: 8px;
  background-color: #e5e5e587;
`;

export const Text = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: auto;
  gap: 8px;
  margin: 0;
`;

export const Value = styled.span`
  margin: 0;
`;
