export default class Unauthorized extends Error {
  status = 401;
  name = 'Incorrect email or password';
}
