import React from 'react';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Wrapper, Container, Logo, BasketContainer, ItemCount} from './styles';

function Header({navigation, cartSize}) {
  console.tron.log(navigation);
  return (
    <Wrapper>
      <Container>
        <Logo onPress={() => navigation.navigate('Cart')} />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#fff" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps, null)(Header);
