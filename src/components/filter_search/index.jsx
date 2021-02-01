import React, { useEffect, useState } from "react";
import "./filter_search.scss";
export default function Index() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <form id="find">
            <div className="inner container-fluid ">
              <div className="all-field-wrapper">
                <div className="find_fast_part row">
                  <div className="col-md-2 col-xs-3">
                    <select className="form-control finds_select">
                      <option value="">Choose</option>
                      <option value="">One </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <select
                      className="form-control finds_select"
                      data-show-subtext="false"
                      data-live-search="true"
                    >
                      <option value="">Religion </option>
                      <option value="">Axetumic </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-1 col-xs-3 ">
                    <select className="form-control finds_select">
                      <option value="">From Height </option>
                      <option value="">2.2 '' </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-1 col-xs-3 ">
                    <select className="form-control finds_select">
                      <option value="">To Height </option>
                      <option value="">2.2 '' </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-1 col-xs-3 finds_select">
                    <select className="form-control">
                      <option value="">From Age </option>
                      <option value="">18 yrs </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-1 col-xs-3">
                    <select className="form-control finds_select">
                      <option value="">To Age </option>
                      <option value="">12 yrs </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-2 col-xs-3">
                    <select className="form-control finds_select">
                      <option value="">Country</option>
                      <option value="">Argentina uruguya </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-1 col-xs-3">
                    <select className="form-control finds_select">
                      <option value="">Status </option>
                      <option value="">Never Married </option>
                      <option value="">One </option>
                    </select>
                  </div>
                  <div className="col-md-1 col-xs-3 pull-right">
                    <input
                      className="btn btn-default btn-search"
                      type="submit"
                      value="Search"
                      name="Search"
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
