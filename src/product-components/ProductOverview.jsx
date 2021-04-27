import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import API_KEY from '../config.js';

import ProductInfo from './ProductInfo.jsx';
import ProductDescription from './ProductDescription.jsx';
import ProductImages from './ProductImages.jsx';
import ProductStyles from './ProductStyles.jsx';
import ProductSpecs from './ProductSpecs.jsx';
import Cart from './AddToCart.jsx';

const ProductOverview = ({ product }) => {
  const [productData, setProductData] = useState(null);
  const [currentStyle, setCurrentStyle] = useState(null);
  const [styleData, setStyleData] = useState(null);
  const [initialPhoto, setInitialPhoto] = useState(0);

  const handleStyleChange = (newStyle, initial) => {
    setCurrentStyle(newStyle);
    setInitialPhoto(initial);
  }

  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${product}/styles`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        let styles = response.data.results;
        setStyleData(styles);
        for (var i = 0; i < styles.length; i++) {
          if (styles[i]['default?']) {
            setCurrentStyle(styles[i]);
          }
        }
      })
      .catch(err => console.error(err));

    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${product}`, {
        headers: {
          Authorization: API_KEY
        }
      })
      .then(response => {
        setProductData(response.data);
      })
      .catch(err => console.error(err));
  }, [product]);

  if (currentStyle && styleData) {
    return (
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item xs={12} md={8}>
            <ProductImages images={currentStyle} initial={initialPhoto} />
          </Grid>
          <Grid item container direction="row" xs={12} md={4}>
            <Grid item xs={12}>
              <ProductInfo
                product={productData}
                id={product}
                style={currentStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <ProductStyles
                styles={styleData}
                handleStyleChange={handleStyleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Cart currentStyle={currentStyle} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item sm={1} />
          <Grid item xs={12} sm={7}>
            <ProductDescription product={productData} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <ProductSpecs features={productData.features} />
          </Grid>
          <Grid item sm={1} />
        </Grid>
      </Grid>
    );
  } else {
    return <></>;
  }
}

export default ProductOverview;

// export default class ProductOverview extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//     this.state = {
//       productId: this.props.product,
//       productData: null,
//       currentStyle: null,
//       styleData: null,
//       initialPhoto: 0,
//       isUpdated: false,
//     }
//     this.handleStyleChange = this.handleStyleChange.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.state.productId}/styles`, {
//         headers: {
//           Authorization: API_KEY
//         }
//       })
//       .then(response => {
//         var styles = response.data.results;
//         this.setState({
//           styleData: styles,
//         });
//         for (var i = 0; i < styles.length; i++) {
//           if (styles[i]['default?']) {
//             this.setState({
//               currentStyle: styles[i]
//             })
//           }
//         }
//         if (this.state.styleData && this.state.productData) {
//           this.setState({ isUpdated: true });
//         }
//       })
//       .catch(err => console.error(err));

//     axios
//       .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${this.state.productId}`, {
//         headers: {
//           Authorization: API_KEY
//         }
//       })
//       .then(response => {
//         this.setState({
//           productData: response.data,
//         })
//         if (this.state.styleData && this.state.productData) {
//           this.setState({ isUpdated: true });
//         }
//       })
//       .catch(err => console.error(err));
//   }

//   handleStyleChange(newStyle, initial) {
//     this.setState({
//       currentStyle: newStyle,
//       initialPhoto: initial
//     })
//   }

//   render() {
//     if (this.state.isUpdated) {
//       return (
//         <Grid container direction="column">
//           <Grid container direction="row">
//             <Grid item xs={12} md={8}>
//               <ProductImages images={this.state.currentStyle} initial={this.state.initialPhoto} />
//             </Grid>
//             <Grid item container direction="row" xs={12} md={4}>
//               <Grid item xs={12}>
//                 <ProductInfo
//                   product={this.state.productData}
//                   id={this.state.productId}
//                   style={this.state.currentStyle}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <ProductStyles
//                   styles={this.state.styleData}
//                   handleStyleChange={this.handleStyleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Cart currentStyle={this.state.currentStyle} />
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid container direction="row">
//             <Grid item sm={1} />
//             <Grid item xs={12} sm={7}>
//               <ProductDescription product={this.state.productData} />
//             </Grid>
//             <Grid item xs={12} sm={3}>
//               <ProductSpecs features={this.state.productData.features} />
//             </Grid>
//             <Grid item sm={1} />
//           </Grid>
//         </Grid>
//       );
//     } else {
//       return <></>;
//     }
//   }
// }

// css positioner to allow the float for preview pictures
// global state should include current product,