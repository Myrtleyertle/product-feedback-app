import React, { useState } from "react";
import Select from "../../components/Select";
import AddFeedbackModal from "../../pages/Modals/AddFeedbackModal";
import classes from './Suggestions.module.css'
const SuggestionHeader = ({ suggestions }) => {
  return (
      <div className={classes.suggestionsHeader}>
        <div>
          <div style={{ margin: "0 10px", fontSize: "20px" }}>
            {suggestions.length}
          </div>
          <div style={{ fontSize: "20px" }}>suggestions</div>
        </div>
        <div>
          <Select />
        </div>
        <AddFeedbackModal />
      </div>
  );
};

export default SuggestionHeader;
