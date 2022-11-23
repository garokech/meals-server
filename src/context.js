import {createContext, useState, React} from 'react';
export const MyContext = createContext();
import {React} from 'react';


function AppContext({children}){
    const [recipes, setRecipes] = useState([]);
    return <MyContext.Provider value={{ recipes, setRecipes }}>
        {children}
    </MyContext.Provider>
}

export default AppContext;