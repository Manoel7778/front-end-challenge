export interface FeaturedMedia {
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
}

export interface PostData {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: FeaturedMedia[];
  };
}

// Tipagem para os headers da resposta da API
export interface WPHeaders {
  'x-wp-total': string;
  'x-wp-totalpages': string;
}

// Tipagem estendida para as respostas da API
export interface ApiResponse<T> {
  data: T;
  headers: WPHeaders;
}