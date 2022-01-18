import { connect } from 'react-redux';
import { addSubscriber } from '../redux/index';

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div>
      <h1> 구독자 수: {count}</h1>
      <button onClick={() => addSubscriber()} type="button">
        구독하기!
      </button>
    </div>
  );
};

const mapStateToProps = ({ subscribers }) => {
  return {
    count: subscribers.count,
  };
};

const mapDispatchToProps = {
  addSubscriber,
};
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
