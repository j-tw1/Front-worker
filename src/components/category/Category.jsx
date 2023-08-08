import React from "react";


function Category() {
  return (
    <section className="categories-section pt-100 pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>Choisir votre Categorie</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-accounting" />
              <h3>Plombier</h3>
              <p>30 ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-graduation-cap" />
              <h3>Peintre</h3>
              <p>21 ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-wrench-and-screwdriver-in-cross" />
              <h3>Mecanique</h3>
              <p>28 ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-consultation" />
              <h3>Autre1 </h3>
              <p>12 ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-heart" />
              <h3>Autre2</h3>
              <p>35 ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3  col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-computer" />
              <h3>Autre3</h3>
              <p>40 ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-worker" />
              <h3>Autre4</h3>
              <p>10ouvrier</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <a href="job-list.html">
            <div className="category-card">
              <i className="flaticon-plumber" />
              <h3>Autre5</h3>
              <p>20 ouvrier</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}
export default Category;