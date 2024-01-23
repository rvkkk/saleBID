import axios from "axios";

const baseURL = "https://storeapi.rabotenu.co/pages/";
const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const onTokenBroken = () => {
  localStorage.removeItem("token");
  //window.location.href = "/auth/login";
};



//articles



//user



//product

/*export const addProduct = (
  title,
  description,
  price,
  images,
  technicalDetails,
  productSpecs,
  category,
  brand,
  discount,
  video,
  quantityLeft,
  pin
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseURLAuth}create-product`,
        {
          title,
          description,
          price,
          images,
          technicalDetails,
          productSpecs,
          category,
          brand,
          discount,
          video,
          quantityLeft,
          pin,
        },
        headers
      )
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

export const addAProduct = (
  title,
  description,
  images,
  technicalDetails,
  productSpecs,
  category,
  brand,
  discount,
  video,
  openingPrice,
  productQuality,
  maxPrice,
  startTime,
  size,
  color,
  quantity,
  status,
  pin
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseURLAuth}create-auction-product`,
        {
            title,
            description,
            images,
            technicalDetails,
            productSpecs,
            category,
            brand,
            discount,
            video,
            openingPrice,
            productQuality,
            maxPrice,
            startTime,
            size,
            color,
            quantity,
            status,
            pin
        },
        headers
      )
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};*/

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}get-product/${id}`)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

export const searchProducts = (
  query = "",
  currentPage = "1",
  minPrice = 100,
  maxPrice = 7000,
  sortBy = ""
) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${baseURL}search-products?page=` +
          currentPage +
          "&minPrice=" +
          minPrice +
          "&maxPrice=" +
          maxPrice +
          "&sortBy=" +
          sortBy,
        {
          query,
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

export const getAllProducts = (
  currentPage = "1",
  minPrice = 100,
  maxPrice = 7000,
  sortBy = ""
) => {
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type") || "reg";
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${baseURL}get-all-products?page=` +
          currentPage +
          "&minPrice=" +
          minPrice +
          "&maxPrice=" +
          maxPrice +
          "&sortBy=" +
          sortBy +
          "&type=" +
          type
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

export const getSettings = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}user/settings`, headers)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

export const updateShippingSettings = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseURL}user/settings/shipping`, payload, headers)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};



export const getHomepage = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}homepage`)
      .then((res) => {
        console.log(res)
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

/*export const getUserLight = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseURL}user/light`, headers)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};






export const deleteOrder = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}user/settings/order?id=` + payload, {
        data: payload,
        ...headers,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};

export const deleteAllOrders = (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseURL}user/settings/orders`, { data: payload, ...headers })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        onTokenBroken();
        reject(err);
      });
  });
};
*/