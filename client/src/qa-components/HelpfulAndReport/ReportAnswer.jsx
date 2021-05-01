import React, { useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const ReportAnswer = ({ answer_id, track }) => {
  const [reportText, setReportText] = useState('Report');
  const [isClicked, setIsClicked] = useState(false);

  const url = `/qa/answers/${answer_id}/report`;
  const headersAndParams = {
    params: { answer_id: answer_id }
  };

  const handleReport = (e) => {
    track(e, 'Report Answer');
    if (!isClicked) {
      axios.put(url, { report: true }, headersAndParams)
        .then(response => {
          setIsClicked(true);
          setReportText('Reported');
        })
        .catch(err => {
          console.log(err, 'error marking answer as reported');
        })
    }
  }

  return(
    <Typography style={{color: "grey", fontSize: 12, cursor: "pointer"}}>
      &nbsp;&nbsp;&nbsp;
      <u onClick={handleReport}>{reportText}</u>
    </Typography>
  )
}

export default ReportAnswer;