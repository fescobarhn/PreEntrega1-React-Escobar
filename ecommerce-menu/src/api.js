// api.js

// URL base para JSONPlaceholder
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchItemsByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?userId=${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un error al obtener los items por categoría:", error);
    return [];
  }
}

export const fetchItemDetail = async (itemId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${itemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un error al obtener el detalle del item:", error);
    return null;
  }
}