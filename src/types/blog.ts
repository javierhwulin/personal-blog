export interface BlogFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  slug: string;
  readTime?: string;
}

export interface BlogPost {
  frontmatter: BlogFrontmatter;
  file: string;
  url?: string;
  default: any; // Astro's compiled content
}

export interface GlobImportResult {
  [key: string]: BlogPost;
} 