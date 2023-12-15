import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminProfile.css'

const AdminProductsManage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Entering useEffect');
    const fetchData = async () => {
      try {
        console.log('Fetching data');
        const response = await axios.get('http://localhost:3000/admin/adminproductsmanage/644528c526df9c16c244b1fd');
        setData(response.data);
        setLoading(false);
        console.log('Data received:', response.data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
    console.log('Exiting useEffect');
  }, []); // Empty dependency array to fetch data only once on component mount

  return (
    <div className="sabkuch">
      <div className="expert-div flex justify-center">
        <img src="https://i.imgur.com/ujX2KRl.png" className="expert-banner" alt="expert" />
      </div>
      {
        loading ?
          (
            <div className="flex justify-center items-center h-32">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
            </div>
          )
          :
          (
            <div>
              {/* Add the layout and stylesheet links if necessary */}
              <div className="flex justify-content-center">
                <img
                  src="https://i.imgur.com/uc9EeQL.png"
                  style={{
                    width: '65%',
                    borderRadius: '4rem',
                    marginTop: '1rem',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                  alt="wellness"
                />
              </div>

              <ProductCategorySection category="Mindfulness Books" prod={prod} />

              <ProductCategorySection category="Stress Busters" prod={prod} />

              <ProductCategorySection category="Herbals" prod={prod} />

              <ProductCategorySection category="Sleepwell" prod={prod} />

              <ProductModal
                newProduct={newProduct}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />

              <div className="flex justify-content-center align-items-center px-5 mt-6">
                <div className="mt-4 text-center mb-4">
                  <button
                    className="btn btn-primary btn-lg profile-button"
                    type="button"
                    data-mdb-toggle="modal"
                    data-mdb-target="#exampleModal"
                  >
                    New Product
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => window.location.href = '/admin/adminprofile'}
                  className="btn btn-primary btn-lg ms-4"
                >
                  Back
                </button>
              </div>
            </div>
          )
      }
    </div>
  );
};

const ProductCategorySection = ({ category, prod }) => {
  return (
    <section className={`${category.toLowerCase()} section-p1`}>
      <div className="text-center container py-5">
        <h1 className="mb-5 green2 product-type">
          <strong style={{ fontFamily: 'Roboto, sans-serif' }}>{category}</strong>
        </h1>
      </div>
      <div className="row">
        {prod
          .filter((product) => product.Type === category)
          .map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 mb-4">
              {/* Add card component with product details */}
            </div>
          ))}
      </div>
    </section>
  );
};

const ProductModal = ({ newProduct, handleInputChange, handleSubmit }) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Create New Product
            </h5>
            <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {/* Modal Content Starts here */}
            <form noValidate className="validated-form" onSubmit={handleSubmit}>
              {/* Add form inputs for newProduct */}
            </form>
          </div>
          <div className="modal-footer" style={{ marginRight: '25%' }}>
            <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">
              Close
            </button>
            <button type="submit" form="create" className="btn btn-primary ms-6">
              Create Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdminProductsManage;
