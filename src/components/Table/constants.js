const columns = [
  {
    title: "№",
    dataIndex: "key",
  },
  {
    title: "Точка погрузки",
    dataIndex: "pickUpPoint",
    key: "pickUpPoint",
  },
  {
    title: "Точка разгрузки",
    dataIndex: "dropPoint",
    key: "dropPoint",
  },
];

const paginationPosition = { position: ["bottomCenter"] };
const scrollOption = { x: true };

export { columns, paginationPosition, scrollOption };
