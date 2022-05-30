import React, { useState } from "react";
import Select from "../Select";
import AddFeedbackModal from "../Modals/AddFeedbackModal";
const SuggestionHeader = ({ suggestions }) => {
  return (
    <div className="feedback-header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img />
        </div>
        <div className="suggestions-info">
          <div style={{ margin: "0 10px", fontSize: "20px" }}>
            {suggestions.length}
          </div>
          <div style={{ fontSize: "20px" }}>suggestions</div>
        </div>
        <div>
          <Select />
        </div>
      </div>
      <div>
        <AddFeedbackModal />
      </div>
    </div>
  );
};

export default SuggestionHeader;
