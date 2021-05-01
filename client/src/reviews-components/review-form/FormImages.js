import React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const FormImages = ({ files }) => {

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={5} >
          {files.map((file) => (
            <GridListTile key={file}>
              <img src={file} alt={file}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Grid>
  )
}

export default FormImages;