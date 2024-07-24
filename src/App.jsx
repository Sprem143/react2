import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import React from "react"
import './App.scss'
import '../src/Reusable/Footer.css'
import  OwlCarousel  from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Slider from './Slider';
function App() {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1000: {
        items: 4,
      }
    },
    nav: false,
    dots: true
  }

  return (
    <>
      <div className="container-fluid banner">
        <img src="static\images\banner.png" alt="" style={{ width: '100%' }} />
      </div>

      {/* ----------about us------------ */}
      <section className="aboutUs mt-4 pt-4  p-4">
        <div className="container-fluid">
          <div className="dc mb-4">
            <h1 className='fw-bold mb-4'>About Us - Bharti Eye Foundation</h1>
            <h3 style={{ fontFamily: 'system-ui' }}>ONE OF INDIA'S LEADING OPHTHALMOLOGISTS.</h3>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 mt-4">
              <p className='fs3'>Bharti Group of Eye Hospitals, a brainchild of Dr. Sudhank Bharti, started its journey way back in 1985. Dr. Bharti practised his specialization in Cornea, Cataract & Refractive Surgery in England with Dr. J. J. Kanski & R. Hitchings. On his return to India he founded Bharti Eye Foundation in 1985.
                An outstanding name in Ophthalmology across the country & abroad, Dr. Bharti had the privilege of starting for the first time in Delhi & NCR a number of high-tech centres in ophthalmic examination and surgeries which have been providing clinical services with state of the art technology, adopted worldwide. He had been an international investigator for NIDEK JAPAN. He has also presented over 50 original papers in various professional forums including AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS & DOS. For his outstanding contribution to the field of Ophthalmology, Dr. Bharti has been felicitated a number of times in India and abroad. Dr. Bharti has contributed 5 chapters in Ophthalmic textbooks and has been conducting instruction courses in ASCRS, ESCRS & AIOS for the past 15 years.</p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <img src="static\images\doctor.webp" alt="Doctor" className='doctor_img' />
              <div className="dc">
                <h1 className="text-danger fw-bold">Dr. S. Bharti</h1>
                <h3 className='text-danger' style={{ textAlign: 'center' }}>Founder & Chairman Bharti Eye Foundation & Bharti Group of Eye Hospitals</h3>
              </div>
            </div>
          </div>
          <b className='fs3'>Best Eye Hospital in Delhi -</b>
          <p className='fs3'>Bharti Eye Foundation is one of the best eye hospital in Delhi, India. It is a NABH accredited hospital known for its state-of-the-art facilities, experienced doctors, and eye care services. The eye foundation offers a wide range of eye treatments, including cataract surgery, LASIK surgery, glaucoma treatment, retina surgery, and many other eye services.</p>
        </div>
      </section>
      {/* -----------Know yoour eye--------------- */}
      <section className="knowYourEye p-4">
        <div className="container">
          <h2 className="text-center mt-4 mb-4">Know Your Eye</h2>
          <div className="row justify-content-around mt-4">
            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e1.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e2.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e3.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e4.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e5.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e6.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e7.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e8.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <h2 className='mt-4 mb-4 text-center'>Our Services</h2>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e9.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e10.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e11.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e12.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e13.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e14.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e15.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="box">
                <img src="static\images\e16.webp" alt="" />
                <div className="box-content">
                  <h3 className='title text-white'><a href=""><span className=' text-white'>The Eye</span></a></h3>
                  <span className="links">
                    <a href="" className='fs2'>Pupil, Sclere & Iris</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------our specilist--------- */}
      <section className="specilist mb-4">
        <h2 className='mt-4 mb-4  text-center'>Our Specialists</h2>
        <Carousel data-bs-theme="dark" className='mt-4 mb-4'>
          <Carousel.Item>
            <img
              className="d-block c_img w-100"
              src="static\images\c1.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block c_img w-100"
              src="static\images\c2.webp"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block c_img w-100"
              src="static\images\c4.webp"
              alt="Third slide"
            />
          </Carousel.Item>

        </Carousel>

      </section>

      {/* ---------our doctors------------- */}
      <section className="doctors p-4">
        <h2 className="text-center mt-4 mb-4">Our Doctors</h2>
        <div className="container-fluid mt-4">
          <div className="row team-row">
            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d1.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>

                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d2.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>

                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d3.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <h5 className="team-title">
                Dr. S. Barti
              </h5>
              <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
            </div>
          </div>

          <div className="row team-row">
            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d4.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d5.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d6.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>
          </div>

          <div className="row team-row">
            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d9.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d8.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img src="static\images\d9.webp" alt="" height='350px' width='100%' />
                  <div className="overlay">
                    <div className="team-details text-center">
                      <p>
                        Dr. Bharti has the credit to introduce for the first time in north India/ Delhi NCR region a number of state-of-the art technologies of the world as a boon for the needy. A veteran contributor to the Ophthalmological fraternity, he has been international investigator  for LASIK for Nidek, Japan, Presented over 50 original papers in AIOS, ASCRS, ESCRS, AAO, APAO, Korean SCRS and DOS. He has been presenting live surgeries on webcast worldwide.
                      </p>
                      <div className="socials mt-20">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25s" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-google" viewBox="0 0 16 16">
                          <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                        </svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                        </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="team-title">
                  Dr. S. Barti
                </h5>
                <span className='fs3'>"Director & Cief Consultant" <br /> "Cornea, Cataract & Refractive surgery"</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------Rating------------- */}
      <section className="rating mt-4 mb-4 dr">
        <span className='fs-3 fw-bold'>4.7</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className=" ms-4 bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className=" ms-2 bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className=" ms-2 bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className=" ms-2 bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" className="ms-2 bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
        </svg>
        <span className='fs2 ms-3 text-primary'>817 Google Reviews</span>
      </section>
      {/* sliding review */}
      <section className="slider p4 mt-4 mb-4">
        {/* <OwlCarousel className='owl-theme section' loop margin={20} autoplay {...options}>

          <div className="review item">
            <div className="review-img">
              <img src="static\images\r1.png" alt="" />
            </div>
          </div>

          <div className="review item">
            <div className="review-img">
              <img src="static\images\r2.png" alt="" />
            </div>
          </div>


          <div className="review item">
            <div className="review-img">
              <img src="static\images\r3.png" alt="" className="trust" />
            </div>
          </div>

          <div className="review item">
            <div className="review-img">
              <img src="static\images\r4.png" alt="" className="trust" />
            </div>
          </div>

          <div className="review item">
            <div className="review-img">
              <img src="static\images\r5.png" alt="" className="trust" />
            </div>
          </div>

          <div className="review item">
            <div className="review-img">
              <img src="static\images\r6.png" alt="" className="trust" />
            </div>
          </div>
        </OwlCarousel> */}

{/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}

<Slider/>



  <div className="dr">
    <button className='btn mt-4 fs2' style={{backgroundColor:'yellow' , width:'150px', fontWeight:'bolder'}}>Appointment</button>
  </div>
      </section>
      {/* -----------Contact us form-------- */}
      <section className="contact mt-4 mb-4 p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <h2 className='text-center mt-4 mb-4'>Contact Us</h2>
              <hr />
              <img src="static\images\Contact.webp" alt="Contact us" width="100%" />
            </div>
            <div className="col-lg-6 col-sm-12">
              <h2 className='text-center mt-4 mb-4'>Write To Us</h2>
              <hr />
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className='fs3 mt-2'>Full Name</Form.Label>
                  <Form.Control type="text" placeholder='Enter your name' />

                  <Form.Label className='fs3 mt-2'>Email</Form.Label>
                  <Form.Control type="email" placeholder='Enter email address' />

                  <Form.Label className='fs3 mt-2'>Phone Number</Form.Label>
                  <Form.Control type="Number" placeholder='Enter a valid mobile number' />
                  <Form.Group className="mb-3 fs3 mt-2" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form.Group>
                <button className='btn btn-primary' style={{ width: '150px', backgroundColor: 'navy' }}> Submit</button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
