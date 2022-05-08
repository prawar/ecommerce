import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`

const Language = styled.span`
    font-size: 14px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`
const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight: fold;
    text-align: center;
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (

        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer >
                        <Input />
                        <Search style={{color: "grey", fontSize: '16'}} />
                    </SearchContainer>
                </Left>
                <Center> <Logo>Mundra's</Logo> </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;