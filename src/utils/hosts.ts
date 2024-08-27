export const defaultIcon: string =
  "https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg";

interface IHost{
  name:string,
  icon: string
}

export const hosts:IHost[] = [
  {
    name: "Helen",
    icon: "https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg",
  },
  {
    name: "Anna",
    icon: "https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg",
  },
  {
    name: "Polina",
    icon: "https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg",
  },
  {
    name: "Maria",
    icon: "https://img.freepik.com/premium-photo/beauty-female-model-in-white-background_1000823-131188.jpg",
  },
];

export const findHostIcon= (name:string):string  => {
  const result = hosts.filter((host) => host.name === name);
  if (result.length) {
    return result[0].icon;
  } else {
    return defaultIcon;
  }
};
