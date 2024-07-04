import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Change to enzyme-adapter-react-17 if using React 17

configure({ adapter: new Adapter() });