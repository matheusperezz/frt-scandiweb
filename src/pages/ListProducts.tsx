import Header from "../components/Header";
import GlobalStyle from "../GlobalStyles";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const URL = "https://php-scandiweb.herokuapp.com/";

export default function ListProducts(){
    
    async function getAllProducts() {
        try {
          const response = await fetch(URL);
          if (response.ok) {
            const data = await response.json();
            setProductList(data);
          } else {
            throw new Error('Error: ' + response.status);
          }
        } catch (error) {
          console.error(`Error: ${error}`);
        }
    }
      

    useEffect(() => {
        getAllProducts();
    }, []);

    const [productList, setProductList] = useState([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const navigate = useNavigate();

    const navigateToNewProduct = () => {
        navigate('/addproduct')
    }

    const handleSelectedItems = (items: string[]) => {
        setSelectedItems(items);
    }

    const deleteSelectedItems = async () => {
        for (const id of selectedItems){
            try {
                await axios.delete(`${URL}?id=${id}`);
            } catch (error) {
                console.error(`Error on delete this ID: ${id}`);
            }
        }
        getAllProducts();
    };

    return(
        <>
            <GlobalStyle />
            <Header
                headerTitle="Product List"
                leftButtonTitle="Add"
                rightButtonTitle="Mass Delete"

                onLeftClick={navigateToNewProduct}
                onRightClick={deleteSelectedItems}
            />
            <ProductList productList={productList} onSelectedItems={handleSelectedItems} />
            <Footer />
        </>
    )
}