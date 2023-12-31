import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetById } from "../../store/about/api_actions";
import "./styles.scss"

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentAbout, loading } = useSelector((state) => state.about);
  const getElementById = async () => {
    dispatch(GetById(id));
  };
  useEffect(() => {
    getElementById();
  }, [id]);
  return (
    <div className="detail">
      {loading ? (
        <p>Loading...</p>
      ) : currentAbout ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">{currentAbout?.title}</h2>
                </div>
                <div className="card-body">
                  <div className="icon round-border tran3s">
                    <i className={currentAbout.icon} aria-hidden="true"></i>
                  </div>
                  <p className="card-text">{currentAbout.description}</p>
                  <p className="card-text">
                    <small className="text-muted">Date: {currentAbout.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Detail;
