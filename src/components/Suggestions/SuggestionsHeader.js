import React, {useContext} from 'react'
import Select from "../desktop/Select";
import { DataContext } from '../../context/data/dataContext';
import AddFeedbackModal from '../Modals/AddFeedbackModal';
const SuggestionHeader = () => {
  const dataContext = useContext(DataContext);
  const { show, newFeedback, handleClick, target, addFeedback } = dataContext;
  const titleRef = React.useRef();
  const descriptionRef = React.useRef();
  const statusRef = React.useRef();
  const categoryRef = React.useRef();

  
  return (
    <div className="feedback-header" >
        <img />
        <h3 className="suggestions-info">
          <span></span>
          suggestions
        </h3>
        <Select />
        <div>
         <AddFeedbackModal />
        </div>
      </div >               
  )
}

export default SuggestionHeader