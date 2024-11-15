import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceoptions = [
    {
      id: 1,
      name: "Basic Package",
      duration: "1 month",
      price: 30,
      features: [
        "Gym access",
        "Limited group classes",
        "Locker room access",
        "Free water station",
        "Shower facilities",
      ],
    },
    {
      id: 2,
      name: "Standard Package",
      duration: "3 months",
      price: 80,
      features: [
        "Gym access",
        "Unlimited group classes",
        "Locker room access",
        "Shower facilities",
        "Weekly trainer check-ins",
        "Access to sauna",
      ],
    },
    {
      id: 3,
      name: "Premium Package",
      duration: "6 months",
      price: 150,
      features: [
        "Gym access",
        "All group classes",
        "Locker room access",
        "Shower facilities",
        "Personal trainer",
        "Diet consultation",
        "Monthly fitness assessment",
        "Access to sauna and steam room",
        "Priority booking for classes",
        "Discount on sports drinks",
      ],
    },
  ];

  return (
    <div>
      <h1>best price in the town is true?</h1>
      <div className="grid md:grid-cols-3  m-10">
        {priceoptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
