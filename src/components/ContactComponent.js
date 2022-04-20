import React, {Component} from 'react';
// import Button, Form, FormGroup, Label, Input, Col from 'reactstrap';
// FormFeedback helps us show error messages on form
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {


    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',

            // keeps track if these fields were touched or not
            // users entered anything or not
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // the inputs get set to this method onChange
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    // this method tracks whether a value has been input in the touched fields
    // because we are passing arguments other than event we need to wrap the
    // blur method in another function
    handleBlur = (field) => () => {
        this.setState({

            // spread syntax
            touched: {...this.state.touched, [field]: true}
        });
    }

    // the entire form gets set to this method onSubmit
    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1 Nucamp Way<br />
                            Seattle, WA 98001<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>

                {/* Controlled forms, ex 2: controlled form code */}
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">

                        {/* the entire form gets set to handleSubmit method onSubmit */}
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>

                                {/* className="col-md-10" is rendered the same way as col md={10} */}
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}

                                        invalid={errors.firstName}

                                        // anytime a user enters and moves away from the field
                                        // it will fire this event handler
                                        onBlur={this.handleBlur("firstName")}

                                        // each input also gets an onChange event handler
                                        // set to the method handleInputChange
                                        onChange={this.handleInputChange} />

                                    {/* this displays the error message beneath the inputs */}
                                    <FormFeedback>{errors.firstName}</FormFeedback>

                                </Col>
                            </FormGroup>

                            <FormGroup row>

                                {/* in html you use for = "sth" but since for is a loop
                                in JS, you have to use htmlFor  */}
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>

                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}

                                        invalid={errors.lastName}

                                        // anytime a user enters and moves away from the field
                                        // it will fire this event handler
                                        onBlur={this.handleBlur("lastName")}

                                        onChange={this.handleInputChange} />

                                    {/* this displays the error message beneath the inputs */}
                                    <FormFeedback>{errors.lastName}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>

                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}

                                        invalid={errors.phoneNum}

                                        // anytime a user enters and moves away from the field
                                        // it will fire this event handler
                                        onBlur={this.handleBlur("phoneNum")}

                                        onChange={this.handleInputChange} />

                                    {/* this displays the error message beneath the inputs */}
                                    <FormFeedback>{errors.phoneNum}</FormFeedback>

                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    {/* form input type needs type, name,
                                            id and placeholder */}
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"

                                        // to make it controlled we need to set the
                                        // value of each input to this state-- the
                                        // state property we defined before to hold this input
                                        value={this.state.email}

                                        invalid={errors.email}

                                        // anytime a user enters and moves away from the field
                                        // it will fire this event handler
                                        onBlur={this.handleBlur("email")}

                                        onChange={this.handleInputChange} />

                                    {/* this displays the error message beneath the inputs */}
                                    <FormFeedback>{errors.email}</FormFeedback>


                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                {/* instead of md= *a number* we have to use size and offset
                                 this will render out like: <div class="col-md-4 offset-md-2>*/}
                                <Col md={{size: 4, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"

                                                // checkbox is different from regular react form
                                                // input in that instead of value we use the checked
                                                // attribute
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="12"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>

                                {/* this will render out like this:
                                    <div class="col-md-10 offset-md-2"> */}
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                {/* controlled form code */}

            </div>
        );
    }
}

export default Contact;