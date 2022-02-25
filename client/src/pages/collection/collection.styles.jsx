import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
`;

export { PageContainer, ItemsContainer, CollectionTitle };
