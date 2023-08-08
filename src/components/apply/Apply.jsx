import React from "react";


function Apply() {
  return (
    <div className="job-info pt-100 pb-70">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="looking-job">
            <div className="media">
              <i className="flaticon-group align-self-start mr-3" />
              <div className="media-body">
                <h5 className="mt-0">Vous cherchez un ouvrier ?</h5>
                <p>
                Rejoignez-nous pour faire partie de la plate-forme
                </p>
                <a href="job-list.html">
                Rejoindre
                  <i className="bx bx-chevrons-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="recruiting-card">
            <div className="media">
              <i className="flaticon-resume align-self-start mr-3" />
              <div className="media-body">
                <h5 className="mt-0">Êtes-vous un ouvrier ?</h5>
                <p>
                Rejoignez-nous pour faire partie de la plate-forme
                </p>
                <a href="post-job.html">
                Rejoindre
                  <i className="bx bx-chevrons-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Apply;