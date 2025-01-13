import bcrypt from 'bcryptjs';

export const encryptData = async (data) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(data, salt);
};

export const generateToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

