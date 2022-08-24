export default class BadRequest extends Error {
  status = 400;
  name = 'BadRequest';
}
