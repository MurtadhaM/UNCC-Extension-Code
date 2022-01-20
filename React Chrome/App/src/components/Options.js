import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Popup from './Popup.js';
import Foreground from './Foreground.js';
import Custom from './Custom.js';

function Options() {
    return (
        <Router>
            <div style={styles.container}>
                <div style={styles.nav_bar}>
                    <h1>Options</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Options</Link>
                            </li>
                            <li>
                                <Link to="/popup">Popup</Link>
                            </li>
                            <li>
                                <Link to="/foreground">Foreground</Link>
                            </li>
                            <li>
                                <Link to="/custom">Custom CSS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Switch>
                    <Route exact path="/popup">
                        <Popup />
                    </Route>
                    <Route exact path="/foreground">
                        <Foreground />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/options.html" />
                    </Route>
                    <Route exact path="/custom">
                        <Custom />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav_bar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50px',
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ccc'
  ,
        marginBottom: '50px'
    }
}

export default Options;