import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.module.css';
import AuthContext from "../../Context/authContext";

const Cockpit = ( props ) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
        return () =>{
            console.log('Perform action before remove cockpit from view')
        }
    },[]);
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red );
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold );
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
                {
                    <button onClick={authContext.login}>{authContext.authenticated ? <span>LogOut</span> : <span>LogIn</span>}</button>
                }
        </div>
    );
};

export default React.memo(Cockpit);
