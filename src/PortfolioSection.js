import React from "react"; 
import Card from './Cards'; // Import the Card component

class YourComponent extends React.Component {
  render() {
    return (
      <div className="container" style={{ marginBottom: '30px', marginTop: '20px' }}>
        <h2 className="display-4 text-center" style={{ marginBottom: '30px', marginTop: '20px' }}>My Portfolio</h2>
        <div className="row">
          <div className="col-md-4">
            <Card title="UI-UX"/>
          </div>
          <div className="col-md-4">
            <Card title="TESTING "/>
          </div>
          <div className="col-md-4">
            <Card title="FULL-STACK"/>
          </div>
        </div>
      </div>
    );
  }
}

export default YourComponent;
