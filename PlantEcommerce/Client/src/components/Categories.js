import React from "react";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import plants from "../Assets/img/Plant/gardning-plants/peace-lily.png";
import fplants from "../Assets/img/Plant/flowering-plants/miniature-rose.png";
import seeds from "../Assets/img/Seeds/Grass_seeds/mexican-grass.png";
import fertilizer from "../Assets/img/Fertilizer/guard-360.png";
import tools from "../Assets/img/Tools/watering-cane.png";
import { Heading } from "@chakra-ui/react";

const Categories = () => {
  return (
    <>
      <Heading
        as="h1"
        size="2xl"
        fontFamily="Montserrat, sans-serif"
        fontWeight="bold"
        textAlign="center"
        color="teal.500"
        textTransform="uppercase"
        letterSpacing="wide"
        my="3rem"
      >
        CATEGORY
      </Heading>
      <Grid
        templateRows="repeat(1, 0.5fr)"
        templateColumns="repeat(3,0.5fr)"
        gap="10"
        m="1rem"
        px="5%"
        display={{ base: "none", md: "grid" }}
      >
        <GridItem
          rowSpan={1}
          colSpan={1}
          position="relative"
          bg="tomato"
          _hover={{
            bg: "green",
            transform: "scale(1.025)",
            transition: "background-color 0.2s, transform 0.2s",
            zIndex: 2,
          }}
        >
          <Text color="white" fontSize="md" textAlign="center">
           Plants
          </Text>
          <Image src={fplants} height="100%" width="100%" objectFit="cover" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          position="relative"
          bg="tomato"
          // display="flex"
          _hover={{
            bg: "green",
            transform: "scale(1.025)",
            transition: "background-color 0.2s, transform 0.2s",
          }}
        >
            <Text color="white" fontSize="md" textAlign="center">
           Tools
          </Text>
          <Image src={tools} height="100%" width="100%" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          position="relative"
          bg="tomato"
          _hover={{
            bg: "green",
            transform: "scale(1.025)",
            transition: "background-color 0.2s, transform 0.2s",
          }}
        >
            <Text color="white" fontSize="md" textAlign="center">
           Seeds
          </Text>
          <Image src={seeds} height="100%" />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
          bg="tomato"
          _hover={{
            bg: "green",
            transform: "scale(1.025)",
            transition: "background-color 0.2s, transform 0.2s",
          }}
        >
            <Text color="white" fontSize="md" textAlign="center">
           Plants
          </Text>
          <Image src={plants} height="100%" />
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          position="relative"
          bg="tomato"
          _hover={{
            bg: "green",
            transform: "scale(1.025)",
            transition: "background-color 0.2s, transform 0.2s",
          }}
        >
            <Text color="black" fontSize="md" textAlign="center">
           Fertilizers
          </Text>
          <Image src={fertilizer} height="100%" />
        </GridItem>
      </Grid>
    </>
  );
};

export default Categories;
