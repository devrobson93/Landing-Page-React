import React from "react";

 const Jumbotron = ()=>{
    return(
        <>
            
            <div className="jumbotron bg-light">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perferendis earum necessitatibus tempora consectetur laborum, voluptatum voluptas corrupti commodi odit asperiores quia harum corporis sapiente nemo unde. Alias, sit fugiat.</p>
                <h1 className="my-4"></h1>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <a className="btn btn-primary btn-lg" href="https://protectorabcn.es/" role="button">Call to Action!</a>
                </p>
            </div>
            
        </>
    );
    
};

export default Jumbotron;