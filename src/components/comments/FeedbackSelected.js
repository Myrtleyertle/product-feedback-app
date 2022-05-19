import React, {useContext} from 'react'
import { DataState } from '../../context/data/dataState'
const FeedbackSelected = () => {
  const selected = useContext(DataState)
  return (
    <div>FeedbackSelected</div>
  )
}

export default FeedbackSelected