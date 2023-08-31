import React from "react";
import styles from "./UserTable.module.css";

/**
 *
 * @param users {Array<User>}
 * @param page {number
 * @param totalPages {number}
 * @param goToPage {function(number)}
 * @returns {JSX.Element}
 * @constructor
 */
export const UserTable = ({ users, page, totalPages, goToPage }) => {
  const goBack = page > 1;
  const goNext = page < totalPages;

  return (
    <div className={styles.container} data-testid="user-table">
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Email</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <img
                    src={user.avatar}
                    width={128}
                    height={128}
                    alt={user.name}
                  />{" "}
                </td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user["first_name"] + " " + user["last_name"]}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => goToPage(page - 1)}
          disabled={!goBack}
        >
          -
        </button>
        <div>
          Page {page} of {totalPages}
        </div>
        <button
          className={styles.button}
          onClick={() => goToPage(page + 1)}
          disabled={!goNext}
        >
          +
        </button>
      </div>
    </div>
  );
};
