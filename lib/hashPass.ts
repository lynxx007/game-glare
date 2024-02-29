import bcrypt from "bcrypt";

export default async function hashPass(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function comparePass(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}
