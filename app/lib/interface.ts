export interface BlogCard {
  postedAt: string;
  title: string;
  slug: string;
  coverImage: any;
  description: string;
}

export interface BlogPost extends BlogCard {
  editedAt: string;
  content: any;
}
