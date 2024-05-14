import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Business.module.css';

function Business ({business}) {
    return (
        <div>
            <Card className={styles.card}>
                <Card.Img src={business.image} className={styles.restaurantImg}/>
                <Card.Title className={styles.restaurantName}>{business.name}</Card.Title>
                <Card.Body className={styles.restaurantInfo}>
                    <div className={styles.left}>
                        <Card.Text>{business.address}</Card.Text>
                        <Card.Text>{business.city}</Card.Text>
                        <Card.Text>{`${business.state} ${business.zipcode}`}</Card.Text>
                    </div>
                    <div className={styles.right}>
                        <Card.Text className={`${styles.golden} ${styles.uppercase}`}>{business.category}</Card.Text>
                        <Card.Text className={styles.golden}>{business.rating} stars</Card.Text>
                        <Card.Text>{business.reviewcount} reviews</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </div>
    )
};

export default Business;