// Simple database using localStorage for user management
import { validateEmail, validatePassword, validatePhone, validateName } from './utils/validation';

// Initialize users in localStorage if not exists
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify([]));
}

// OTP store with expiration
const otpStore = {};
const otpExpirationTime = 5 * 60 * 1000;  // 5 minutes

export const generateAndSendOTP = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
  otpStore[email] = { 
    otp, 
    expiration: Date.now() + otpExpirationTime 
  };
  return otp; // In a real app, you would send this via email/SMS
};

export const validateOTP = (email, inputOTP) => {
  const stored = otpStore[email];
  if (!stored) return { valid: false, message: 'OTP not found' };
  
  if (Date.now() > stored.expiration) {
    delete otpStore[email];
    return { valid: false, message: 'OTP has expired' };
  }
  
  if (stored.otp === parseInt(inputOTP)) {
    delete otpStore[email];
    return { valid: true, message: 'OTP validated successfully' };
  }
  
  return { valid: false, message: 'Invalid OTP' };
};

export const createUser = async (userData) => {
  const { email, password, name, phone } = userData;

  // Validate all fields
  const emailError = validateEmail(email);
  if (emailError) throw new Error(emailError);

  const passwordError = validatePassword(password);
  if (passwordError) throw new Error(passwordError);

  const nameError = validateName(name);
  if (nameError) throw new Error(nameError);

  const phoneError = validatePhone(phone);
  if (phoneError) throw new Error(phoneError);

  // Get existing users
  const users = JSON.parse(localStorage.getItem('users'));

  // Check if user already exists
  if (users.some(u => u.email === email)) {
    throw new Error('User with this email already exists');
  }

  // Store the new user
  const newUser = {
    id: Date.now(),
    email,
    password, // In a real app, you should hash the password
    name,
    phone,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  // Return user data without sensitive information
  const { password: _, ...safeUserData } = newUser;
  return safeUserData;
};

export const findUserByEmail = async (email) => {
  const users = JSON.parse(localStorage.getItem('users'));
  return users.find(user => user.email === email);
};

export const authenticateUser = async (email, password) => {
  // Validate email format
  const emailError = validateEmail(email);
  if (emailError) throw new Error(emailError);

  const user = await findUserByEmail(email);
  if (!user) {
    throw new Error('User not found');
  }

  if (user.password === password) { // In a real app, you should compare hashed passwords
    // Create a session
    const session = {
      userId: user.id,
      email: user.email,
      name: user.name,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem('currentSession', JSON.stringify(session));
    return { success: true, user: session };
  }

  throw new Error('Invalid password');
};

export const getCurrentUser = () => {
  const session = localStorage.getItem('currentSession');
  return session ? JSON.parse(session) : null;
};

export const logout = () => {
  localStorage.removeItem('currentSession');
};

export default {
  optimizeDeps: {
    include: []
  }
};