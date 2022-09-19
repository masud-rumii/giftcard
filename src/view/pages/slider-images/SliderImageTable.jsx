import { Space, Table, Image, Switch } from "antd";

const data = [
  {
    id: 1,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1",
  },
  {
    id: 2,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1",
  },
  {
    id: 3,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1",
  },
  {
    id: 4,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1",
  },
  {
    id: 5,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.iUnleDpkbpOkxomYc_mctQHaEo%26pid%3DApi&f=1",
  },
];

export default function ImageTable() {
  const handelDelete = (id) => {
    console.log(id);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: "5%",
    },
    {
      title: "IMAGES",
      dataIndex: "image",
      key: "image",
      render: (_text, record) => <Image height={20} width={30} src={record.image} />,
    },
    {
      title: "SWITCH",

      render: () => <Switch />,
    },

    {
      title: "ACTIONS",
      key: "action",
      render: (_text, record) => (
        <Space size="middle">
          <a onClick={() => handelDelete(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
