import Link from 'next/link';
import Head from 'next/head';
import React, {useState} from 'react';
import * as database from "./../config/config.js"
import "./home.js"
import Script from 'next/script'
import HomePG from './home'

export default function Home() { 
  const [errorMessages, setErrorMessages] = useState({name: "null", message: ""});
  const [isSubmitted, setIsSubmitted] = useState (false);

  const handleSubmit = (event)=>{
      //Prevent page reload?
      event.preventDefault();

      var {uname, pass} = document.forms[0]; //random variables called uname and pass (not related to ones in data)

      const userData = database.shelterLogin.find((user)=> user.username === uname.value);

      if(userData){ //if user name exists
          if(userData.password !== pass.value){ //if incorrect password
              setErrorMessages({name: "pass", message: database.errors.epass});
          }
          else {
              setIsSubmitted(true); //correct password :D
          }
      }
      else {
          //usename not found
          setErrorMessages({name: "uname", message: database.errors.euname});
      }
  };

  const renderErrorMessage = (name) =>
      name === errorMessages.name && (
          <div>{errorMessages.message}</div> //REQUIRE CSS CLASS FOR ERROR :D 
      );

  //render the login form with html
  //LINDSAY LOTS OF CSS HERE!!!!! 
  const renderForm = (
      <div className = "shelter-form" class="center-container"> 
          <form onSubmit = {handleSubmit}>
              <div className = "input-container">
                  <input type = "text" name = "uname" placeholder = "Shelter" required />
                  {renderErrorMessage("uname")}
              </div>
              
              <div className = "input-container">
                  <input type = "text" for="password" name = "pass" placeholder = "Password" required/>
                  {renderErrorMessage("pass")}
              </div>
              <div className = "button-container">
                  <input type = "submit" value = "Login"/>
              </div>

          </form>
      </div>
  )
  
  const renderTabs = (
    <div class ="tabs">
      <button class="tab active">
        <div class="label">Shelter</div>
      </button>
      <button class="tab" id = "bMarket">
        <Link href = "/marketlog">
          <div class="label">Market</div>
        </Link>
      </button>
    </div>

  )


    return (
      <div className="container">
        <Head>
          <title>Loading Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main> 
          <div class="all-container" > 
            {renderTabs}
            <div class="flex-container">
                <div class="title">Login</div> 
                {isSubmitted? <Link href = '/home'>HOME</Link>: renderForm}
                
            </div>
          </div>

        </main>
      </div>
    )
  
}
