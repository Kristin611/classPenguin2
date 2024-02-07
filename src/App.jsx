// import BootstrapCard from '../src/componets/BootstrapCard/BootstrapCard';
import './App.css'
import BlogPosts from './Pages/BlogPosts/BlogPosts.jsx';

function App() {
  
  const links = [
    { href: 'https://example1.com', label: 'Example 1' },
    { href: 'https://example2.com', label: 'Example 2' },
    // add more links as needed
  ];








  

  return (
    <div className="App">
      <BlogPosts 
        title="Blog Title" 
        text="Blog Text" 
        links={links} 
      />
    </div>
      );
    }

    export default App;