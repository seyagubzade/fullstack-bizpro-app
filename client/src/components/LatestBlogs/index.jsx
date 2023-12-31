import React from 'react'
import "./styles.scss"

const LatestBlogs = () => {
  return (
    <div id='blog-section'>
         <div className="container">
      <div className="theme-title">
        <h2>OUR LATEST Blog</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>
      <div className="row ">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 p-12">
          <div className="single-news-item">
            <div className="img">
              <img src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg.webp" alt="Image" />
            </div>
            <div className="post">
              <h6>
                <a href="blog-details.html" className="tran3s">
                  Playback: Akufo-Addo speaks to the business community
                </a>
              </h6>
              <a href="blog-details.html">
                Posted by <span className="p-color">admin</span> at 04 Feb, 2017
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sagittis iaculis velit in tristique. Curabitur ac urna urna sed
                accumsan...{' '}
                <a href="blog-details.html" className="tran3s">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="single-news-item">
            <div className="img">
              <img src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg.webp" alt="Image" />
            </div>
            <div className="post">
              <h6>
                <a href="blog-details.html" className="tran3s">
                  Playback: Akufo-Addo speaks to the business community
                </a>
              </h6>
              <a href="blog-details.html">
                Posted by <span className="p-color">admin</span> at 04 Feb, 2017
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sagittis iaculis velit in tristique. Curabitur ac urna urna sed
                accumsan...{' '}
                <a href="blog-details.html" className="tran3s">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="single-news-item">
            <div className="img">
              <img src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg.webp" alt="Image" />
            </div>
            <div className="post">
              <h6>
                <a href="blog-details.html" className="tran3s">
                  Playback: Akufo-Addo speaks to the business community
                </a>
              </h6>
              <a href="blog-details.html">
                Posted by <span className="p-color">admin</span> at 04 Feb, 2017
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                sagittis iaculis velit in tristique. Curabitur ac urna urna sed
                accumsan...{' '}
                <a href="blog-details.html" className="tran3s">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default LatestBlogs