import renderer from 'react-test-renderer';
import Home from '../Home';
import Quotes from '../Quotes';
import Notfound from '../Notfound';
import CalculatorPage from '../Calculator';

describe('All components tests', () => {
  test('correct snapshot for ', () => {
    const tree = renderer.create(<CalculatorPage />);
    const test = tree.toJSON();
    expect(test).toMatchSnapshot();
  });
  test('correct snapshot for ', () => {
    const tree = renderer.create(<Notfound />);
    const test = tree.toJSON();
    expect(test).toMatchSnapshot();
  });
  test('correct snapshot for ', () => {
    const tree = renderer.create(<Home />);
    const test = tree.toJSON();
    expect(test).toMatchSnapshot();
  });
  test('correct snapshot for ', () => {
    const tree = renderer.create(<Quotes />);
    const test = tree.toJSON();
    expect(test).toMatchSnapshot();
  });
});
