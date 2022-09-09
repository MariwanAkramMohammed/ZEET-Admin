import { FetchingStart, FetchingSucceed, FetchingError } from "./AdminSlice";
import { AddinStart, AddingSucceed, AddingError } from "./ProductSlice";

const URL = process.env.REACT_APP_API_URL;

export const login = async (dispatch, user) => {
  dispatch(FetchingStart());
  try {
    const res = await fetch(`${URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const AdminData = await res.json();
    dispatch(FetchingSucceed(AdminData));
  } catch (er) {
    dispatch(FetchingError());
  }
};

export const AddProduct = async (dispatch, product, Admin) => {
  dispatch(AddinStart());
  try {
    const res = await fetch(`${URL}/product`, {
      method: "POST",
      headers: {
        token: `Breare ${Admin.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const productSaved = await res.json();
    console.log(productSaved, "           <<<<< node");
    dispatch(AddingSucceed(productSaved));
  } catch (er) {
    dispatch(AddingError());
  }
};

export const upDateProduct = async (newProduct, id) => {
  console.log(newProduct, "             <>              ", id);
  try {
    const res = await fetch(`${URL}/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const back = res.json();
    console.log("done bro");
  } catch (er) {}
};

export const DeleteProduct = async (id) => {
  try {
    const res = await fetch(`${URL}/product/${id}`, {
      method: "DELETE",
    });
    const databack = await res.json();
    console.log(databack);
  } catch (er) {}
};
