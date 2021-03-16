import {Button, Table, Tag, Space } from 'antd';
const { Column, ColumnGroup } = Table;

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    tags: ['nice', 'developer'],
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: tags=> (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue': 'green'
          if (tag === 'loser') {
            color = 'valcano'
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  }, 
  {
    title: '操作',
    dataIndex: 'caozuo',
    key: 'btn',
    render: (text, row, index) => (
      <>
        <Button type="link" onClick={() => btnClick(text, row, index)}>添加</Button>
        <Button type="link">删除</Button>
      </>
    )
  }
];

const btnClick = (text, row, index) => {
  console.log(text, row, index)
}

const Tables = () => {
  return <div>
      <h1>我是表格Tables</h1>
      <br/>
      <Table dataSource={dataSource} columns={columns} />
    </div>
}

export default Tables