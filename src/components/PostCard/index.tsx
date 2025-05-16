import { Link } from 'react-router-dom';
import { PostData } from './types';

export const PostCard = ({ post }: { post: PostData }) => {
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <article className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8">
      {featuredImage && (
        <img 
          src={featuredImage}
          alt={post.title.rendered}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link 
            to={`/post/${post.slug}`}
            className="block mt-2 hover:text-blue-600 transition-colors"
          >
            <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
        </div>
      </div>
    </article>
  );
};