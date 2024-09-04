import React from 'react';
import { Link } from "react-router-dom";
import './home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import feature1 from '../../assets/images/f1.png';
import feature2 from '../../assets/images/f2.png';
import feature3 from '../../assets/images/f3.png';
import feature4 from '../../assets/images/f4.png';
import feature5 from '../../assets/images/f5.png';
import feature6 from '../../assets/images/f6.png';

const Home = () => {

  const testimonials = [
    {
      quote: 'I feel... genuinely supported',
      author: '- Always Anonymous',
    },
    {
      quote: 'I feel... more relieved and relaxed about myself',
      author: '- Always Anonymous',
    },
    {
      quote: 'I feel... understood',
      author: '- Always Anonymous',
    },
    {
      quote: 'I feel... much calmer than before',
      author: '- Always Anonymous',
    },
    {
      quote: 'I feel... more motivated and strong',
      author: '- Always Anonymous',
    },
    {
      quote: 'I feel... lifted and empowered',
      author: '- Always Anonymous',
    },    
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <section className="landing">
      <p className="welcome">
        <strong style={{ fontFamily: "'Rajdhani', sans-serif" }}>
          Experience Tranquil, Embrace Wellness
        </strong>
      </p>
      <h2 style={{ fontWeight: 'bolder' }}>Need Someone to Talk to?</h2>
      <h1 style={{ fontWeight: 'bolder' }}>Our Counselors and Listeners Are Standing By</h1>
      <p className="tagline1" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
        Tranquil is an Anonymous, Safe, and Effortless Go-To Feel Better platform that
        smartly connects you to the right peers and counselors to talk to & feel better.
      </p>
      <p className="tagline2 mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Our mission is to spread over a million smiles and make the world happier and healthier.
      </p>
    </section>


    <div>
      <section id="slogan">
        <p className="slogan1">Your Smart Go-To Feel Better Platform</p>
        <p className="slogan2 mt-6 mb-6">
          Be yourself & share your real feelings, thoughts, & life stories with peers across the world!
        </p>
      </section>

      <section id="features">
        <div className="feature-box" data-aos="zoom-in">
          <img className="mx-auto my-auto" src={feature1} alt="First feature" />
          <h4 style={{ backgroundColor: '#fddde4', fontSize: '1.5rem' }}>Anonymous, Secure, Private</h4>
          <h6>Sharing your personal thoughts just got easier, safer, & fun</h6>
        </div>
        <div className="feature-box" data-aos="zoom-in">
          <img className="mx-auto my-auto" src={feature2} alt="Second feature" />
          <h4 style={{ backgroundColor: '#cdebbc', fontSize: '1.5rem' }}>Grow at Your Own Pace</h4>
          <h6>Explore self-help guides & growth paths for proven tips and advice on how to feel better</h6>
        </div>
        <div className="feature-box" data-aos="zoom-in">
          <img className="mx-auto my-auto" src={feature3} alt="Third feature" />
          <h4 style={{ backgroundColor: '#cdd4f8', fontSize: '1.5rem' }}>Talk to a friend before a therapist</h4>
          <h6>Hang out, share, & grow with smartly matched peers</h6>
        </div>
      </section>

      <section id="features">
        <div className="feature-box" data-aos="zoom-in">
          <img className="mx-auto my-auto" src={feature4} alt="Fourth feature" />
          <h4 style={{ backgroundColor: '#fddde4', fontSize: '1.5rem' }}>We're here for teens too</h4>
          <h6>We have listeners available especially for teens, so you can chat confidentially whenever you need to.</h6>
        </div>
        <div className="feature-box" data-aos="zoom-in">
          <img className="mx-auto my-auto" src={feature5} alt="Fifth feature" />
          <h4 style={{ backgroundColor: '#cdebbc', fontSize: '1.5rem' }}>Affordable Online Therapy</h4>
          <h6>Confidential online therapy & counseling with licensed therapists</h6>
        </div>
        <div className="feature-box" data-aos="zoom-in">
          <img className="mx-auto my-auto" src={feature6} alt="Sixth feature" />
          <h4 style={{ backgroundColor: '#cdd4f8', fontSize: '1.5rem' }}>Super-Savvy Intelligence</h4>
          <h6>Keep your mind happy with the right balance of empathy & technology</h6>
        </div>
      </section>
    </div>

    <section id="testimonial">
      <div className="mx-auto mb-4">
        <div className="text-3xl font-bold dark:text-gray-900">
          Thanks to Tranquil!
        </div>
      </div>

      <hr className="mt-6 mb-4" style={{ color: 'black' }} />
      
      <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="max-w-screen-md mx-auto text-center mb-6">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-gray-900">
              {testimonial.quote}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-gray-900">
                {testimonial.author}
              </cite>
            </div>
          </figcaption>
        </div>
      ))}
    </Slider>

    <hr className="mt-6 mb-8"style={{ color: 'black' }} />
    </section>


    <section className="mb-8"id="banner">
      <div className="banner1 mx-auto" data-aos="fade-up" data-aos-duration="3000">
        <div className="content1">
          <p className="line1">Inspire the World</p>
          <p className="line3 mt-4">
            <strong>Our Helpful Community makes you feel happy and contented</strong>
          </p>
          <p className="line2 mt-4">
            Here You can create posts, comment on the other users' posts and click on get inspired to provide them like
          </p>
          <p className="line3 mt-4 mb-8">
            <strong>Pour Your heart and relate to others.....find people like you</strong>
          </p>
          <Link to="/feed" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" id="therapy-button">
            Visit Inspire
          </Link>
        </div>
      </div>

     
      <div className="banner3 mx-auto" data-aos="fade-up" data-aos-duration="3000">
        <div className="content1">
          <p className="line1">Our Online Therapy</p>
          <p className="line3 mt-4">
            <strong>Our confidential online therapy & counseling is available for those aged 18+</strong>
          </p>
          <p className="line3 mt-4 mb-8">
            <strong>Want a little extra help? You can get ongoing support and guidance from a licensed therapist when you sign up for online therapy.</strong>
          </p>
          <Link to="/therapy" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" id="therapy-button">
            Start Online Therapy
          </Link>
        </div>
      </div>

      <div className="banner4 mx-auto" data-aos="fade-up" data-aos-duration="3000">
        <div className="content3">
          <p className="line1">Nurture your mental health, try our Wellness Products</p>
          <p className="line3 mt-4">
            <strong>Discover your personal growth and try out our products</strong>
          </p>
          <p className="line2 mt-4 mb-8">
            Each product is highly recommended by our experts and is available at discounted prices
          </p>
          <Link to="/products" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" id="therapy-button">
            Go to products
          </Link>
        </div>
      </div>
    </section>

    <section id="newsletter" className="section-p1 section-m1" style={{ backgroundImage: "url('/newsletter.png')" }} >
      <div className="newstext">
        <h4>Sign up for Newsletters</h4>
        <p>Mindful moments delivered to your inbox and <span>special offers!</span></p>
      </div>

      <form action="/" method="post" className="form">
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <button className="normal" type="submit" style={{ height: '50px' }}>
          Sign Up
        </button>
      </form>
    </section>
    </>
  )
}

export default Home