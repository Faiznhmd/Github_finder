import { useEffect, useState } from 'react';
import RepoItem from '../repos/RepoItem';

const RepoList = ({ repos_url }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(repos_url);
      const data = await response.json();
      setData(data);
    };
    fetchRepos();
  }, [repos_url]);
  return (
    <div className="rounded-lg shadow-lg card bg-base-100 ">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {data?.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
