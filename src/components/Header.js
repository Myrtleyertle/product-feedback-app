import {useContext, React} from "react";
import DataContext  from "../context/data/dataContext";
const Header = () => {
  const dataContext = useContext(DataContext);
  const { requests, sortByFilter, updateSortByFilter } = dataContext;
  
  let suggCount = 0;
  for (let i = 0; i < requests.length; i++) {
    if (requests[i]['status'] === 'suggestion') {
      suggCount += 1;
    }
  }
  return (
    <div className="notification-feedback">
      <img />
      <h3 className="suggestions-info">
        <span>{suggCount}</span>
        suggestions
      </h3>
      <div>
        <p>Sort By:</p>
        <select>
          <option>All</option>
          <option>UI</option>
          <option>UX</option>
          <option>Enchancement</option>
        </select>
      </div>
      <button>+ Add Feedback</button>
    </div>
  );
};

export default Header;
