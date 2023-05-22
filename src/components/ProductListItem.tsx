import React from "react";
import styled from "styled-components";
import Product from "../models/Product";

interface ProductListItemProps {
  item: Product;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, sku: string) => void;
}

enum ProductType {
  DVD = 'DVD',
  Book = 'Book',
  Furniture = 'Furniture',
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  item,
  isChecked,
  onChange,
}) => {
  const { size, weight, height, width, length, SKU, name, price } = item;

  const determineProductType = (): ProductType => {
    if (size) {
      return ProductType.DVD;
    } else if (weight) {
      return ProductType.Book;
    } else if (height && width && length) {
      return ProductType.Furniture;
    } else {
        return ProductType.Furniture;
    }
  };

  const getProductText = (): string => {
    const type = determineProductType();

    switch (type) {
      case ProductType.DVD:
        return `Size: ${size} MB`;
      case ProductType.Book:
        return `Weight: ${weight} KG`;
      case ProductType.Furniture:
        return `Dimensions: ${height}x${width}x${length}`;
      default:
        return 'Product not registered';
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event, SKU);
  };

  const productText = getProductText();

  return (
    <ProductListItemContainer>
      <StyledInput
        className="delete-checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <p>{SKU}</p>
      <p>{name}</p>
      <p>{price} $</p>
      <p>{productText}</p>
    </ProductListItemContainer>
  );
};

const ProductListItemContainer = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 16px;
  position: relative;
  border-radius: 10px;
  text-align: center;
  height: 100px;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export default ProductListItem;