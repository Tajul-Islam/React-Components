import React from "react";

const withPropClass = (WrappedComponent, ClassName) =>{
    return props => (
        <div className={ClassName}>
            <WrappedComponent {...props}/>
        </div>
    )
};

export default withPropClass;
