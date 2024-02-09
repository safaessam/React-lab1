import React from "react"; 
import '@fortawesome/fontawesome-free/css/all.css';

class Footer extends  React.Component {
  render() {
    return (
      <footer className="bg-info text-white text-center p-4"   > 
      
        <div>
        
          <h2 className="display-4">contacts </h2>
          <div>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x mx-2"></i> 
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x mx-2"></i> 
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x mx-2"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x mx-2"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
