export const auth = {
  secret: String(process.env.JWT_SECRET),
  expires: "7 days",
};
