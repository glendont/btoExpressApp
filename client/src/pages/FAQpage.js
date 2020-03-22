import React from "react";
import "./pages.css";
// import FAQbutton from '../components/FAQbutton';
import { Footer } from "../components/Footer";

export const FAQpage = () => {
  return (
    // printed on screen
    <body>
      <div className="main" style={{padding:"100px", paddingBottom:"30px", backgroundColor:"#DDDDDD", textAlign:"center"}}>
        <h2 className="page-title">Frequently Asked Questions</h2>
        <p className="sub-title">We will answer all your burning questions.</p>
      </div>
      <div class="FAQbox">
        <h1>FAQs</h1>
        <div id="FAQaccordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  type="button"
                  class="btn btn-link"
                  data-toggle="collapse "
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Question 1
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#FAQaccordion"
            >
              <div class="card-body">Hello!</div>
            </div>
          </div>

          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Question 2
                </button>
              </h5>
            </div>

            <div
              id="collapseTwo"
              class="collapse show"
              aria-labelledby="headingTwo"
              data-parent="#FAQaccordion"
            >
              <div class="card-body">Hello hello 2</div>
            </div>
          </div>
        </div>
        <div>
          <img className="landscape" src="https://cdn.clipart.email/3644262fb7ec3f9b40361e0329af3faa_houston-vector-skyline-singapore-picture-1104648-houston-vector-_2496-752.png" 
          style={{opacity:0.4, maxWidth:"100%", marginBottom:"-3%"}}></img>
        </div>
      <Footer/> 
            <Footer/>
      </div>
    </body>
  );
};
