import AppContainer from './container';
import { 
  load
} from './actions';

class Initializer extends AppContainer {
    componentDidMount() {
        load();
    }
}

export default Initializer;
