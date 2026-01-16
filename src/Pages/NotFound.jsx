import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1 style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Oops! It looks like you're lost in the credits.
      </p>
      
      {/* Use the Link component for internal navigation */}
      <Link 
        to="/" 
        className="btn-primary" // Assuming you have a class for buttons
        style={{ 
            backgroundColor: '#F5C518', 
            color: '#000', 
            padding: '10px 20px', 
            textDecoration: 'none', 
            borderRadius: '5px',
            fontWeight: 'bold'
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;