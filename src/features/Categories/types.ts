export type Category = {
  id: string;
  authorId: string;
  dateCreated: string;
  dateUpdated: string;
  label: string;
  color: string;
};

export type CategoriesResponse = {
  results: Category[];
  total: number;
};
