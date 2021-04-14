
import './styles.css'
import Logo from '../../assets/logo.png'
import Header from '../../components/Header'
import puppeteer from 'puppeteer'
import { useEffect } from 'react'

export default function Welcome() {
    return (
        <div>
            <Header></Header>
            <div className="container-center">
                <img src={Logo} alt="" className="logo" />
                <div className="phrase-welcome">
                    <h3 className="ourtube">OurTube</h3>
                    <p>Watch videos like using Youtube</p>
                    <a href="/home">start</a>
                </div>
            </div>
        </div>
    )
}