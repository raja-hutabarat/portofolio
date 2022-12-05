const NavBarSocial = ({ link, fa }) => {
  return (
    <li>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <i className={fa}></i>
      </a>
    </li>
  );
};

export default NavBarSocial;
