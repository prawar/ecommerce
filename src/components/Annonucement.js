import styled from "styled-components";

const Container = styled.div`
    background-color: teal;
    color: white;
    height: 30px;
    text-align: center;
    font-weight: 500; 
`
const Annonucement = () => {
  return (
    <Container>
        Sale Sale Get 30% Off On all Orders Abover 1999
    </Container>
  )
}

export default Annonucement;