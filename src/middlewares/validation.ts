import jwt from "jsonwebtoken";
export const ValidationToken = (token: string) => {
  const decoded = jwt.verify(
    token.replace("Bearer ", ""),
    process.env.SECRET_KEY
  );
  return decoded || null;
};
