// Validation functions for user inputs

// Email validation
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) return 'Invalid email format';
  return '';
};

// Password validation
export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordPattern.test(password)) {
    return 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character';
  }
  return '';
};

// Name validation
export const validateName = (name) => {
  if (!name) return 'Name is required';
  const namePattern = /^[a-zA-Z\s]{2,50}$/;
  if (!namePattern.test(name)) {
    return 'Name must be 2-50 characters and contain only letters';
  }
  return '';
};

// Phone validation
export const validatePhone = (phone) => {
  if (!phone) return 'Phone number is required';
  const phonePattern = /^\+?[\d\s-]{10,}$/;
  if (!phonePattern.test(phone)) {
    return 'Invalid phone number format';
  }
  return '';
};

// Form validation
export const validateForm = (formData) => {
  const errors = {};
  const emailError = validateEmail(formData.email);
  const passwordError = validatePassword(formData.password);
  const nameError = validateName(formData.name);
  const phoneError = validatePhone(formData.phone);

  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  if (nameError) errors.name = nameError;
  if (phoneError) errors.phone = phoneError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const isStrongPassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return password.length >= minLength && 
         hasUpperCase && 
         hasLowerCase && 
         hasNumbers && 
         hasSpecialChar;
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

export const sanitizeInput = (input) => {
  return input.trim().replace(/[<>]/g, '');
};
