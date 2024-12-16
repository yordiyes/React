import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export default function ProductList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (user: User) => {
    const originalusers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalusers); 
      });
  };

  useEffect(() => {
    //we can fetch datat using axios by two methods, one is using await async method which is like:-

    // const fetchUser = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     console.log(res);
    //     setUsers(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //     console.log(err)
    //   }
    // };
    // fetchUser();

    // the  second method is using .then like:-
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group list-group-flush">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
            {/* <button className="btn btn-outline-danger">Add</button> */}
          </li>
        ))}
      </ul>
    </>
  );
}
