import React from "react";

function Business ({business}) {
    return (
        <div>
            <div>
                <img src={business.image} alt=""/>
            </div>
            <div>
                <h2>{business.name}</h2>
                <div>
                    <p>{business.address}</p>
                    <p>{business.city}</p>
                    <p>{`${business.state} ${business.zipcode}`}</p>
                </div>
                <div>
                    <h3>{business.category}</h3>
                    <h3>{business.rating}</h3>
                    <p>{business.reviewcount}</p>
                </div>
            </div>
        </div>
    )
};

export default Business;