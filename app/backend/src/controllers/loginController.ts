// const { checkUser } = require('../services/loginService');
// const loginSchemas = require('../schemas/loginSchemas');

// const login = async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   const { error } = loginSchemas.validate({
//     email,
//     password,
//   });
//   if (error) {
//     return res.status(400).json({ message: error.message });
//   }
//   const token = await checkUser(email, password);
//   if (token.message) {
//     return res.status(token.status).json({ message: token.message });
//   }
//   res.status(200).json({ token });
// };

// module.exports = {
//   login,
// };
