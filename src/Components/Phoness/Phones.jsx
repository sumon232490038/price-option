import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phonedata = data.data.data;
        const phonewithFakaData = phonedata.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonewithFakaData);
        setShow(false);
      });
  });

  return (
    <div>
      <h1 className="text-3xl">{phones.length}</h1>
      {show && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      <div className="w-11/12 mx-auto">
        <BarChart width={500} height={400} data={phones}>
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Phones;
