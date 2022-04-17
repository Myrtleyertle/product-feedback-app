import {useContext, React} from "react";

const Header = () => {
  
  let suggCount = 0;
  
  return (
    <div className="d-flex info">
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
