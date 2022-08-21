// const jwt = require('jsonwebtoken');
// const { unauthorized } = require('./errors');

// const myToken = (data: any) => {
//   const token = jwt.sign({ data }, process.env.JWT_SECRET, {
//     algorithm: 'HS256',
//   });
//   return token;
// };

// // const validate = (token) => {
// //   if (!token) {
// //     unauthorized('Token not found');
// //   }
// //   try {
// //     const { data } = jwt.verify(token, process.env.JWT_SECRET);
// //     return data;
// //   } catch (error) {
// //     unauthorized('Expired or invalid token');
// //   }
// // };

// module.exports = {
//   myToken,
//   // validate,
// };
