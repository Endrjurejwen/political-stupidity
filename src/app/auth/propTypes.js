import { string, shape } from 'prop-types';

export const userType = shape({
  firstName: string,
  lastName: string,
  email: string,
  nick: string,
  id: string
});
