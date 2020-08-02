import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    const [ idreceta, guardarIdreceta] = useState(null);

    return (  
        <ModalContext.Provider
            value={{
                guardarIdreceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}
 
export default ModalProvider;


