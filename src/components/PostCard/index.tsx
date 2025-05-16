import { Link } from 'react-router-dom';
import { PostData } from './types';

interface PostCardProps {
  post: PostData;
}

export const PostCard = ({ post }: PostCardProps) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <article className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8 transition-transform hover:scale-105">
      {featuredImage && (
        <div className="relative h-48 w-full">
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link 
            to={`/post/${post.slug}`}
            className="block mt-2 hover:text-blue-600 transition-colors duration-200"
          >
            <h2 
              className="text-xl font-semibold text-gray-900"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </Link>
          <div 
            className="mt-3 text-gray-500 line-clamp-3"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        </div>
      </div>
    </article>
  );
};