import React, { useState } from "react";
import styled from "styled-components";
import BadgeIcon from '@mui/icons-material/Badge';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const NavContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #eeeeee;
  // opacity: 0.9;
  z-index: 1;
  color: #232421;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  height: 60px;
`;
const Dropdown = styled.div`
 
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
text-align: center;
`;


const Left = styled.div`
  font-family: "Cookie", cursive;
  cursor: pointer;
  font-size: 3rem;
  flex: 1;
  text-decoration: none;
  color: #232421;
`;

const Middle = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  height: 32px;
  width: 20rem;
  border: none;
  padding: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }
`;

const Searchicon = styled(SearchIcon)`
  background-color: white;
  height: 40px;
  color: #05060c;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  top: 0;
  right: -2px;
  padding: 16px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 0.8rem;
  justify-content: end;
   @media screen and (max-width: 767px) {
   display: none;
   }
`;

const Item = styled.div`
  margin-top: 10px;
  & > * {
    cursor: pointer;
    font-size: 1.12rem;
  }
  &:hover {
      
      color: #05060c; 
      zoom: 1.1;
    }
`;

const NavbarDiv = styled.div`
  padding: 10px 20px;
  display: none;
  

  @media screen and (max-width: 767px) {
          height: 100%;
    // width: calc(100% - 40px);
    width:100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ffffff;
    padding-top: 4rem;
    opacity: 2 !important;
      
    flex-direction: column;
  }
`;
const SmallerDiv = styled.div`
  padding: 10px 20px;

  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: calc(100% - 40px);
  }
`;
const ArrowIcon = styled(KeyboardArrowDownIcon)`
@media screen and (min-width: 768px) {
    display: none !important;
  }
 @media screen and (max-width: 767px) {
  display:block;
  position: absolute;
  // right: 1rem;
  top:1rem;
   transform: translateY(-50%) ${({ perfumesSelect }) => (perfumesSelect ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease; 
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const history = useNavigate();
  const value = useSelector((state) => state.search.searchValue);
  const [search, setSearch] = useState(value);
  const [showSmallerNavbar, setShowSmallerNavbar] = useState(false);
  const [perfumesSelect, setPerfumesSelect] = useState(false);

  const handleMenuClick = () => {
    setShowSmallerNavbar(!showSmallerNavbar);
  };
  const handlePerfumeSelectClick = () => {
    setPerfumesSelect(!perfumesSelect);
  };
  

  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <p style={{ display: "flex", alignItems: "center", lineHeight: "20%" }}>
            Gaia
          </p>
        </Left>
        {/* <Middle>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
          />
          {search.length > 1 ? (
            <Link to={`/products/name/${search.toLowerCase()}`}>
              <Searchicon
                onClick={() => {
                  dispatch({ type: "addValue", value: search });
                }}
                style={{ fontSize: 32 }}
              />
            </Link>
          ) : (
            <Link to={`/products/`}>
              <Searchicon
                onClick={() => {
                  dispatch({ type: "addValue", value: search });
                }}
                style={{ fontSize: 32 }}
              />
            </Link>
          )}
        </Middle> */}
        <Right>
            {user.currentUser && (
            <>
              <Item>
                <p style={{ width: "5.5rem" }}>
                  Hi,{user.currentUser.username}
                </p>
              </Item>
            </>
          )}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/products"}
          >
            <Item>
              <p>Explore</p>
            </Item>
          </Link>
          {!user.currentUser && (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <p>LogIn</p>
                </Item>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <p>Register</p>
                </Item>
              </Link>
            </>
          )}
          {user.currentUser && (
            <>
              <Item>
                <p
                  onClick={() => {
                    dispatch({ type: "logOut" });
                    history("/");
                  }}
                >
                  Logout
                </p>
              </Item>
            </>
          )}

          <Item>
            <Link style={{ color: "inherit" }} to="/cart">
              <p>
                <BadgeIcon color="primary" badgeContent={quantity}>
                  <ShoppingCartIcon />
                </BadgeIcon>
              </p>
            </Link>
          </Item>
          <Item>
            <Link style={{ color: "inherit" }} to="/order">
              <LocalMallIcon />
            </Link>
          </Item>
        </Right>
        <div class="block d-md-none">
        <MenuIcon onClick={handleMenuClick} /></div>
      </Wrapper>

       <NavbarDiv  style={{ display: showSmallerNavbar ? 'flex' : 'none' }}>
        <div class="align-self-end "><CloseIcon onClick={handleMenuClick}/></div>
       <SmallerDiv >
        
        {user.currentUser && (
          <>
            <Item>
              <p style={{ width: "5.5rem" }}>Hi, {user.currentUser.username}</p>
            </Item>
          </>
        )}
        <div
          style={{ textDecoration: "none", color: "inherit" }}
          onClick={handlePerfumeSelectClick}
        >
          <Item>
            {" "}
            <p style={{ position: "relative"}}>Perfumes  <ArrowIcon  perfumesSelect={perfumesSelect}/></p> 
          </Item>
        </div>
       
          < Dropdown style={{ display: perfumesSelect ? 'block' : 'none' }}>
            <Link
              to="/allproducts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>Him</p>
              </Item>
            </Link>
            <Link
              to="/allproducts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p> Her</p>
              </Item>
            </Link>
            <Link
              to="/allproducts"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>Unisex</p>
              </Item>
            </Link>
          </Dropdown>
        
        {!user.currentUser && (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>LogIn</p>
              </Item>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>Discovery Set</p>
              </Item>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>Address</p>
              </Item>
            </Link>
          </>
        )}
        {user.currentUser && (
          <>
            <Item>
              <p
                onClick={() => {
                  dispatch({ type: "logOut" });
                  history.push("/");
                }}
              >
                LogOut
              </p>
            </Item>
          </>
        )}
        <Item>
          <Link style={{ color: "inherit" }} to="/cart">
            {" "}
            <p>
              <BadgeIcon color="primary" badgeContent={quantity}>
                <ShoppingCartIcon />
              </BadgeIcon>
            </p>
          </Link>
        </Item>

        <Item>
          <Link style={{ color: "inherit" }} to="/order">
            <LocalMallIcon />
          </Link>
        </Item>
      </SmallerDiv>
      </NavbarDiv>
    </NavContainer>
  );
};

export default Navbar;
