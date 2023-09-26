// // import React, { Component } from 'react';
// // import './ContactUs.css';

// // class ContactForm extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       name: '',
// //       email: '',
// //       subject: '',
// //       message: '',
// //       messageSent: false,
// //     };
// //   }

// //   handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     this.setState({ [name]: value });
// //   };

// //   handleSubmit = (e) => {
// //     e.preventDefault();
// //     // You can add your form submission logic here
// //     // For example, you can use Axios or fetch to send the form data to a server
// //     // Once the form is submitted successfully, you can set messageSent to true
// //     this.setState({ messageSent: true });
// //   };

// //   render() {
// //     return (
// //       <section className="ftco-section">
// //         <div className="container">
// //           <div className="row justify-content-center">
// //             <div className="col-md-6 text-center mb-5">
// //               <h2 className="heading-section">Contact Us</h2>
// //             </div>
// //           </div>
// //           <div className="row justify-content-center">
// //             <div className="col-lg-10 col-md-12">
// //               <div className="wrapper">
// //                 <div className="row no-gutters">
// //                   <div className="col-md-7 d-flex align-items-stretch">
// //                     <div className="contact-wrap w-100 p-md-5 p-4">
// //                       <h3 className="mb-4">Get in touch</h3>
// //                       {this.state.messageSent ? (
// //                         <div className="mb-4">
// //                           Your message was sent, thank you!
// //                         </div>
// //                       ) : null}
// //                       <form
// //                         onSubmit={this.handleSubmit}
// //                         id="contactForm"
// //                         name="contactForm"
// //                       >
// //                         <div className="row">
// //                           <div className="col-md-6">
// //                             <div className="form-group">
// //                               <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 name="name"
// //                                 id="name"
// //                                 placeholder="Name"
// //                                 value={this.state.name}
// //                                 onChange={this.handleInputChange}
// //                                 required
// //                               />
// //                             </div>
// //                           </div>
// //                           <div className="col-md-6">
// //                             <div className="form-group">
// //                               <input
// //                                 type="email"
// //                                 className="form-control"
// //                                 name="email"
// //                                 id="email"
// //                                 placeholder="Email"
// //                                 value={this.state.email}
// //                                 onChange={this.handleInputChange}
// //                                 required
// //                               />
// //                             </div>
// //                           </div>
// //                           <div className="col-md-12">
// //                             <div className="form-group">
// //                               <input
// //                                 type="text"
// //                                 className="form-control"
// //                                 name="subject"
// //                                 id="subject"
// //                                 placeholder="Subject"
// //                                 value={this.state.subject}
// //                                 onChange={this.handleInputChange}
// //                                 required
// //                               />
// //                             </div>
// //                           </div>
// //                           <div className="col-md-12">
// //                             <div className="form-group">
// //                               <textarea
// //                                 name="message"
// //                                 className="form-control"
// //                                 id="message"
// //                                 cols="30"
// //                                 rows="7"
// //                                 placeholder="Message"
// //                                 value={this.state.message}
// //                                 onChange={this.handleInputChange}
// //                                 required
// //                               ></textarea>
// //                             </div>
// //                           </div>
// //                           <div className="col-md-12">
// //                             <div className="form-group">
// //                               <input
// //                                 type="submit"
// //                                 value="Send Message"
// //                                 className="btn btn-primary"
// //                               />
// //                               <div className="submitting"></div>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </form>
// //                     </div>
// //                   </div>
// //                   <div className="col-md-5 d-flex align-items-stretch">
// //                     <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
// //                       <h3 className="mb-4 mt-md-4">Contact us</h3>
// //                       <div className="dbox w-100 d-flex align-items-start">
// //                         <div className="icon d-flex align-items-center justify-content-center">
// //                           <span className="fa fa-map-marker"></span>
// //                         </div>
// //                         <div className="text pl-3">
// //                           <p>
// //                             <span>Address:</span> 198 West 21th Street, Suite
// //                             721 New York NY 10016
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="dbox w-100 d-flex align-items-center">
// //                         <div className="icon d-flex align-items-center justify-content-center">
// //                           <span className="fa fa-phone"></span>
// //                         </div>
// //                         <div className="text pl-3">
// //                           <p>
// //                             <span>Phone:</span>{' '}
// //                             <a href="tel://1234567920">+ 1235 2355 98</a>
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="dbox w-100 d-flex align-items-center">
// //                         <div className="icon d-flex align-items-center justify-content-center">
// //                           <span className="fa fa-paper-plane"></span>
// //                         </div>
// //                         <div className="text pl-3">
// //                           <p>
// //                             <span>Email:</span>{' '}
// //                             <a href="mailto:info@yoursite.com">
// //                               info@yoursite.com
// //                             </a>
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <div className="dbox w-100 d-flex align-items-center">
// //                         <div className="icon d-flex align-items-center justify-content-center">
// //                           <span className="fa fa-globe"></span>
// //                         </div>
// //                         <div className="text pl-3">
// //                           <p>
// //                             <span>Website</span> <a href="#">yoursite.com</a>
// //                           </p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }
// // }

// // export default ContactForm;
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import './ContactUs.css';

// function ContactUs() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_qe3p1g1',
//         'template_0spudco',
//         form.current,
//         'wy4fJBPVYWc5X8f6W'
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log('message sent');
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <div className="contact-us-container">
//       <form className="contact-form" ref={form} onSubmit={sendEmail}>
//         <header className="page-header">
//           <h1>Contact Us</h1>
//         </header>
//         <label className="form-label">Name</label>
//         <input className="form-input" type="text" name="user_name" />
//         <label className="form-label">Email</label>
//         <input className="form-input" type="email" name="user_email" />
//         <label className="form-label">Message</label>
//         <textarea className="form-textarea" name="message" />
//         <input className="form-submit" type="submit" value="Send" />
//       </form>
//     </div>
//   );
// }

// export default ContactUs;
