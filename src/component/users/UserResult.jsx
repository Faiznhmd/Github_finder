import { useEffect, useState } from 'react';
import Spinner from '../pages/Spinner';
const UserResult = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUser(data);
    setLoading(false);
  };

  //loading

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid:cols-3 md:grid:cols-2">
        {user.map((user) => (
          <h3 key={user}>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResult;
