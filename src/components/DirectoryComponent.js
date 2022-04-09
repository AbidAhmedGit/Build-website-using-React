import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component {
    // When a constructor is used, then it must take props as an argument.
    // Props is short for properties and is an important keyword and concept in React
    constructor(props) {
        // The first line of the constructor must be super(props);
        // so that the props are communicated to the base constructor in the parent component.
        super(props);
        // Then, if using state, this.state must be set equal to an object.
        // It is currently an empty object. We will fill it in next.
        this.state = {
            selectedCampsite: null
        };
    }

    // clicking a card selects a campsite
    onCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    render() {
        // This will pull the data for each campsite, using map, from the array you just added to the state.
        // Then it will go through each to format its name and description and render them all.
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* Pass the this.state.selectedCampsite object
                as props to this CampsiteInfo component, using the attribute name of "campsite".  */}
                <CampsiteInfo campsite={this.state.selectedCampsite} />

            </div>
        );
    }
}

export default Directory;