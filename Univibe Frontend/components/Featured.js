//Front page is here

import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

//background styling for the content
const Bg = styled.div`
  background-color: #222;
  color:#fff;
  padding: 50px 0;
`;

//style of the main title is changed 
const Title = styled.h1`
  margin:0;
  font-weight:normal;
  font-size:1.5rem;
  @media screen and (min-width: 768px) {
    font-size:3rem;
  }
`;

//description is styled here
const Desc = styled.p`
  color:#aaa;
  font-size:.8rem;
`;

// column is created for the paragraph and image section
const ColumnsWrapper = styled.div`
  display: grid;
// get 1 columns

  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }

// responsive is done here

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
  }
`;

//centering the main paragraph
const Column = styled.div`
  display: flex;
  align-items: center;
`;

//
const ButtonsWrapper = styled.div`
  display: flex;
  gap:10px;
  margin-top:25px;
`;


// Function for button (add to cart)
// on clicking the feature product is added
export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              {/* recieves product detail from the database */}
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              {/* Buttons are created */}

              <ButtonsWrapper>
                {/* Button for Read more */}

                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                {/* /Button for add to cart */}
                
                <Button white onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>

          <Column>
          {/* //image link for the first page */}
            <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt=""/>
          </Column>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}