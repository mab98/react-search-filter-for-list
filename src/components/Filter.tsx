import "../App.css";

interface FilterProp {
  data: any;
  setsearchText: React.Dispatch<React.SetStateAction<string>>;
  setFilteredData: React.Dispatch<React.SetStateAction<never[]>>;
}

const Filter: React.FC<FilterProp> = ({
  data,
  setsearchText,
  setFilteredData,
}) => {
  const filterData = (searchText: string) => {
    const filteredData = data.filter((item: any) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredData);
  };
  return (
    <input
      className="searchBar"
      placeholder="Search Name here"
      type="text"
      name="searchText"
      id="searchText"
      onChange={(e: any) => {
        setsearchText(e.target.value);
        filterData(e.target.value);
      }}
    />
  );
};

export default Filter;
