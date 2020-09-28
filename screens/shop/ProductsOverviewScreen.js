import React from 'react'
import { Flatlist, Text, StyleSheet } from 'reatc-native'
import { useSelector } from 'react-redux'

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)

    return (
        <Flatlist 
            data={products} 
            renderItem={itemData => <Text>{itemData.item.title}</Text>}
        />
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

const styles = StyleSheet.create({

})

export default ProductsOverviewScreen