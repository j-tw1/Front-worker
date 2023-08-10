import React from "react";
import { useTranslation } from 'react-i18next';
import "./Signup.scss"

function Signup() {
  const [t, i18n ] = useTranslation();
  return ( 
        <>
            
            
            <div className="job-post ptb-100">
                <div className="container">
                <form className="job-post-from">
                    
                    <h2>S'inscrire</h2>
                    <h5>comme ouvrier</h5>                    
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInput1"
                            placeholder="Nom"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>PreNom</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInput1"
                            placeholder="PreNom"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Date de naissance</label>
                        <input
                            type="date"
                            className="form-control"
                            id="exampleInput1"
                            placeholder="Job Title or Keyword"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Genre</label>
                        <select className="form-control">
                            <option data-display="Job Type">Home</option>
                            <option value={1}>Femme</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>CIN</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInput1"
                            placeholder="CIN"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Ville</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInput5"
                            placeholder="e.g. Rabat"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Adresse</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInput5"
                            placeholder="Adresse"
                            required=""
                        />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInput1"
                            placeholder="e.g. hello@email.com"
                            required=""
                        />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Categorie</label>
                        <select className="form-control" >
                            <option data-display="Category">Plombier</option>
                            <option value={1}>Electrecity</option>
                            <option value={2}>Mecanique</option>
                            <option value={4}>Peintre</option>
                        </select>
                        
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Experience</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInput8"
                            placeholder="e.g. 1 year"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInput8"
                            placeholder="Mot de passe"
                            required=""
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                        <label>Confirmation de mot de passe</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInput8"
                            placeholder="Confirmation de mot de passe"
                            required=""
                        />
                        </div>
                    </div>

                    <hr className="mx-n3" />
                    <div class="col-md-6">
                        <div class="form-group">

                            <label>Upload CV</label>

                        </div>
                        <div class="file-select">
                            <input type="file" name="chooseFile" id="chooseFile"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">

                            <label>Upload Certificat</label>

                        </div>
                        <div class="file-select">
                            <input type="file" name="chooseFile" id="chooseFile"/>
                        </div>
                    </div>
                    <hr className="mx-n3" />
                    
                    <div className="col-md-12">
                        <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                            Description
                        </label>
                        <textarea
                            className="form-control description-area"
                            id="exampleFormControlTextarea1"
                            rows={6}
                            placeholder="Description"
                            required=""
                            defaultValue={""}
                        />
                        </div>
                    </div>
                    <div className="col-md-12 text-center">
                        <button type="submit" className="post-btn">
                        Rejoindre l'equipe
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>


    </>);
}
export default Signup;