import React, { useState } from 'react';
import Sresult from './Sresult';
const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    };
     return (
        <>
            <div className="container">
                <div className="row">
                        <div className='col-lg-12 col-xxl-12 col-md-12 mx-auto searchbar'>
                            <input type="text" placeholder='Search Anything' value={img} onChange={inputEvent} />
                            {img === "" ?  null :<Sresult name={img} />}
                        </div>
                </div>
            </div>
        </>
    );
};

export default Search;