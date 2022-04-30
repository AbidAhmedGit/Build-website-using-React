import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);


function RenderCampsite({campsite}) {

        // Task 2: adding a card component to the CampsiteInfo component view to display more information
        // renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>

                    <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />

                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>

                </Card>
            </div>
            );
}


function RenderComments({comments, postComment, campsiteId}) {

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
                    <span>
                        <CommentForm campsiteId={campsiteId} postComment={postComment} />
                    </span>
                </div>)
    }
    return <div />
}

function CampsiteInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments
                        comments={props.comments}
                        postComment={props.postComment}
                        campsiteId={props.campsite.id}
                    />
                </div>
            </div>
        );
    }
    return <div />;
}

class CommentForm extends Component{

    constructor(props) {
        super(props);


        this.state = {
            rating:1,
            author:"",
            comment:"",
            isModalOpen: false,

            // keeps track if these fields were touched or not
            // users entered anything or not
            touched: {
                rating: false,
                author: false,
                comment: false,

            }

        };

        // bind method
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.campsiteId, values.rating, values.author, values.text);
    }


    render(){
        return (
            <>

                {/* submit comment button toggles modal */}
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-pencil fa-lg" /> Submit Comment
                </Button>

                {/* add a new Modal to the application to host the form:  */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

                    <ModalBody>
                        <LocalForm onSubmit={this.handleSubmit}>

                            {/* rating field */}
                            <div className="form-group" >
                                <Label>Rating</Label>

                                {/* defaultValue attribute sets rating default to 1 */}
                                <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control" defaultValue={1}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>


                            </div>


                            {/* author field */}
                            <div className="form-group" >
                                <Label>Author</Label>
                                <Control.text model=".author" id="author" name="author"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                />

                            </div>

                            {/* comment text area field */}
                            <div className="form-group" >
                                <Label htmlFor="comment" >Your Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </div>

                            {/*  "Submit Comment" Button component that you set up in Task 1 must now toggle on this modal */}
                            <Button type="submit" value="submit" color="primary">Submit Comment</Button>

                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default CampsiteInfo;