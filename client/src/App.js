import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthScreen from './auth/AuthScreen'
import HomeScreen from './homepage/HomeScreen'
import BookScreen from './books/BookScreen'
import CourseScreen from './courses/CourseScreen'
import AboutScreen from './about-us/AboutScreen'


function App() {

    return (
    <Router>
        <Switch>
            <Route path='/' exact component={HomeScreen}/>
            <Route path='/courses' exact component={CourseScreen}/>
            <Route path='/signup' exact component={AuthScreen}/>
            <Route path='/login' exact component={AuthScreen}/>
            <Route path='/books' exact component={BookScreen}/>
            <Route path='/about' exact component={AboutScreen}/>
        </Switch>
    </Router>
    );
}

export default App;
