interface IRoutes{
  default: string,
  schedule: string,
  premium: string,
  profile: string,
  help: string,
  admin: string,
  create: string,
  update: string,
  notFound: string,
}

export const routes:IRoutes = {
  default: "/",
  schedule: "/schedule",
  premium: "/premium",
  profile: "/profile",
  help: "/help",
  admin: "/admin",
  create: "/create",
  update: "/update",
  notFound: "*",
};
