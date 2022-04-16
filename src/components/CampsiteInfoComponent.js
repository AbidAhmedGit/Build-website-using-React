import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCampsite({campsite}) {

    // Task 2: adding a card component to the CampsiteInfo component view to display more information
    // renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            )
}


function RenderComments({comments}) {

    // Implement a method inside the CampsiteInfo component named renderComments()
    // that takes the comments array stored in the campsite object as a parameter
    // -- i.e. renderComments(comments).
    // renderComments(comments) {
        if (comments){
            return(<div className="col-md-5 m-1">
                        <h4>Comments</h4>
                        {/* Use the array method map on the comments array.
                        You do not need to set up a variable to store the new array.
                        See the example in the Code Challenge from this week on constructing lists. */}
                        {comments.map
                            (comment => {
                                return (<div key={comment.id}>
                                            <p>{comment.text}</p>
                                            {/* the first line should show the comment text, and the second line should show the comment author and date.  */}
                                            <p>  -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                                        </div>)
                            })}
                    </div>)
        }
        return <div />
}





function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
}

export default CampsiteInfo;