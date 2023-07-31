import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage.tsx'
import CharacterPage from './CharacterPage.tsx'

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/character/:id"} element={<CharacterPage/>}/>
        </Routes>
    )
}

export default App