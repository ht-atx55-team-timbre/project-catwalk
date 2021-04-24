import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  Paper,
  ButtonBase,
  GridList,
  GridListTile,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 100,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  image: {
    position: 'relative',
    width: '50px',
    height: '50px',
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      }
    },
  },
  focusVisible: {}
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     featured: true,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function StyleGallery({ images }) {
  const classes = useStyles();
  console.log('from StyleGallery', images);

  return (
    <div className={classes.root}>
      <GridList
        focusRipple
        cellHeight={'auto'}
        spacing={1}
        className={classes.gridList}
        focusVisibleClassName={classes.focusVisible}
        cols={1}
      >
        {images.photos.map((image) => (
          <GridListTile
            key={image.thumbnail_url}
            cols={image.featured ? 2 : 1}
            rows={image.featured ? 2 : 1}
            className={classes.image}
          >
            <img src={image.thumbnail_url} alt={image.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     // boxSizing: 'border-box',
//     // minWidth: '50px',
//     width: '100%',
//   },
  // image: {
  //   position: 'relative',
  //   width: '50px',
  //   height: '50px',
  //   '&:hover, &$focusVisible': {
  //     zIndex: 1,
  //     '& $imageBackdrop': {
  //       opacity: 0.15,
  //     }
  //   },
  // },
//   imageSelected: {
//     position: 'relative',
//     width: '40px',
//     height: '40px',
//     '&$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       }
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
  // imageSrc: {
  //   position: 'absolute',
  //   // width: '50px',
  //   // height: '50px',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center 40%',
  // },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.white,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   }
// }));

// export default function StyleGallery({ images }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       {images.photos.map((image, idx) => (
//         <ButtonBase
//           focusRipple
//           key={image.name}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{
//             width: '100%',
//           }}
//         >
//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${image.thumbnail_url})`,
//             }}
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton} id={idx}>
//           </span>
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }
