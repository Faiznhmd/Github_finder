import { useEffect, useContext } from 'react';
import Spinner from '../pages/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/Github/GitHubContext';

const UserResult = () => {
  const { user, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  //loading

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 ">
        {user.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResult;
