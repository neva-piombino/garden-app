import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent"
import Avatar from "@material-ui/core/Avatar"

function PlantOfTheDay(props) {
    return(
        <div className="plantOfTheDay">
        <Card >
        <CardContent>
        <h2>Plant of the Day </h2>
        <h3>Common Name</h3>
            <h4>Scientific Name</h4>
            <Avatar className="plantOfTheDayImg" alt="Plant picture" src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_snake-plant-laurentii_variant_medium_upcycled_stonewash_1200x.jpg?v=1617726478" />
            <p>Interesting descriptive text regarding this super awesome plant of the day!</p>
        </CardContent>
        </Card>
            
        </div>
        

    );
}

export default PlantOfTheDay;