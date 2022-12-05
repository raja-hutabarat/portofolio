const SideList = ({ title, items }) => {
  return (
    <ul className="sideList">
      <li className="bold">{title}</li>
      {items &&
        items.map((item) => (
          <li className="my-1" key={item.id}>
            {item.name}
          </li>
        ))}
    </ul>
  );
};

export default SideList;
