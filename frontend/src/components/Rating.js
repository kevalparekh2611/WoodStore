import React from 'react';

function Rating(props) {

    const {rating, numReviews} = props;
    let full = parseInt(rating);
    let half = parseInt((rating*10)%10);
    var ratestar = [];
    for (let index = 0; index <  full ; index++) {
        ratestar.push(<span key={index} ><i className="fa fa-star"></i> </span>);
    }
    if(half >0){
        ratestar.push(<span key='6' ><i className="fa fa-star-half-o"></i> </span>)
    }
    
    return (
        <div>
            <div className="rating">
                {ratestar}
                <span> {numReviews} Reviews</span>
            </div>
        </div>
    );
}

export default Rating;