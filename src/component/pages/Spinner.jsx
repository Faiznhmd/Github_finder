import { BallTriangle } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="w-100 mt-20 grid place-content-center">
      <BallTriangle color="white" width="180" />
    </div>
  );
};

export default Spinner;
