import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import './Home.css'

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h2 className="Home-Title">
              Welcome to <span>Silicon Valley's</span> premier dive cafe!
            </h2>
          </CardTitle>
          <CardSubtitle>
            <h5 className="Home-Sub">
              We Proudly Offer {drinks.length} Adult Beverages and {snacks.length} Snacks
            </h5>
          </CardSubtitle>
          <p>* Please Enjoy Responsibly</p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
