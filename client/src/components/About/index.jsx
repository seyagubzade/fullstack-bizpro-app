import React, { useEffect } from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { DeleteProduct, GetAllData } from "../../store/about/api_actions";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const About = () => {
  const dispatch = useDispatch();
  const { about, loading } = useSelector((state) => state.about);

  const getAll = async () => {
    dispatch(GetAllData());
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <section id="about-us">
      <div className="container">
        <div className="theme-title">
          <h2>ABOUT OUR BIZPRO</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="row">
          {loading ? (
            <p>Loading</p>
          ) : about ? (
            about.map((item, index) => {
              return (
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="single-about-content">
                    <div className="icon round-border tran3s">
                      <i className={item.icon} aria-hidden="true"></i>
                    </div>
                    <h5>
                      <a href="#" className="tran3s">
                        {item.title}
                      </a>
                    </h5>
                    <p>
                      {item.description}
                    </p>
                    <Link to={`/detail/${item._id}`} className="more tran3s hvr-bounce-to-right">
                      More Details
                    </Link>
                    <button className="delete-btn more tran3s hvr-bounce-to-right" onClick={()=>{
                        dispatch(DeleteProduct(item._id))
                        toast.success('Item deleted!')
                    }}>
                      Delete
                    </button>

                  </div>
                </div>
              );
            })
          ) : <p>Not Found</p>}
         
        </div>
      </div>
    </section>
  );
};

export default About;
