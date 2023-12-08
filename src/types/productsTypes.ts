export type productTypes = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    count: number;
    rate: number;
  };
};
