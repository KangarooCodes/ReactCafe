import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import './Home.css'

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="Home-Title">
              Welcome to <span>Joey's</span> premier dive cafe!
            </p>
          </CardTitle>
          <CardSubtitle>
            <p className="Home-Sub">
              We Proudly Offer {drinks.length} Adult Beverages and {snacks.length} Snacks
            </p>
          </CardSubtitle>
          <p>* Please Enjoy Responsibly</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
