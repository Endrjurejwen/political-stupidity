/* eslint import/prefer-default-export: 0 */
import { string, shape } from 'prop-types';

export const userType = shape({
  firstName: string,
  lastName: string,
  id: string
});
