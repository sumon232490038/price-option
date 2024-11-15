import PropTypes from "prop-types"; // ES6
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-sky-600 text-white m-5 text-center font-bold flex flex-col p-5 space-y-4 rounded-xl">
      <h1>
        <span className="text-7xl">${price}</span>
        <span className="text-2xl">/mon</span>
      </h1>
      <h1 className="text-4xl">{name}</h1>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-green-500 py-2 rounded w-full hover:bg-green-700">
        Buy
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
