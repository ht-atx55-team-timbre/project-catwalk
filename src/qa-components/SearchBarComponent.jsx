import React, { useState, useEffect } from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import SearchBar from "material-ui-search-bar";
import axios from 'axios';
import _ from 'underscore';
import API_KEY from '../config.js';
import Answers from './Answers.jsx';
import HelpfulQuestionHandler from './HelpfulAndReport/HelpfulQuestionHandler';
import AddQuestion from './AddQuestionAndAnswer/AddQuestion.jsx';
import sortingFunctions from './SortingFunctions.js';

const SearchBarComponent = () => {
  return (
    <SearchBar
      placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
    />
  )
};

export default SearchBarComponent;