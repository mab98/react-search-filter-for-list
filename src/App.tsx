import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Posts from "./components/Posts";

function App() {
  const [APIData, setAPIData] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredData, setFilteredData] = useState(APIData);

  useEffect(() => {
    const getUsersList = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
      );
      const data = await response.data;
      setAPIData(data);
    };
    getUsersList();
  }, []);

  return (
    <div className="body">
      <h3 className="header">React Search Filter</h3>
      <div className="content">
        <Filter
          data={APIData}
          setsearchText={setsearchText}
          setFilteredData={setFilteredData}
        />
        <Posts data={searchText === "" ? APIData : filteredData} />
      </div>
      <span className="footer">
        Thu Aug 19 2021 15:09:28 GMT+0500 (Pakistan Standard Time) {}
      </span>
    </div>
  );
}

export default App;
