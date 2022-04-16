import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import About from './AboutComponent'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        // Arrow functions inherit the this of their parent scope
        const HomePage = () => {
            return (
                <Home
                    campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            );
        };

        const CampsiteWithId = ({match}) => {
            return (
                // the + sign makes the data type into number
                <CampsiteInfo
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };

        
        return (
            <div>
                <Header />
                <Switch>
                    {/* routes the user to home page */}
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />

                    {/* Integrate the AboutComponent into the single page application. */}
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />


                    {/* using attribute instead of render because you don't use state data */}
                    <Route exact path='/contactus' component={Contact} />

                    {/* The colon tells the router that what follows the slash is a parameter */}
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />

                    {/* default statement---> when there are no routing requests*/}
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;