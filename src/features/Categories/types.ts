export type Category = {
  id: string;
  authorId: string;
  // Will almost always be the athorId
  ownerId: string;
  closed: boolean;
  dateCreated: string;
  dateUpdated: string;
  title: string;
  description: string;
};

export type CategoriesResponse = {
  results: Category[];
  total: number;
};
