import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyle from "../GlobalStyles";
import Product from "../models/Product";

const AddProduct = () => {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState('');
  const [type, setType] = useState("");
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');

  const URL = "https://php-scandiweb.herokuapp.com/";
  const navigate = useNavigate();

  const handleTypeChange = (event: any) => {
    setType(event.target.value);
  };

  const onSaveProduct = async () => {
    if (!sku || !name || price === '' || !type) {
      return;
    }

    const productData = {
      SKU: sku,
      name,
      price,
      weight,
      size,
      height,
      width,
      length,
    };

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
    
      if (response.ok) {
        const data = await response.json();
        navigate('/')
      } else {
        console.error('Erro na requisição:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const onCancelForm = () => {
    navigate('/')
  };

  useEffect(() => {
    setWeight('');
    setSize('');
    setHeight('');
    setWidth('');
    setLength('');
  }, [type]);

  return (
    <div>
      <GlobalStyle />
      <Header
        headerTitle="Product Add"
        leftButtonTitle="Save"
        rightButtonTitle="Cancel"
        onLeftClick={onSaveProduct}
        onRightClick={onCancelForm}
      />
      <StyledForm>
        <form id="product_form">
          <FormGroup>
            <label>SKU</label>
            <input
              id="sku"
              type="text"
              value={sku}
              onChange={(event) => setSku(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label>Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <label>Price ($)</label>
            <input
              id="price"
              type="number"
              value={price}
              onChange={(event) => setPrice(event.target.value !== '' ? event.target.value : '')}
            />
          </FormGroup>
          <br />
          <FormGroup>
            <label>Type Switcher</label>
            <select
              id="productType"
              value={type}
              onChange={handleTypeChange}
            >
              <option value="">Select Type</option>
              <option value="Book">Book</option>
              <option value="DVD">DVD</option>
              <option value="Furniture">Furniture</option>
            </select>
          </FormGroup>
          <br />
          {type === "Book" && (
            <>
              <FormGroup>
                <label>Weight (KG)</label>
                <input
                  id="weight"
                  type="number"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value !== '' ? event.target.value : '')}
                />
              </FormGroup>
              <p>Please, provide weight</p>
            </>
          )}
          {type === "DVD" && (
            <>
              <FormGroup>
                <label>Size (MB)</label>
                <input
                  id="size"
                  type="number"
                  value={size}
                  onChange={(event) => setSize(event.target.value !== '' ? event.target.value : '')}
                />
              </FormGroup>
              <p>Please, provide size</p>
            </>
          )}
          {type === "Furniture" && (
            <>
              <FormGroup>
                <label>Height (CM)</label>
                <input
                  id="height"
                  type="number"
                  value={height}
                  onChange={(event) => setHeight(event.target.value !== '' ? event.target.value : '')}
                />
              </FormGroup>
              <FormGroup>
                <label>Width (CM)</label>
                <input
                  id="width"
                  type="number"
                  value={width}
                  onChange={(event) => setWidth(event.target.value !== '' ? event.target.value : '')}
                />
              </FormGroup>
              <FormGroup>
                <label>Length (CM)</label>
                <input
                  id="length"
                  type="number"
                  value={length}
                  onChange={(event) => setLength(event.target.value !== '' ? event.target.value : '')}
                />
              </FormGroup>
              <p>Please, provide dimensions</p>
            </>
          )}
        </form>
      </StyledForm>
      <Footer />
    </div>
  );
};

const StyledForm = styled.div`
  form {
    width: 400px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  label {
    text-align: left;
    margin-left: 10px;
  }

  input,
  select {
    margin-left: auto;
    width: 180px;
  }

  p {
    margin-top: 24px;
    margin-left: 10px;
  }

  #sku {
    margin-top: 10px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export default AddProduct;