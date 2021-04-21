import React, { useState } from 'react';
import API_KEY from '../config.js';
import axios from 'axios';

const ReportAnswer = ({ answer_id }) => {
  const [reportText, setReportText] = useState('Report');
  const [isClicked, setIsClicked] = useState(false);

  const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/qa/answers/${answer_id}/report`;
  const headersAndParams = {
    headers: { Authorization: API_KEY },
    params: { answer_id: answer_id }
  };

  const handleReport = (event) => {
    if (!isClicked) {
      axios.put(url, { report: true }, headersAndParams)
        .then(response => {
          setIsClicked(true);
          setReportText('Reported');
        })
        .catch(err => {
          console.log(err, 'error marking answer as reported');
        })
    } else {
      axios.put(url, { report: false }, headersAndParams)
        .then(response => {
          setIsClicked(false);
          setReportText('Report');
        })
        .catch(err => {
          console.log(err, 'error marking answer as unreported');
        })
    }
  }

  return(
    <u onClick={handleReport}>{reportText}</u>
  )
}

export default ReportAnswer;