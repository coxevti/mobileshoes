import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Wrapper, Container, Logo, BasketContainer, ItemCount} from './styles';

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>20</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
