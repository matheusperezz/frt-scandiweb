import Product from "../models/Product";
import React from "react";
import styled from "styled-components";

const StyledProductListItem = styled.div`
    width: 200px;
    background-color: #f0f0f0;
    padding: 16px;
    position: relative;
    border-radius: 10px;
    text-align: center;
    height: 100px;

    input {
        position: absolute;
        top: 8px;
        left: 8px;
    }
`

interface ProductListItemProps {
    item: Product;
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>, sku: string) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
    item, 
    isChecked, 
    onChange
}) => {

    let productType = '';

    if (item.size){
        productType = 'DVD';
    } else if (item.weight){
        productType = 'Book'
    } else if (item.height && item.width && item.length){
        productType = 'Furniture'
    }

    let productText = '';

    switch (productType){
        case 'DVD':
            productText = `Size: ${item.size} MB`;
            break;
        case 'Book':
            productText = `Weight: ${item.weight}KG`;
            break;
        case 'Furniture':
            productText = `Dimensions: ${item.height}x${item.width}x${item.length}`
            break;
        default:
            productText = 'Product not registred'
            break;
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event, item.SKU);
    }

    return (
        <StyledProductListItem key={item.SKU}>
            <input 
                className="delete-checkbox" 
                type="checkbox" 
                checked={isChecked}
                onChange={handleChange}
            />
            <p>{item.SKU}</p>
            <p>{item.name}</p>
            <p>{item.price} $</p>
            <p>{productText}</p>
        </StyledProductListItem>
    )

}

export default ProductListItem;