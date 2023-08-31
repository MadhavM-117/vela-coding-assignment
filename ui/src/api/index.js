/**
 * Get users from the API, with pagination
 * @param baseUrl
 * @param page {number}
 * @returns {Promise<InternalFetchUsersResponse>}
 */
export const getUsers = (baseUrl, page = 1) => {
  return fetch(`${baseUrl}/users?` + new URLSearchParams({ page: `${page}` }))
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    })
    .then((json) => {
      return {
        status: "success",
        data: json,
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
