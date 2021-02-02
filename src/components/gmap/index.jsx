import React from "react";
import "./scss/gmap.scss";
export default function Index() {
  return (
    <section id="bg_map" className="mt-5">
      <h2 className="text-center"> Our Location</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14602.636421562689!2d90.4248877!3d23.7951506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4ccdb0e76f00d29!2shmweddings.com!5e0!3m2!1sen!2sbd!4v1609933898311!5m2!1sen!2sbd"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
