interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
}

interface User {
  id: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string;
  profile_image: ProfileImage;
  links: UserLinks;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface PhotoLinks {
  self: string;
  html: string;
  download: string;
}

export interface Photo {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  current_user_collections: any[];
  urls: Urls;
  links: PhotoLinks;
}

export interface SearchResults {
  total: number;
  total_pages: number;
  results: Photo[];
}

export type FetchImages = (query: string, page: number) => Promise<Photo[]>;
