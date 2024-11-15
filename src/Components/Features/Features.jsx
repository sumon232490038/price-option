import PropTypes from "prop-types";
import { HiBadgeCheck } from "react-icons/hi";

const Features = ({ feature }) => {
  return (
    <div className="ml-5">
      <h1 className="flex items-center">
        <HiBadgeCheck className="text-green-400 mr-2" />
        {feature}
      </h1>
    </div>
  );
};
Features.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Features;
