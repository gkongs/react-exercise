import Subscribers from './components/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './components/Display';
import Views from './components/Views';
import Comments from './components/Comments';

function Redux() {
  return (
    <Provider store={store}>
      <div>
        <Subscribers />
        <Views />
        <Display />
        <Comments />
      </div>
    </Provider>
  );
}

export default Redux;
