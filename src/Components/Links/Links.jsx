import PropTypes from "prop-types"; // ES6

const Links = ({ route }) => {
  return (
    <li className=" mr-10  text-black pl-5">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Links.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Links;
