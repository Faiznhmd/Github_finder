import { useState, useContext } from 'react';
import GitHubContext from '../../context/Github/GitHubContext';
import Alertcontext from '../../context/Alert/Alertcontext';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { user, SearchUsers, ClearUser } = useContext(GitHubContext);

  const { setAlert } = useContext(Alertcontext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please Enter SomeThing', 'error');
    } else {
      SearchUsers(text);
      setText('');
    }
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {user?.length > 0 && (
        <div>
          <button onClick={ClearUser} className="btn btn-ghost btn-lg">
            CLEAR
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
