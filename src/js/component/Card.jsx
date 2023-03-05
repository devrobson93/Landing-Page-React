import React from "react";
import propTypes from "prop-types";
const Card = (props) =>{
  return(
    <>
   <div class="card text-center">
    <img src={props.image} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
    <a className="btn btn-primary btn-lg " href="https://protectorabcn.es/" role="button">Call to Action!</a>
    </div>
  </div>
    </>
  )
}


Card.prototypes= {
  image: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  buttonUrl: propTypes.string,
  buttonLabel: propTypes.string,
}
export default Card;
