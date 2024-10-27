import {
  CartesianGrid,
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = () => {
  const studentsMathMarks = [
    { studentId: 1, name: "Alice", math: 78, physics: 85, chemistry: 82 },
    { studentId: 2, name: "Bob", math: 85, physics: 79, chemistry: 88 },
    { studentId: 3, name: "Charlie", math: 92, physics: 91, chemistry: 89 },
    { studentId: 4, name: "David", math: 74, physics: 73, chemistry: 78 },
    { studentId: 5, name: "Eve", math: 88, physics: 90, chemistry: 84 },
    { studentId: 6, name: "Frank", math: 80, physics: 77, chemistry: 79 },
    { studentId: 7, name: "Grace", math: 91, physics: 85, chemistry: 92 },
    { studentId: 8, name: "Hannah", math: 76, physics: 80, chemistry: 75 },
    { studentId: 9, name: "Ian", math: 84, physics: 87, chemistry: 82 },
    { studentId: 10, name: "Jane", math: 89, physics: 92, chemistry: 90 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={studentsMathMarks}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="Marks" dataKey="math" stroke="#8884d8" />
        <Line type="Marks" dataKey="physics" stroke="yellow" />
        <Line type="Marks" dataKey="chemistry" stroke="red" />
      </LChart>
    </div>
  );
};

export default LineChart;
