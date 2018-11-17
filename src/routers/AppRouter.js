import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LecturerPage from '../components/LecturerPage';
import SchoolRegistrarPage from '../components/SchoolRegistrarPage'
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginSchoolRegistrarPage from '../components/LoginSchoolRegistrarPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch> {/* means if..elif..else , not if..if..if */}
                <Route path="/" component={LoginSchoolRegistrarPage} exact={true} />
                <Route path="/LecturerPage" component={LecturerPage} exact={true}/>
                <Route path="/SchoolRegistrarPage" component={SchoolRegistrarPage} exact={true}/>
                
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;