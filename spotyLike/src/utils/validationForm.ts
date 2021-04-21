const emailReg = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
);

export function isValidEmail(email: string): boolean {
  if (!email || !emailReg.test(email)) {
    return false;
  } else {
    return true;
  }
}
