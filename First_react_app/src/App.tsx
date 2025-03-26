import { useEffect, useState } from "react";
import ApiClient from "./services/Api-client.";
import UserService, { User } from "./services/user-services";

export default function ProductList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteUser = (user: User) => {
    const originalusers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    ApiClient.delete("/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalusers);
    });
  };

  const addUser = () => {
    const originalusers = [...users];
    const newUser = { id: 0, name: "Yordanos" };
    setUsers([newUser, ...users]);

    ApiClient.post("/users", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalusers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    ApiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
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
    UserService
      .getAllUsers()
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
      <button className="btn btn-primary mx-3 mt-3 mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group list-group-flush">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
