import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
}

export default App
