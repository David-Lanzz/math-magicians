import { NavLink } from 'react-router-dom';
import styles from './styles/Links.module.css';

const Links = () => {
  const links = [
    { path: '/', text: 'home' },
    { path: 'calculator', text: 'calculator' },
    { path: 'quote', text: 'quote' },
  ];
  return (
    <ul className={styles.ul}>
      {links.map((element) => (
        <li key={element.text}>
          <NavLink
            className={styles.anchor}
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
