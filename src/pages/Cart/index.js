import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {formatPrice} from '../../utils/format';
import colors from '../../styles/colors';

import {
    Container,
    Products,
    Product,
    ProductInfo,
    ProductImage,
    ProductDetails,
    ProductTitle,
    ProductPrice,
    ProductDelete,
    ProductControls,
    ProductControlButton,
    ProductAmount,
    ProductSubtotal,
    TotalContainer,
    TotalText,
    TotalAmount,
    Order,
    OrderText,
    Main,
    MainText,
    EmptyContainer,
    EmptyText,
} from './styles';

function Cart({navigation}) {
    const products = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
            priceFormatted: formatPrice(product.price),
        }))
    );
    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce(
                (total, product) => total + product.price * product.amount,
                0
            )
        )
    );
    const dispatch = useDispatch();
    function renderProduct({item}) {
        function decrement(product) {
            dispatch(
                CartActions.updateAmountRequest(product.id, product.amount - 1)
            );
        }
        function increment(product) {
            dispatch(
                CartActions.updateAmountRequest(product.id, product.amount + 1)
            );
        }
        return (
            <Product>
                <ProductInfo>
                    <ProductImage source={{uri: item.image}} />
                    <ProductDetails>
                        <ProductTitle>{item.title}</ProductTitle>
                        <ProductPrice>{item.priceFormatted}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete
                        onPress={() =>
                            dispatch(CartActions.removeFromCart(item.id))
                        }>
                        <Icon
                            name="delete-forever"
                            size={24}
                            color={colors.primary}
                        />
                    </ProductDelete>
                </ProductInfo>
                <ProductControls>
                    <ProductControlButton onPress={() => decrement(item)}>
                        <Icon
                            name="remove-circle-outline"
                            size={20}
                            color={colors.primary}
                        />
                    </ProductControlButton>
                    <ProductAmount value={String(item.amount)} />
                    <ProductControlButton onPress={() => increment(item)}>
                        <Icon
                            name="add-circle-outline"
                            size={20}
                            color={colors.primary}
                        />
                    </ProductControlButton>
                    <ProductSubtotal>{item.subtotal}</ProductSubtotal>
                </ProductControls>
            </Product>
        );
    }
    return (
        <Container>
            {products.length ? (
                <>
                    <Products
                        data={products}
                        keyExtractor={item => String(item.id)}
                        renderItem={renderProduct}
                    />
                    <TotalContainer>
                        <TotalText>Total</TotalText>
                        <TotalAmount>{total}</TotalAmount>
                        <Order>
                            <OrderText>Finalizar Pedido</OrderText>
                        </Order>
                        <Main onPress={() => navigation.navigate('Main')}>
                            <MainText>Escolher mais produtos</MainText>
                        </Main>
                    </TotalContainer>
                </>
            ) : (
                <EmptyContainer>
                    <Icon name="remove-shopping-cart" size={64} color="#eee" />
                    <EmptyText>Seu carrinho está vazio.</EmptyText>
                </EmptyContainer>
            )}
        </Container>
    );
}

export default Cart;
