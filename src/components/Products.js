import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import { popularProducts } from '../data'
import { publicRequest } from "../requestMethods";
import ProductItem from "./ProductItem";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProduts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProduts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
    console.log(filteredProducts)
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduts(prev =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    }
    else if (sort === "asc"){
      setFilteredProduts(prev =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    }
    else{
      setFilteredProduts(prev =>
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

  return (
    <Container>
      {cat ? filteredProducts.map(item => <ProductItem item={item} key={item.id} />)
      : products.slice(0,8).map(item => <ProductItem item={item} key={item.id} />)}
    </Container>
  )
}

export default Products