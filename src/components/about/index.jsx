import React, { useState, useEffect } from "react";
import "./scss/about.scss";
export default function Index() {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    fetch("https://api.first.org/data/v1/countries")
      .then((res) => res.json())
      .then((value) => {
        setCountries(value.data);
      });
  }, []);
  
  let newCountry = Object.values(countries) || [];


  return (
    <div className="about-wrapper">
      <section className="about_hm">
        <div className="container text-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-md-12 ection-title text-center LV-content">
            <h2>About HM Weddings</h2>
            <p>
              Welcome to
              <strong>
                <a href="https://hmweddings.com/">HMWEDDINGS.COM</a>
              </strong>
              , we are the world&rsquo;s best international matrimony website.
              <a href="https://hmweddings.com/">
                <strong>HMWEDDINGS</strong>
              </a>
              is here, offering you the unrivalled matchmaking service to help
              you find your perfect life partner.
              <a href="https://hmweddings.com/">
                <strong>HMWEDDINGS</strong>
              </a>
              turned into a one-stop answer for individuals who are looking for
              their perfect life partner. Our committed team is continually
              endeavoring to help you find the right and perfect life partner
              for yourself.
            </p>
            <a href="https://www.hmweddings.com/home/about_us">Read More</a>
          </div>
        </div>
      </section>

      <section className="browse-matrimonial text-center">
        <div className=" display-area mt-5">
          <h2>Browse Matrimonial Profiles By Country</h2>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="myInput"
                  placeholder="Search Country"
                />
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="countries container-fluid">
                {newCountry.slice(0, 8).map((country) => (
                  <li key={country.country}>
                    <a href={`#${country.country}`}>{country.country}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="visitors_and_users" className="mt-5">
        <h2 className="text-center">Visitors & Users</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6 colorful_part_1 text-center">
              <h4> Visitor's</h4>
              <i className="fa fa-eye"></i>
              <p> 1400</p>
            </div>
            <div className="col-md-6 colorful_part_2 text-center colorful_part_2_right">
              <h4> User's</h4>
              <i className="fa fa-registered"></i>
              <p> 284</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 colorful_part_2 text-center colorful_part_2_left">
              <h4> Male User's</h4>
              <i className="fa fa-male"></i>
              <p> 123</p>
            </div>
            <div className="col-md-6 colorful_part_1 text-center ">
              <h4> Female User's</h4>
              <i className="fa fa-female"></i>
              <p> 146</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
