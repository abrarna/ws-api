import { useState, useEffect } from "react";
import axios from "axios";

import UserList from "./components/UserList";

export default function App() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUsers(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log("error:", err.message);
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <UserList users={users} isLoading={isLoading} error={error} />
    </div>
  );
}
