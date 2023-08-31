/**
 * A user object with a name, email, avatar and id
 * @typedef {Object} User
 * @property {string} name
 * @property {string} email
 * @property {string} avatar
 * @property {number} id
 */

/**
 * A support object with an url and text
 * @typedef {Object} Support
 * @property {string} url
 * @property {string} text
 */

/**
 * A response object from the fetch users API
 * @typedef {Object} FetchUsersResponse
 * @property {number} page
 * @property {number} per_page
 * @property {number} total
 * @property {number} total_pages
 * @property {Array<User>} data
 * @property {Support} support
 */

/**
 * An internal response object from the fetch users API
 * @typedef {Object} InternalFetchUsersResponse
 * @property {string} status
 * @property {string} message
 * @property {FetchUsersResponse} data
 */
