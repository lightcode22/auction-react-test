import TableHead from "../TableHead";
import DataRow from "../DataRow";
import rows from "../mockData/tableRows.json";

export default function Table() {
  return (
    <div>
      <TableHead />

      {rows.map((row, index) => (
        <DataRow
          isEven={index % 2 == 0}
          rowHeader={row.title}
          rowTag={row.id}
          key={row.title}
        />
      ))}
    </div>
  );
}
