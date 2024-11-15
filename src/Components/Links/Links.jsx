import PropTypes from "prop-types"; // ES6

const Links = ({ route }) => {
  return (
    <li className=" mr-10">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Links.propTypes = {
  route: PropTypes.array.isRequired,
};
export default Links;
