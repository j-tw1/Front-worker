import React , { useState }from 'react';
import './workerprofil.css';
import { addConsultationAPICall, getUserDetails , getWorker, getWorkerEmail } from '../../services/AuthService';
import { getOuvrierByEmail } from '../../services/OuvrierService';

function Workerprofil() {

const [workerfirstname , setFirstname] = useState('')

const [workerlastname , setLastname] = useState('')
  
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

    // console.log(formData);

    addConsultationAPICall(client.email ,workerEmail).then((response) => {

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

              <div className="button-places">
                <button type="button" className="btn btn-danger" onClick={handleReserverButton}>
                  Reserver
                </button>
                <button type="button" className="btn btn-info">
                  Message
                </button>
              </div>

              <div className="u-expanded-width u-list u-list-1">
                <div className="u-repeater u-repeater-1">
                  {/* Repeat the following div for each item */}
                  <div
                    className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-border-10 u-border-no-left u-border-no-right u-border-no-top u-border-palette-2-base u-container-style u-list-item u-radius-22 u-repeater-item u-shape-round u-white u-list-item-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1500"
                    data-animation-delay="250"
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                      <span
                        className="u-file-icon u-icon u-text-palette-2-base u-icon-1"
                        data-animation-name="customAnimationIn"
                        data-animation-duration="1500"
                        data-animation-delay="750"
                      >
                        <img
                          src="https://www.creativefabrica.com/wp-content/uploads/2021/05/10/Job-Logo-Graphics-11872332-1-1-580x386.jpg"
                          alt=""
                        />
                      </span>
                      <h4 className="u-custom-font u-font-roboto-condensed u-text u-text-5">
                        Plombier
                      </h4>
                      <a
                        href="https://nicepage.site"
                        className="u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-border-no-left u-border-no-right u-border-no-top u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-style u-none u-radius-0 u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-top-left-radius-0 u-top-right-radius-0 u-btn-2"
                      >
                        more
                      </a>
                    </div>
                  </div>
                  <div
                    className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-border-10 u-border-no-left u-border-no-right u-border-no-top u-border-palette-2-base u-container-style u-list-item u-radius-22 u-repeater-item u-shape-round u-white u-list-item-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1500"
                    data-animation-delay="250"
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                      <span
                        className="u-file-icon u-icon u-text-palette-2-base u-icon-1"
                        data-animation-name="customAnimationIn"
                        data-animation-duration="1500"
                        data-animation-delay="750"
                      >
                        <img src="images/841589-7bfd0878.png" alt="" />
                      </span>
                      <h4 className="u-custom-font u-font-roboto-condensed u-text u-text-5">
                        Plombier
                      </h4>
                      <a
                        href="https://nicepage.site"
                        className="u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-border-no-left u-border-no-right u-border-no-top u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-style u-none u-radius-0 u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-top-left-radius-0 u-top-right-radius-0 u-btn-2"
                      >
                        more
                      </a>
                    </div>
                  </div>
                  <div
                    className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-border-10 u-border-no-left u-border-no-right u-border-no-top u-border-palette-2-base u-container-style u-list-item u-radius-22 u-repeater-item u-shape-round u-white u-list-item-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1500"
                    data-animation-delay="250"
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                      <span
                        className="u-file-icon u-icon u-text-palette-2-base u-icon-1"
                        data-animation-name="customAnimationIn"
                        data-animation-duration="1500"
                        data-animation-delay="750"
                      >
                        <img src="images/841589-7bfd0878.png" alt="" />
                      </span>
                      <h4 className="u-custom-font u-font-roboto-condensed u-text u-text-5">
                        Plombier
                      </h4>
                      <a
                        href="https://nicepage.site"
                        className="u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-border-no-left u-border-no-right u-border-no-top u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-style u-none u-radius-0 u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-top-left-radius-0 u-top-right-radius-0 u-btn-2"
                      >
                        more
                      </a>
                    </div>
                  </div>
                  <div
                    className="u-align-center-xs u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xl u-border-10 u-border-no-left u-border-no-right u-border-no-top u-border-palette-2-base u-container-style u-list-item u-radius-22 u-repeater-item u-shape-round u-white u-list-item-1"
                    data-animation-name="customAnimationIn"
                    data-animation-duration="1500"
                    data-animation-delay="250"
                  >
                    <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                      <span
                        className="u-file-icon u-icon u-text-palette-2-base u-icon-1"
                        data-animation-name="customAnimationIn"
                        data-animation-duration="1500"
                        data-animation-delay="750"
                      >
                        <img src="images/841589-7bfd0878.png" alt="" />
                      </span>
                      <h4 className="u-custom-font u-font-roboto-condensed u-text u-text-5">
                        Plombier
                      </h4>
                      <a
                        href="https://nicepage.site"
                        className="u-border-1 u-border-active-grey-70 u-border-black u-border-hover-grey-70 u-border-no-left u-border-no-right u-border-no-top u-bottom-left-radius-0 u-bottom-right-radius-0 u-btn u-button-style u-none u-radius-0 u-text-active-palette-2-base u-text-body-color u-text-hover-palette-2-base u-top-left-radius-0 u-top-right-radius-0 u-btn-2"
                      >
                        more
                      </a>
                    </div>
                  </div>
                  {/* Repeat the above div for each item */}
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>
    </>
  );
}

export default Workerprofil;

