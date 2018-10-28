import AppContainer from './container';
import { 
  load
} from './actions';

class Initializer extends AppContainer {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        load();
    }
}

export default Initializer;
