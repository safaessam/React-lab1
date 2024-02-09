import React from 'react';

class Card extends React.Component  {
  render() {
    const { title } = this.props;
    return (
      <div className="card text-white bg-Warning mb-3" style={{ width: '400px', height: '300px', backgroundColor: '#466f7d', color: 'Blak'}}>
     <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title text-center">{title}</h5>
        </div>
      </div>
    );
  }
}

export default Card;
