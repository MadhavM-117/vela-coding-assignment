/**
 * Get users from the API, with pagination
 * @param baseUrl
 * @param page {number}
 * @returns {Promise<{}>}
 */
export const getUsers = (baseUrl, page = 1) => {
  return fetch(`${baseUrl}/users` + new URLSearchParams({ page: `${page}` }))
    .then((response) => {
      return {
        status: "success",
        data: response.json(),
      };
    })
    .catch((error) => {
      console.error("There was an error while fetching the users.", error);
      return {
        status: "error",
        message: "There was an error while fetching the users.",
      };
    });
};
