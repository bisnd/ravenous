const apiKey = "lZsUxXnOVHxSUYFkAoa2eVTP-dKLw_F9U_Xbdjxman_JwQThLZ9SK2OHlyHU4XOBbUazPWGpj_D0vbiJrjfIsGdpyRyfqE1G2PQmhqNI0jUZVBqEyVZiGOBIhXNDZnYx";

async function Yelp (location, term, sortingOption) {
    /* The base for the function was taken from the Yelp API documentation, inserting the three options (location, term and soprt-by) as well as the key and then substituting the values for constants */
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    try{
        const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${location}&term=${term}&sort_by=${sortingOption}`, options);
        if (response.ok) {
            const jsonResponse = await response.json(); // When I printed "jsonResponse" to the console it showed that it was an object with a "businesses" property, with a value of an array of objects (each object being a separate business)
            const businesses = jsonResponse.businesses; // Extracting the array of objects using the dot notation (object.property)

            return businesses.map(business =>({ // Mapping through the array of objects, and for each objects extracting only the information I need using as keys the same ones I had used for the mock business. The value is using dot notation to extract the various properties from the response. Also using the Yelp documentation to view a potential response (so that I can see the properties)
                id: business.id,
                image: business.image_url,
                name: business.name,
                address: business.location.address1, // Had initially forgotten the "location" property, so when testing with "console.log" (saving businesses.map to a variable and printing it), they all gave "undefined"
                city: business.location.city,
                state: business.location.state,
                zipcode: business.location.zip_code,
                category: business.categories[0].title, // Categories is in itself an array of objects, each object including an "alias" property and a "title" property, due to the design of Ravenous we will only take the "title" of one category (the first element of the array)
                rating: business.rating,
                reviewcount: business.review_count
            }))
        }
    } catch(error) {
        console.log(error);
    }
}

/* 
If wanted to extract ALL category names, as a single string:
(categories.map(category => category['title'])).toString()
*/

// Yelp('rome', 'pizza', 'best_match&limit=20')

export default Yelp;