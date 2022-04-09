import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {
    

    // renderCampsite(campsite) {
    //     return (
    //         <div className="col-md-5 m-1">
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         </div>
    //         )
    // }

    render() {
        if (this.props.campsite){
            return (
                <div className="row">

                </div>
            )
            }
        return (
            <div>
                {/* {this.renderSelectedCampsite(this.state.selectedCampsite)} */}
            </div>
            )
    }
}

export default CampsiteInfo;