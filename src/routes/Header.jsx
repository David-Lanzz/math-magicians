import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Headerpage = () => (
  <>
    <Header />
    <Outlet />
  </>
);
export default Headerpage;
