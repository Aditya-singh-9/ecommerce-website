import React from "react";
import { Box, Text, Image, Flex, flexbox } from "@chakra-ui/react";

const ProductCard = (props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      height="100%"
      p={{ base: 2, md: 4 }}
      maxW={{ base: "250px", md: "350px", lg: "450px" }}
      transition="0.3s"
      _hover={{ background: "#ddffff" }}
    >
      <Image
        src={props.product.img}
        alt={props.product.name}
        mb={4}
        objectFit="cover"
        height="240px"
        width="100%"
      />
      <Flex flexDirection="column">
        <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
          {props.product.name}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} mb={2}>
          ₹ {props.product.price}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} mb={4}>
          Rating: {props.product.ratings}
        </Text>
      </Flex>
    </Box>
  );
};

export default ProductCard;
