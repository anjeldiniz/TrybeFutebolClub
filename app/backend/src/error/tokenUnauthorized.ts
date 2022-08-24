export default class tokenUnauthorized extends Error {
  status = 401;
  name = 'Incorrect token';
}