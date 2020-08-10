import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>

    { }

    <div className="row text-justify">
      <div className="col-md-4">
        <h2>Who are We?</h2>
        <p>We are the book lovers of Nepal. We have created this website so you can look at what your friends have to say about 
          a book. </p>
      </div>
      <div className="col-md-4">
        <h2>What is Our Aim?</h2>
        <p>Our aim to provide Nepalese people with platform to share their review about a boook.</p>
      </div>
    </div>

    <div  className="jumbotron">      
      <p>Welcome to the book review channel. Please be kind to eachother. <h2>Read              -->      Review-->           Repeat</h2></p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">View the Reviews&raquo;</Link></p>
         
    </div>

    {}

  </div>
);