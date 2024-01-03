import { useContext } from 'react';
import { RxCross1 } from 'react-icons/rx';
import Alertcontext from '../../context/Alert/Alertcontext';

const Alert = () => {
  const { alert } = useContext(Alertcontext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2 bottom-0">
        {alert.type === 'error' && <RxCross1 />}
        <p className="p flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
};

export default Alert;
