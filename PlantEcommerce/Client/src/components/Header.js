import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Link,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../Assets/img/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../components/config";
import axios from "axios";
// import { getAllProducts } from "../../../Server/controller/product";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, Logout } = useContext(AuthContext);
  const { productCount } = useContext(AuthContext);
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  const { filteredData, setFilteredData } = useContext(AuthContext);

  const getAllProducts = async (cate) => {
    const payload = { category: cate };
    const res = await axios
      .post(`${API_ENDPOINT}/api/product/getProducts`, payload)
      .catch((err) => console.log(err));
    const data = res.data;
    console.log(data.products);
    setFilteredData(data.products);
    navigate("/search");
  };

  useEffect(() => {
    if (productCount > 0) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [productCount]);

  const buttonText = user ? "Logout" : "Login";
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Box bg="#00C554">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        mx="auto"
        py="2"
        px="4"
        wrap={isMobile ? "wrap" : "nowrap"}
      >
        <Flex align="center">
          <Link href="/">
            <HStack bg="inherit">
              <Image src={logo} maxW="170px" maxH="60px" objectFit="contain" />
            </HStack>
          </Link>
        </Flex>
        {!isMobile && <SearchBar />}
        <Flex align="center" justifyContent="space-between">
          {!isMobile && (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={Button}
                    variant="unstyled"
                    color="white"
                    fontSize="lg"
                    _hover={{ bg: "transparent" }}
                    mr="4"
                  >
                    Categories
                    <Icon as={FaAngleDown} boxSize={4} ml={1} />
                  </MenuButton>
                  {isOpen && (
                    <MenuList borderRadius="2px">
                      <MenuItem
                        as="a"
                        // href="/plant"
                        onClick={() => getAllProducts("Plants")}
                      >
                        Plant
                      </MenuItem>
                      <MenuItem
                        as="a"
                        // href="/fertilizer"
                        onClick={() => getAllProducts("Fertilizers")}
                      >
                        Fertilizer
                      </MenuItem>
                      <MenuItem
                        as="a"
                        // href="/seeds"
                        onClick={() => getAllProducts("Seeds")}
                      >
                        Seeds
                      </MenuItem>
                      <MenuItem
                        as="a"
                        // href="/planters"
                        onClick={() => getAllProducts("Planters")}
                      >
                        Planters
                      </MenuItem>
                      <MenuItem
                        as="a"
                        // href="/tools"
                        onClick={() => getAllProducts("Tool")}
                      >
                        gardning-Tools
                      </MenuItem>
                    </MenuList>
                  )}
                </>
              )}
            </Menu>
          )}
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="unstyled"
                  color="white"
                  fontSize="lg"
                  _hover={{ bg: "transparent" }}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Account
                  <Icon as={FaAngleDown} boxSize={4} ml={2} />
                </MenuButton>
                {isOpen && (
                  <MenuList borderRadius="2px">
                    <MenuItem as="a" href="/">
                      My Profile
                    </MenuItem>
                    <MenuItem as="a" href="/">
                      Products
                    </MenuItem>
                    <MenuItem as="a" href="/">
                      Favourite
                    </MenuItem>
                    <MenuItem as="a" href="/">
                      Delivered
                    </MenuItem>
                  </MenuList>
                )}
              </>
            )}
          </Menu>
          <Link href="/auth">
            <Button
              variant="solid"
              mx={2}
              colorScheme="white"
              fontSize="lg"
              borderRadius="2px"
              _hover={{ bg: "white", color: "#25c19b" }}
              _active={{ bg: "white", color: "#25c19b", boxShadow: "none" }}
              onClick={() => {
                if (user && buttonText === "Logout") {
                  Logout();
                }
              }}
            >
              {buttonText}
            </Button>
          </Link>
        </Flex>
        <Flex position="relative">
          {productCount > 0 ? (
            <div
              className={`cart-count ${animate ? "animate" : ""}`}
              aria-label="cart-count"
            >
              {productCount}
            </div>
          ) : null}
          <IconButton
            aria-label="shopping bag"
            icon={<BiShoppingBag fontSize="1.7rem" color="white" />}
            bg="transparent"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent", boxShadow: "none" }}
            onClick={() => navigate("/cart")}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
