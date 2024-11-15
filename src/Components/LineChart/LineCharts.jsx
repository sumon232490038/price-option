import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const LineCharts = () => {
  // const studentData = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     physics: 75,
  //     chemistry: 82,
  //     math: 90,
  //   },
  // ];

  const data = [
    { name: "Page A", uv: 400, pv: 300, amt: 2400 },
    { name: "Page b", uv: 40, pv: 400, amt: 2400 },
    { name: "Page c", uv: 4, pv: 600, amt: 2400 },
    { name: "Page d", uv: 666, pv: 100, amt: 2400 },
  ];
  return (
    <div>
      <LineChart width={400} height={400} data={data}>
        <XAxis dataKey={name}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey="uv" stroke="red" />
        <Line dataKey="pv" stroke="green" />
      </LineChart>
    </div>
  );
};

export default LineCharts;
