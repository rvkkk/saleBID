import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TrashIcon } from "../components/Icons";
import Layout from "../components/Layout";
import Order from "../components/Order";
import Loader from "../components/Loader";
import {
  getUserWishList,
  deleteWishList,
  deleteFromWishList,
} from "../utils/api/wishLists";
import {
  getWishList,
  removeFromWishList,
  clearWishList,
} from "../utils/wishList";

import { addCart } from "../utils/api/carts";
import { addToCart } from "../utils/cart";
import Button from "../components/Button";

export default function UserSettingsWishList() {
  const [loading, setLoading] = useState(false);
  const [wishList, setWishList] = useState([]);
  const [id, setId] = useState(0);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    setLoading(true);
    if (token !== null) {
      getUserWishList()
        .then((res) => {
          setWishList(res.wishList.products);
          setId(res.wishList.id);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      getWishList()
        .then((res) => {
          console.log(res);
          setWishList(res.products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [token]);

  const deleteAll = () => {
    setLoading(true);
    if (id !== 0) {
      deleteWishList(id)
        .then((res) => {
          console.log(res);
          setWishList([]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else
      clearWishList()
        .then((res) => {
          setWishList([]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
  };

  const removeProductFromWishList = (productId, size, model) => {
    if (token === null)
      removeFromWishList({ productId, size, model })
        .then((res) => {
          setWishList((prevWishList) => {
            const updatedProducts = prevWishList.filter(
              (w) =>
                !(
                  w.product.id === productId &&
                  w.size === size &&
                  w.model === model
                )
            );
            return updatedProducts;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    else
      deleteFromWishList(productId, size, model)
        .then((res) => {
          setWishList((prevWishList) => {
            const updatedProducts = prevWishList.filter(
              (w) =>
                !(
                  w.product.id === productId &&
                  w.size === size &&
                  w.model === model
                )
            );
            return updatedProducts;
          });
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const addProductToCart = (product, amount, size, model) => {
    if (token === null)
      addToCart({
        product: {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          discount: product.discount,
          images: product.images,
          quantityLeft: product.quantityLeft,
          pin: product.pin,
        },
        amount,
        size,
        model,
      })
        .then((res) => {
          console.log("added:", res);
        })
        .catch((err) => {
          console.log(err);
        });
    else
      addCart({ productId: product.id, amount, size, model })
        .then((res) => {
          console.log(res); //האם למחוק מרשימת המשאלות כאשר בסל?
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <Layout withSidebar>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box py="20" ml="15%">
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                fontSize="32px"
                lineHeight="20px"
                fontWeight="medium"
                color="naturalBlack"
              >
                רשימת המשאלות שלי
              </Text>
            </Flex>
            <Spacer h="5" />
            {wishList.length > 0 ? (
              <>
                <Flex flexDir="column" gap="4" mt="8">
                  {wishList.map((wish, key) => {
                    return (
                      <Order
                        key={key}
                        hideInfo
                        data={wish}
                        badge={
                          wish.product.quantityLeft > 0
                            ? "במלאי"
                            : "המוצר לא במלאי"
                        }
                        notificationBtn={wish.product.quantityLeft === 0}
                        badgeColor={
                          wish.product.quantityLeft > 0
                            ? "secendaryDarkest"
                            : "threeDark"
                        }
                        badgeBg={
                          wish.product.quantityLeft > 0
                            ? "secendaryLightest"
                            : "threeLight"
                        }
                        onDelete={() => {
                          //popap
                          const a = window.confirm(
                            "האם אתה בטוח שברצונך למחוק פריט זה מהרשימה?"
                          );
                          if (a) {
                            removeProductFromWishList(
                              wish.product.id,
                              wish.size,
                              wish.model
                            );
                          }
                        }}
                        addToCart={() => {
                          addProductToCart(
                            wish.product,
                            wish.amount,
                            wish.size,
                            wish.model
                          );
                        }}
                      />
                    );
                  })}
                </Flex>
                <Spacer h="20" />
                <Flex justifyContent="end">
                  <Button.TextButton
                    color="naturalBlack"
                    onClick={() => deleteAll()}
                    fontSize="16px"
                    lineHeight="18px"
                  >
                    <TrashIcon fill="#23263B" />
                    מחק הכל
                  </Button.TextButton>
                </Flex>
              </>
            ) : (
              <Flex alignItems="center" justifyContent="start">
                <Text fontSize="24px" fontWeight="light" color="naturalDarkest">
                  אין עדיין מוצרים ברשימת המשאלות שלך
                </Text>
              </Flex>
            )}
          </Box>
        </>
      )}
    </Layout>
  );
}
