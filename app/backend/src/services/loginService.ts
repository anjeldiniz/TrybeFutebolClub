// const { User } = require('../database/models');
// const { myToken } = require('../helpers/jwt');
// const { badRequest } = require('../helpers/errors');

// const checkUser = async (email, password) => {
//   const userEmail = await User.findOne({ where: { email } });
//   if (!userEmail || userEmail.password !== password) {
//     return badRequest('Invalid fields');
//   }
//   const token = myToken(email);
//   return token;
// };

// module.exports = {
//   checkUser,
// };
