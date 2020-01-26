import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import {formatPrice} from '../../utils/format';

import {
    Container,
    Product,
    ProductImage,
    ProductTitle,
    ProductPrice,
    AddButton,
    ProductAmount,
    ProductAmountText,
    AddButtonText,
} from './styles';

function Main() {
    const [products, setProduct] = useState([]);

    const distpach = useDispatch();

    const amount = useSelector(state =>
        state.cart.reduce((amountSum, product) => {
            amountSum[product.id] = product.amount;
            return amountSum;
        }, {})
    );

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products');
            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            setProduct(data);
        }
        getProducts();
    }, []);

    function handleAddProduct(id) {
        distpach(CartActions.addToCartRequest(id));
    }

    function renderProduct({item}) {
        return (
            <Product key={item.id}>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <AddButton onPress={() => handleAddProduct(item.id)}>
                    <ProductAmount>
                        <Icon name="add-shopping-cart" color="#fff" size={20} />
                        <ProductAmountText>
                            {amount[item.id] || 0}
                        </ProductAmountText>
                    </ProductAmount>
                    <AddButtonText>Adicionar</AddButtonText>
                </AddButton>
            </Product>
        );
    }

    return (
        <Container>
            <FlatList
                horizontal
                data={products}
                extraData={amount}
                keyExtractor={item => String(item.id)}
                renderItem={renderProduct}
            />
        </Container>
    );
}

export default Main;
