import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ProductListItem from "./ProductListItem";
import Product from "../models/Product";

interface ProductListProps {
    productList: Product[];
    onSelectedItems: (items: string[]) => void;
}

const ProductList: React.FC<ProductListProps> = ({ productList, onSelectedItems }) => {

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        sku: string
        ) => {
        const { checked } = event.target;

        if (checked){
            setSelectedItems((prevSelectedItems) => [...prevSelectedItems, sku]);
        } else {
            setSelectedItems((prevSelectedItems) => 
                prevSelectedItems.filter((itemId) => itemId !== sku)
            );
        }
    }
    
    useEffect(() => {
        onSelectedItems(selectedItems);
    }, [selectedItems, onSelectedItems]);
    
    return (
        <StyledProductList>
            {productList.map((item: Product) => (
                <ProductListItem 
                    key={item.SKU}
                    item={item}
                    isChecked={selectedItems.includes(item.SKU)}
                    onChange={(event) => handleCheckboxChange(event, item.SKU)}
                />
            ))}
        </StyledProductList>
    );
};

const StyledProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, minmax(200px, 1fr));
    gap: 16px;
`

export default ProductList;