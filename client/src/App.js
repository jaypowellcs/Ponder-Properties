import React, {useEffect} from 'react';
import './App.css';

import { useDispatch } from 'react-redux';
import { getPosts} from './actions/posts'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Pagination from './components/Pagination/Pagination';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UploadPage from './pages/UploadPage';
import ContactPage from './pages/ContactPage';


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='aboutus' element={<AboutPage/>} />
                <Route path='upload' element={<UploadPage />} />
                <Route path='contact' element={<ContactPage />} />
            </Routes>
            <Footer></Footer>
        </div>
    )
};

export default App; 