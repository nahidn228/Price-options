/* eslint-disable react/prop-types */
const Links = ({ route }) => {
  return (
    <div>
      <li className="mr-10 px-2 rounded hover:bg-yellow-500">
        <a href={route.path}> {route.name}</a>
      </li>
    </div>
  );
};

export default Links;
