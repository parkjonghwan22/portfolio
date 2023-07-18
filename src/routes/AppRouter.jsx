import { Routes, Route } from 'react-router-dom'
import { Main } from '../pages/main/Main'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main/>} />
            </Routes>
        </>
    )
}