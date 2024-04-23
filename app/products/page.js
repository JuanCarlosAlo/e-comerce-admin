"use client";
import Layout from "@/components/Layout/Layout";
import { StyledButton, StyledLegendContainer, StyledProductContainer, StyledProductList } from "./styles";
import { useAllProducts } from "@/hooks/useAllProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const { products, error, isLoading } = useAllProducts();
  if (isLoading) return <p>...Loading</p>;

  return (<>
      <StyledButton href={"/products/new-product"}>New Product</StyledButton>
      <StyledProductList>
        <StyledLegendContainer>
          <p>Product Name</p>
          <p>Actions</p>
        </StyledLegendContainer>
        {products.map((product) => (
          <StyledProductContainer key={product._id}>
            <p>{product.name}</p>
            <div>
              <StyledButton href={"/products/edit/" + product._id}>
                <FontAwesomeIcon icon={faEdit} />
                 Edit
              </StyledButton>
              <StyledButton href={"/products/delete/" + product._id}>
              <FontAwesomeIcon icon={faTrash} />
                 Delete
              </StyledButton>
            </div>
          </StyledProductContainer>
        ))}
      </StyledProductList>
      </>
  );
}
