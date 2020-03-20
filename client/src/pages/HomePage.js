import React from "react";
import Container from "@material-ui/core/Container";
import "./pages.css";
import { useFetch } from "../customHooks/useFetch";
import Carousel from "../components/frontCarousel";
import Card from "../components/bCard";
import { CardDeck } from "react-bootstrap";
import { LoadSpinners } from "../components/LoadSpinners";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const { data, loading } = useFetch("/api/bto");

  if (loading) {
    console.log("loading");
    return <LoadSpinners />;
  }
  return (
    <body>
      <div className="main" id="section1">
        <Carousel />
      </div>
      <div class="main" id="section2">
        <h1 className="page-title">Available BTOs</h1>
        <h3 className="page-title-2"><center>We help you choose the right home with ease.</center></h3>
        
    <div class="row">
    <div class="col-md-2">
    </div>

    <div class="col-md-8">
    <CardDeck>
          {data.map(eachHousing => (
            <Card
              key={eachHousing.id}
              btoName={eachHousing.Name}
              shortDesc={eachHousing.ShortestDesc}
            />
          ))}
        </CardDeck>
    </div>
    <div class="col-md-2">
    </div>
  </div>



      </div>
      <Footer/>
    </body>
  );
};


// <div class="col-12 col-md-9">&copy; { new Date().getFullYear()} BTOAnywhere App - All rights reserved
// </div>
//   <div class="col-6 col-md-3">Subscribe to BTOAnywhere Service</div>