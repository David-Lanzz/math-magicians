import { NavLink } from 'react-router-dom';
import './styles/Links.css';

const Links = () => {
  const links = [
    { path: '/', text: 'home' },
    { path: 'calculator', text: 'calculator' },
    { path: 'quote', text: 'quote' },
  ];
  return (
    <ul className="ul">
      {links.map((element) => (
        <li key={element.text}>
          <NavLink
            className="anchor"
            to={element.path}
          >
            {element.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Links;
