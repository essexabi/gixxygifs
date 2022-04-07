import React, { Suspense } from "react";
import { Route } from "wouter";
import "./Styles/App.scss";

import { ModeContextProvider } from "context/ModeContext";
import { GifContextProvider } from "context/GifContext";
import { CategoriesContextProvider } from "context/CategoriesContext";
//import Home from "pages/Home";
import Search from "pages/Search";
import Detail from "pages/Detail";
import Category from "pages/Category";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const Home = React.lazy(() => import("pages/Home"));

function App() {

    return (
        <div className="App">
                <ModeContextProvider>
            <GifContextProvider>

                    <NavBar />
                    <Suspense fallback={null}>
                        <section className="App-content">
                            <CategoriesContextProvider>
                                <Route component={Home} path="/" />
                                <Route component={Home} path="/home" />
                                <Route
                                    component={Category}
                                    path="/category/:name"
                                />
                            </CategoriesContextProvider>
                            <Route component={Search} path="/search/:keyword" />
                            <Route component={Detail} path="/gif/:id" />
                            <Route component={()=><h1>404 ERROR</h1>} path="/404"/>
                        </section>
                    </Suspense>
            </GifContextProvider>

                </ModeContextProvider>

            <Footer />
        </div>
    );
}

export default App;
