import React, {useState} from "react";
import {Table, Tabs, Layout} from "antd";

const {Header, Footer, Content} = Layout;
const {TabPane} = Tabs;

const CATEGORY = {
  OXYGEN: "oxygen",
  BEDS: "beds",
};

const CATEGORIES = [
  {
    id: CATEGORY.OXYGEN,
    label: "Oxygen",
  },
  {
    id: CATEGORY.BEDS,
    label: "Beds",
  },
];

const dummyData = [
  {
    key: "Bangalore",
    district: "Bangalore",
    state: "Karnataka",
    o2Demand: 200,
    o2Supply: 220,
    o2Gap: 20,
  },
  {
    key: "Delhi",
    district: "Delhi",
    state: "Delhi",
    o2Demand: 400,
    o2Supply: 370,
    o2Gap: -30,
  },
  {
    key: "Mumbai",
    district: "Mumbai",
    state: "Maharashtra",
    o2Demand: 350,
    o2Supply: 325,
    o2Gap: -25,
  },
];

const defaultSorter = (a, b) => {
  if (typeof a === "string") {
    return a.localeCompare(b);
  }

  // number
  return a - b;
};

const COLUMNS = [
  {
    title: "District",
    dataIndex: "district",
    key: "district",
    sorter: (a, b) => defaultSorter(a.district, b.district),
  },
  {
    title: "State",
    dataIndex: "state",
    key: "state",
    sorter: (a, b) => defaultSorter(a.state, b.state),
  },
  {
    title: "Projected O2 Demand",
    dataIndex: "o2Demand",
    key: "o2Demand",
    sorter: (a, b) => defaultSorter(a.o2Demand, b.o2Demand),
  },
  {
    title: "O2 Supply",
    dataIndex: "o2Supply",
    key: "o2Supply",
    sorter: (a, b) => defaultSorter(a.o2Supply, b.o2Supply),
  },
  {
    title: "O2 Gap",
    dataIndex: "o2Gap",
    key: "o2Gap",
    defaultSortOrder: "ascend",
    sorter: (a, b) => defaultSorter(a.o2Gap, b.o2Gap),
  },
];

const DataTable = () => {
  return <Table style={{overflowX: "auto"}} columns={COLUMNS} dataSource={dummyData} bordered />;
};

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0].id);

  return (
    <Layout>
      <Header>
        <h1 style={{color: "#fff"}}>Oxygen Tracker</h1>
      </Header>
      <Content style={{marginBlock: 20, marginLeft: 24, marginRight: 24}}>
        <Tabs defaultActiveKey={selectedCategory} onChange={(key) => setSelectedCategory(key)}>
          {CATEGORIES.map(({id, label}) => {
            return (
              <TabPane tab={label} key={id}>
                {id === CATEGORY.BEDS ? "Coming Soon" : <DataTable />}
              </TabPane>
            );
          })}
        </Tabs>
      </Content>
      <Footer>Note: The site is in progress. This isn't real data.</Footer>
    </Layout>
  );
};

export default Home;
