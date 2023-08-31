import React from "react";
import { getUsers } from "../api";
import { UserTable } from "./UserTable";

export const DisplayUsers = () => {
  const [users, setUsers] = React.useState(undefined);
  const [page, setPage] = React.useState(1);
  const [error, setError] = React.useState(undefined);

  const totalPages = users ? users["total_pages"] : 1;

  React.useEffect(() => {
    getUsers("https://reqres.in/api", page).then((r) => {
      if (r.status === "error") {
        setError(r.message);
        return;
      }

      setUsers(r.data);
    });

    return () => {
      setUsers(undefined);
      setError(undefined);
    };
  }, [page]);

  if (!users) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <UserTable
      users={users.data}
      page={page}
      totalPages={totalPages}
      goToPage={setPage}
    />
  );
};
