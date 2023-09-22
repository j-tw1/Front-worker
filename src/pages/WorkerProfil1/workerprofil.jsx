import React , { useState }from 'react';
import './workerprofil.css';
import { addConsultationAPICall, getUserDetails , getWorker, getWorkerEmail } from '../../services/AuthService';
import { getOuvrierByEmail } from '../../services/OuvrierService';

function Workerprofil() {

const [workerfirstname , setFirstname] = useState('')

const [workerlastname , setLastname] = useState('')
  
  const [description, setDescription] = useState(''); // Add description state

  const [selectedOption, setSelectedOption] = useState(''); 

 const workerEmail = getWorkerEmail();

 const worker = getOuvrierByEmail(workerEmail);

 const client = getUserDetails();

 

   getOuvrierByEmail(workerEmail).then((response)=>{
        console.log(response.data);
        setFirstname(response.data.firstName) ;
        setLastname(response.data.lastName ) ;
        
  });

   console.log(worker) ;


  const handleReserverButton = (event) => {
    event.preventDefault();

   

    addConsultationAPICall(client.email ,workerEmail,description).then((response) => {

        console.log(response.data);

    })  .catch(error=>{
         console.error(error);
    })
  };
  return (
    <>
      <html style={{ fontSize: '16px' }} lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charSet="utf-8" />
          {/* Add other meta tags and links here */}
        </head>
        <body
        id='workerprofilbody'
          data-home-page="https://website5770203.nicepage.io/Copy-of-new3-1.html?version=3a178f21-486c-4b0a-b74b-972c0cfecada"
          data-home-page-title="Copy of new3 1"
          className="u-body u-xl-mode"
          data-lang="en"
        >
          <section
            className="u-align-center u-clearfix u-grey-90 u-section-1"
            id="carousel_0852"
          >
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
              <h4
                className="u-text u-text-1"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
              >
                A Bit About Me
              </h4>
              <h2
                className="u-text u-text-palette-2-base u-text-2"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="500"
              >
                Who Am I?
              </h2>
              <div
                className="u-border-5 u-border-palette-2-base u-image u-image-circle u-image-1"
                alt=""
                data-image-width="714"
                data-image-height="714"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
              ></div>
              <p
                className="u-text u-text-3"
                data-animation-name="customAnimationIn"
                data-animation-duration="1500"
                data-animation-delay="500"
              >
                Hi I'm  {workerfirstname} {workerlastname} . Click here to add your own text and edit me.
                ​Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>

              <div className="button-container">

              <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description-input" // Apply the description input style
        />
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="dropdown-select" // Apply the dropdown style
        >
          <option value="">Consultation type</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
        
        </div>
        <div className="button-container">
                <button type="button" className="btn btn-danger" onClick={handleReserverButton}>
                  Reserver
                </button>
                
              
                </div>
              </div>
                  
                
              
          
          </section>
        </body>
      </html>
    </>
  );
}

export default Workerprofil;

