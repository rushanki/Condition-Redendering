import React, { useState } from "react";

import ProdCard from "./ProdCard";
import { products, electronics, lifestyle, fashion, laptop } from "./Product";

const CondRend2 = () => {
  const [showProducts, setProducts] = useState(true);
  const [showElectronics, setElectronics] = useState(false);
  const [showFashion, setFashion] = useState(false);
  const [showLifestyle, setLifestyle] = useState(false);
  const [showLaptop, setLaptop] = useState(false);

  return (
    <>
      <h1 className="text-center text-warning bg-dark p-3">E-Commerce</h1>
      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => {
            setProducts(true);
            setElectronics(false);
            setFashion(false);
            setLifestyle(false);
            setLaptop(false);
          }}
        >
          All Products
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            setProducts(false);
            setElectronics(true);
            setFashion(false);
            setLifestyle(false);
            setLaptop(false);
          }}
        >
          Electronics
        </button>

        <button
          className="btn btn-warning"
          onClick={() => {
            setProducts(false);
            setElectronics(false);
            setFashion(true);
            setLifestyle(false);
            setLaptop(false);
          }}
        >
          Fashion
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => {
            setProducts(false);
            setElectronics(false);
            setFashion(false);
            setLifestyle(true);
            setLaptop(false);
          }}
        >
          Lifestyle
        </button>

        <button
          className="btn btn-primary"
          onClick={() => {
            setProducts(false);
            setElectronics(false);
            setFashion(false);
            setLifestyle(false);
            setLaptop(true);
          }}
        >
          Laptop
        </button>

        <div className="row">
          {showProducts == true
            ? products.map((val) => {
                return (
                  <div className="col-4 my-2">
                    <ProdCard
                      imgpath={val.imgpath}
                      name={val.name}
                      price={val.price}
                    />
                  </div>
                );
              })
            : showElectronics == true
              ? electronics.map((val) => {
                  return (
                    <div className="col-4 my-2">
                      <ProdCard
                        imgpath={val.imgpath}
                        name={val.name}
                        price={val.price}
                      />
                    </div>
                  );
                })
              : showFashion == true
                ? fashion.map((val) => {
                    return (
                      <div className="col-4 my-2">
                        <ProdCard
                          imgpath={val.imgpath}
                          name={val.name}
                          price={val.price}
                        />
                      </div>
                    );
                  })
                : showLifestyle == true
                  ? lifestyle.map((val) => {
                      return (
                        <div className="col-4 my-2">
                          <ProdCard
                            imgpath={val.imgpath}
                            name={val.name}
                            price={val.price}
                          />
                        </div>
                      );
                    })
                  : showLaptop == true
                    ? laptop.map((val) => {
                        return (
                          <div className="col-4 my-2">
                            <ProdCard
                              imgpath={val.imgpath}
                              name={val.name}
                              price={val.price}
                            />
                          </div>
                        );
                      })
                    : null}
        </div>
      </div>
    </>
  );
};

export default CondRend2;
