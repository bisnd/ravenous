import React from "react";
import styles from "./BusinessList.module.css";
import Business from "../Business/Business";

function BusinessList ({businesses}) {
    return (
        <div>
            {businesses.map(business => (
                <Business business={business}/>
            ))}
        </div>
    )
};

export default BusinessList;