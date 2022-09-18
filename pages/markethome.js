import Link from 'next/link';
import React, {useState} from 'react';
import Navbar from './../components/Navbar'
import ShowSupply from '../components/showSupply';
import { mbutChange } from './../components/MarketNavbar';

export default function HomePG(){
    
    return(
        <>
        {!butPress=="false"? <h1>{butPress}</h1> : <h1>ITS NOT WORKING</h1>}
        

        <iframe class = "w-100 h-100 container-fluid" style={{ height: '100% !important', position: 'absolute' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.7555328168464!2d-79.44061707964451!3d43.88161648391172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4c478ee7a19%3A0x6448fbace9ccad2b!2zMzYwwrBraWRz!5e0!3m2!1sen!2sca!4v1663462193970!5m2!1sen!2sca" ></iframe>
        <MarketNavbar/>

        
        </>
    )
}