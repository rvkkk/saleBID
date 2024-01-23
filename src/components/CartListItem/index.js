import {
  Box,
  Card,
  Image,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HeartIcon } from "../Icons";
import { routes } from "../../routes";
import Badge from "../Badge";
import Button from "../Button";
import ProductBuyCard from "../ProductBuyCard";
import ProductTimeClock from "../ProductTimeClock";
import { addToWishList, removeFromWishList } from "../../utils/wishList";
import { addNewWish, deleteFromWishList } from "../../utils/api/wishLists";
import { addOffer } from "../../utils/api/offers";
import { useDisclosure } from "@chakra-ui/react";

export default function CartListItem(props) {
  const [inWishList, setInWishList] = useState(false);
  const token = window.localStorage.getItem("token");
  const product = props.data;
  const { onOpen, onClose, isOpen } = useDisclosure();

  const addNewOffer = (price) => {
    addOffer(product._id, price)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const addWish = () => {
    if (token === null)
      addToWishList({
        product: {
          id: product._id,
          title: product.title,
          description: product.description,
          price: product.price,
          discount: product.discount,
          images: product.images,
          quantityLeft: product.quantityLeft,
          pin: product.pin,
        },
        amount: 1,
        size: "S",
        model: "1",
      })
        .then((res) => {
          setInWishList(true);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    else
      addNewWish({ productId: product._id, amount: 1, size: "S", model: "1" })
        .then((res) => {
          setInWishList(true);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const removeWish = () => {
    if (token === null)
      removeFromWishList({
        productId: product._id,
        size: "S",
        model: "1",
      })
        .then((res) => {
          setInWishList(false);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    else
      deleteFromWishList(product._id, "S", "1")
        .then((res) => {
          setInWishList(false);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const removeDecimal = (num) => {
    try {
      return num.toString().split(".")[0];
    } catch (err) {
      return num;
    }
  };

  return (
    <Box>
      <Card
        p="20px"
        borderRadius="30px"
        shadow="none"
        border="2px solid"
        borderColor="naturalLightest"
        _hover={{ shadow: "xl", border: "none" }}
        dir="rtl"
        cursor={"pointer"}
      >
        <Box>
          <Flex gap="4">
            <Box w="256px" h="187px" borderRadius="26px">
              <Image
                w="full"
                h="full"
                objectFit="cover"
                src={product.images && product.images[0]}
              />
            </Box>
            <Flex flex="1" flexDir="row" justifyContent="space-between">
              <Flex flex="1" flexDir="column" justifyContent="space-between">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box>
                    <Text
                      fontSize="20px"
                      letterSpacing="-0.01em"
                      lineHeight="23px"
                    >
                      {product.title}
                    </Text>
                    <Text
                      fontSize="17px"
                      letterSpacing="-0.01em"
                      lineHeight="23px"
                      color="naturalDarkest"
                    >
                      דגם GW0260G4
                    </Text>
                  </Box>
                  {product.openingPrice && (
                    <Box pb="6">
                      <Box transform="translateX(50px)">
                        <ProductTimeClock
                          date={product.startTime}
                          frame={product.timeFrame}
                        />
                      </Box>
                    </Box>
                  )}
                </Flex>
              </Flex>

              <Flex flex="1" flexDir="column" justifyContent="space-between">
                <Flex justifyContent="end" gap="4" alignItems="center">
                  {product.openingPrice && (
                    <Badge>
                      {product.offers ? product.offers.length : 0} הצעות
                    </Badge>
                  )}
                  <Tooltip
                    placement="top"
                    p="2"
                    border="1px solid transparent"
                    borderColor="naturalDark"
                    borderRadius="10px"
                    bg="white"
                    dir="rtl"
                    color="naturalDarkest"
                    label={!inWishList ? "הוסף למועדפים" : "הסר מהמועדפים"}
                  >
                    <IconButton
                      bg="white"
                      _hover={{bg: "white"}}
                      w="30px"
                      h="30px"
                      borderRadius="full"
                      fontSize="25"
                    >
                      {!inWishList ? (
                        <HeartIcon onClick={addWish} />
                      ) : (
                        <HeartIcon fill="#0738D2" onClick={removeWish} />
                      )}
                    </IconButton>
                  </Tooltip>
                </Flex>

                {product.currentPrice ? (
                  <Flex alignItems="end">
                    {product.winningPrice === 0 ? (
                      <>
                        <Box flex="1">
                          <Text fontSize="18px" color="naturalDark">
                            הצעה מובילה
                          </Text>
                          <Text
                            dir="rtl"
                            fontWeight="medium"
                            fontSize="24px"
                            lineHeight="30px"
                          >
                            ₪ {product.currentPrice}
                          </Text>
                        </Box>

                        <Popover
                          postion="relative"
                          zIndex={4}
                          id="offer"
                          className="addOffer"
                          placement="top"
                          isOpen={isOpen}
                          onOpen={onOpen}
                          onClose={onClose}
                          closeOnBlur={false}
                        >
                          <PopoverTrigger>
                            <Button
                              w="126px"
                              h="60px"
                              fontSize="18px"
                              lineHeight="20px"
                            >
                              הצע מחיר
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent
                            w="370px"
                            border="none"
                            px="4"
                            py="6"
                            pt="12"
                            boxShadow="md"
                            borderRadius="16px"
                          >
                            <PopoverBody border="none">
                              <ProductBuyCard
                                title="אשר את הצעתך"
                                value={product.price}
                                onClose={onClose}
                                addNewOffer={(price) => addNewOffer(price)}
                              />
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </>
                    ) : (
                      <>
                        <Box flex="1">
                          <Text fontSize="18px" color="naturalDark">
                            נמכר
                          </Text>
                          <Text
                            dir="rtl"
                            fontWeight="medium"
                            fontSize="24px"
                            lineHeight="30px"
                          >
                            ₪ {product.winningPrice}
                          </Text>
                        </Box>
                        <Button
                          w="126px"
                          h="60px"
                          fontSize="18px"
                          lineHeight="20px"
                          isDisabled
                        >
                          הצע מחיר
                        </Button>
                      </>
                    )}
                  </Flex>
                ) : (
                  <Flex alignItems="end">
                    <Box flex="1" alignItems="end">
                      <Text fontSize="18px" color="naturalDark">
                        מחיר
                      </Text>
                      <Text
                        dir="rtl"
                        fontWeight="medium"
                        fontSize="24px"
                        lineHeight="30px"
                      >{removeDecimal(
                          (product.price * (100 - product.discount)) / 100
                        )}{" "}
                        ₪    
                      </Text>
                    </Box>
                    <Button
                      w="126px"
                      h="60px"
                      fontSize="18px"
                      lineHeight="20px"
                      onClick={() =>
                        (window.location.href = product.openingPrice
                          ? routes.ProductPageAuction.path.replace(":id", "") +
                            product._id
                          : routes.ProductPage.path.replace(":id", "") +
                            product._id)
                      }
                    >
                      קנו עכשיו
                    </Button>
                  </Flex>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Card>
    </Box>
  );
}
