import React from 'react';

const Sresult = (props) => {
    const img = `https://source.unsplash.com/400x400/?${props.name}` ;
  return (
    <>
        <div className="container">
            <div className="row">
                <div className='col-lg-12 col-xxl-12 col-md-12'>
                    <figure>
                        <img src={img} className='img-fluid' alt="search" />
                    </figure>
                </div>
            </div>
        </div>  
    </>
  );
};

export default Sresult;
