import React, { useState } from "react";
import PortalContext from "./PortalContext";
const PortalProvider = ({ children }) => {
    const [components, setComponents] = useState({});
    const addComponent = ({ name, component }) => {
        setComponents(prevComponents => ({
            ...prevComponents,
            [name]: component
        }));
    };
    return (React.createElement(PortalContext.Provider, { value: { addComponent } },
        React.createElement(React.Fragment, null, children),
        React.createElement(React.Fragment, null, Object.entries(components).map(([_name, Component]) => (Component)))));
};
export default PortalProvider;
