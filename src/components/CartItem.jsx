import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { small } from "../responsive";

//styled comp

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: whitesmoke;
`;
const CartContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: white;
  border: none;
  border-bottom: 2px solid #888;
`;
const ImageContainer = styled.div`
  width: 100px;
  display: flex;
  height: 150px;
  object-fit: cover;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const DetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ${small({ flexDirection: "column" })}
`;
const ShadeSingle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${(props) => props.hexValue};
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
`;
const QuantityContainer = styled.div`
  margin-left: auto;

  min-width: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${small({ marginLeft: "0" })}
`;

const Button = styled.button`
  border: none;
  background-color: #232421;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  padding: 5px 15px;
`;

const Para = styled.p`
     margin: 0;
`;


const CartItem = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <OuterContainer>
      {cart.products.map((product, index) => {
        return (
          <>
            <CartContainer>
              <ImageContainer>
                <img
                  src={product.image_link}
                  width="150rem"
                  alt="product"
                  style={{ objectFit: "cover" }}
                />
              </ImageContainer>
              <DetailsContainer>
                <QuantityContainer>
                <div>
                  <h5>{product.name}</h5>
                </div>
                <div>
                  <Para>{product.brand}</Para>
                </div>
                {product.product_colors && (
                  <div>
                    color
                    <ShadeSingle
                      hexValue={product.product_colors}
                    ></ShadeSingle>
                  </div>
                )}
              </QuantityContainer>
              <QuantityContainer>
                <div>
                  <h6 style={{ display: "inline-block" }}>Quantity:</h6>
                  <h6 style={{ display: "inline-block" }}>
                    {product.quantity}
                  </h6>
                </div>
                <div>
                  <h4 style={{ marginLeft: "3.5rem", fontSize: "1.5rem" }}>
                    {product.quantity * product.price} $
                  </h4>
                </div>
                <div className="mx-auto">
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "removeItem",
                        itemNo: cart.products.indexOf(product),
                        product: product,
                      });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </QuantityContainer>
              </DetailsContainer>
            </CartContainer>
          </>
        );
      })}
    </OuterContainer>
  );
};

export default CartItem;
