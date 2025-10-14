export interface SubLink {
  title: string;
  url: string;
}

export interface SearchResult {
  id: number;
  title: string;
  url: string;
  description: string;
  category: string;
  subLinks?: SubLink[];
}
