import './BlogPosts.css';
import BootstrapCard from '../../componets/BootstrapCard/BootstrapCard';

const BlogPosts = () => {
  const posts = [
    { title: 'Blog Post Title 1', text: 'This is the supporting text for the first blog post.' },
    { title: 'Blog Post Title 2', text: 'This is the supporting text for the second blog post.' },
    // add more posts as needed
  ];
  return (
    
    <div>
<div className='carlyButton'>
<button >trescxklvjxdsvgkj</button>
</div>
      {posts.map((post, index) => (
        <BootstrapCard 
          key={index}
          title={post.title} 
          text={post.text} 
          
        />
        
      ))}
      
    </div>
  );
};

export default BlogPosts;
