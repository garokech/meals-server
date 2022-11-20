import {createContext, useState} from 'react';
export const MyContext = createContext();


function AppContext({children}){
    const [recipes, setRecipes] = useState([]);
    return <MyContext.Provider value={{ recipes, setRecipes }}>
        {children}
    </MyContext.Provider>
}

export default AppContext;