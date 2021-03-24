import React, { useState, useEffect } from "react";

import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories, deleteCategory } from "./helper/adminapicall";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState({
    deletedCategory: "",
  });
  const { user, token } = isAuthenticated();
  const { deletedCategory } = values;

  const preload = () => {
    getCategories().then((data) => {
      //   alert(JSON.stringify(data));
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisCategory = (catagoryId) => {
    deleteCategory(catagoryId, user._id, token).then((data) => {
      console.log(data);
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
        setValues({
          deletedCategory: data.name,
        });
      }
    });
  };

  const successMessage = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3'>
          <div
            className='alert alert-success'
            style={{ display: deletedCategory ? "" : "none" }}
          >
            <h4>{deletedCategory} Deleted Successfully</h4>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title='Welcome admin' description='Manage products here'>
      <h2 className='mb-4'>All Categories:</h2>
      <Link className='btn btn-info' to={`/admin/dashboard`}>
        <span className=''>Admin Home</span>
      </Link>
      <div className='row'>
        <div className='col-12'>
          {successMessage()}
          <h2 className='text-center text-white my-3'>Total 3 products</h2>
          {categories.map((category, index) => {
            return (
              <div key={index} className='row text-center mb-2 '>
                <div className='col-4'>
                  <h3 className='text-white text-left'>{category.name}</h3>
                </div>
                <div className='col-4'>
                  <Link
                    className='btn btn-success'
                    to={`/admin/product/update/${category._id}`}
                  >
                    <span className='btn btn-success'>Edit</span>
                  </Link>
                </div>
                <div className='col-4'>
                  <button
                    onClick={() => {
                      deleteThisCategory(category._id);
                    }}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default ManageCategories;
