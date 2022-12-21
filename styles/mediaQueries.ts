import { css } from 'styled-components';
import { breakpoints } from './breakpoints';

const mobile = `@media screen and (min-width: ${breakpoints.mobile})`;
const tablet = `@media screen and (min-width: ${breakpoints.tablet})`;
const desktop = `@media screen and (min-width: ${breakpoints.desktop})`;
const large = `@media screen and (min-width: ${breakpoints.large})`;
const hd = `@media screen and (min-width: ${breakpoints.hd})`;

console.log(mobile);

const mediaQueries = {
  mobile,
  tablet,
  desktop,
  large,
  hd,
};

export default mediaQueries;
