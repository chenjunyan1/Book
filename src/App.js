import './App.css';

// import React from "react"
// import React, { Suspense } from 'react';
import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const Home = lazy(() => import('./assembly/Home'));
const About = lazy(() => import('./assembly/About'));
const Book = lazy(() => import('./assembly/Book'));
const Consult = lazy(() => import('./assembly/Consult'));
const Recruit = lazy(() => import('./assembly/Recruit'));
const Donation = lazy(() => import('./assembly/Donation'));
const Null = lazy(() => import('./assembly/SonAssembly/Null'));

export default function App() {
  return (
    <div className="App">
       <Router>
          <div className="daohanglan">
            <Link to="/">主页</Link>
            <Link to="./About">关于</Link>
            <Link to="./Book">图书</Link>
            <Link to="./Consult">咨询</Link>
            <Link to="./Recruit">招募</Link>
            <Link to="./Donation">捐赠</Link>
          </div>
          <Suspense fallback={
            <header className="App-header">
                Loading...
                <img src="Img/loading.svg" className="App-logo" alt="logo" />
            </header>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Book" component={Book} />
                <Route path="/Consult" component={Consult} />
                <Route path="/Recruit" component={Recruit} />
                <Route path="/Donation" component={Donation} />
                <Route component={Null}/>
            </Switch>
          </Suspense>


        </Router>
        {/* <div className="dengdai">Loading...</div> */}
    </div>
 
  );
}

