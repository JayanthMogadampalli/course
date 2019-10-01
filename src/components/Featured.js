import React from 'react';

const Featured=({match}) =>{
    let name=match.props.name;
    let topic=match.props.topic;


    return(
        <div className="main-content">
          <h2>{name}</h2>
          <p2>Introducing <strong>{name}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p2>  
        </div>
    );
}

export default Featured;
