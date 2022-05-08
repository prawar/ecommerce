import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import styled from 'styled-components';
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    ${mobile({height: '50px'})};
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: 'none'})};
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center

    ${mobile({padding: '10px 0px'})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({marginLeft: '0px'})}
`
const Input = styled.input`
    border: none;
    ${mobile({width: '50px'})};
`

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    ${mobile({justifyContent: 'flex-end'})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: fold;
    ${mobile({fontSize: '24px'})}
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    ${mobile({flex: 2, justifyContent: 'center'})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: '12px', marginLeft: '10px'})}
`

const Navbar = () => {
    return (

        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer >
                        <Input placeholder='Search' />
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