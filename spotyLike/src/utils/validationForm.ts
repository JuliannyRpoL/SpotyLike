let emailReg = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
);
let passwordReg = new RegExp(
  '^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
  'g'
);

export function isValidEmail(email: string): boolean {
  if (!emailReg.test(email)) {
    return false;
  } else {
    return true;
  }
}

export function isValidPassword(password: string): boolean {
  if (!passwordReg.test(password)) {
    return false;
  } else {
    return true;
  }
}
