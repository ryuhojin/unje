import { Route, Routes } from "react-router-dom";

import MainPage from '@/pages/home/MainPage'

const Root = () => {
    return <>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </>
}
export default Root;