import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FilteredProduct = () => {
  const { filteredData } = useContext(AuthContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m="1rem"
      minHeight="calc(100vh - 268px)"
      gap="1rem"
    >
      {filteredData.length ? (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px" m="1rem" px="5%">
          {filteredData &&
            filteredData.map((product, index) => (
              <Link to={`/product/${product._id}`} key={index}>
                <ProductCard key={index} product={product} />
              </Link>
            ))}
        </SimpleGrid>
      ) : (
        <Heading
          my="2rem"
          as="h1"
          size="2xl"
          fontFamily="Montserrat, sans-serif"
          fontWeight="bold"
          textAlign="center"
          color="teal.500"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Serach Something to View
        </Heading>
      )}
    </Box>
  );
};

export default FilteredProduct;
