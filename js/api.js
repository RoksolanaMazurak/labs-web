const BASE_URL = "http://localhost:5050/api";
const RESOURCE_URL = `${BASE_URL}/books`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams, {});
  } catch (error) {}
};

export const getAllBooks = async () => {
  const rawRes = await baseRequest({ method: "GET" });

  return rawRes.json();
};

export const postBook = (body) => baseRequest({ method: "POST", body });

export const editBook = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "POST", body });

export const deleteBook = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });
