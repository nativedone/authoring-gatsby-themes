import merge from 'lodash.merge';
import { theme } from '@nativedone/gatsby-theme-events';

export default merge({}, theme, {
  colors: {
    primary: 'blue'
  }
});
