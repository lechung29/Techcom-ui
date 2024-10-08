import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Layout } from "./layout";
import { TitleResolver } from "./layout"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<TitleResolver />}>
                    <Route element={<Layout />}>
                        <Route index element={<div>Hello ba con</div>} />
                        <Route path="about" element={<div>cc</div>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
};

export default App;
