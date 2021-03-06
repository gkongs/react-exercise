import { useState } from 'react';
import { connect } from 'react-redux';
import { addView } from '../redux/index';

const Views = ({ count, addView }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1> 조회 수:{count}</h1>
      <input value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => addView(number)} type="button">
        조회하기!
      </button>
    </div>
  );
};

const mapStateToProps = ({ views }) => {
  return {
    count: views.count,
  };
};

const mapDispatchToProps = {
  addView: number => addView(number),
};
export default connect(mapStateToProps, mapDispatchToProps)(Views);
