/*global google*/
import React, { Component } from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    DirectionsRenderer } from 'react-google-maps';
import * as btoData from "../data/btoData.json";

const MapWithADirectionsRenderer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA_WObUiYD7YpoYufR84re1LZHAJeAGXkY",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px`,width:`1000px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentWillMount() {
            this.setState({
                newDirections: [],
            });
        },
        componentDidUpdate(prevProps, prevState) {
            if (prevProps.origin !== this.props.origin) {
                this.setState({
                    directions: null,
                    directions1: null,
                    directions2: null,
                    directions3: null,
                    newDirections: []
                });
                this.drawRoutes();
            }
        },
        componentDidMount() {
            this.drawRoutes();
        },

        drawRoutes() {
            // let destinations = ['Dover,Singapore', 'Jalan Membina, Singapore', 'Tampines,Singapore', 'Pasir Ris, Singapore']
            let destinations = ['Jalan Membina,Singapore', 'Geylang Bahru, Singapore', 'Seletar,Singapore', 'Punggol, Singapore','Tampines, Singapore','Nanyang Technological University, Singapore']

            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[0],
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[1],
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions1: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[2],
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions2: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
                origin: this.props.origin,
                destination: destinations[3],
                travelMode: google.maps.TravelMode.TRANSIT,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions3: result,
                        newDirections: this.state.newDirections.concat([result])
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            });

            DirectionsService.route({
              origin: this.props.origin,
              destination: destinations[4],
              travelMode: google.maps.TravelMode.TRANSIT,
          }, (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) {
                  this.setState({
                      directions3: result,
                      newDirections: this.state.newDirections.concat([result])
                  });
              } else {
                  console.error(`error fetching directions ${result}`);
              }
          });


          DirectionsService.route({
            origin: this.props.origin,
            destination: destinations[5],
            travelMode: google.maps.TravelMode.TRANSIT,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                    directions3: result,
                    newDirections: this.state.newDirections.concat([result])
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        });
        }
    })
)(props =>
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(1.32083,102.819839)}
        >

           {btoData.features.map(bto=>( 
          <Marker 
          key = {bto.properties.PARK_ID} 
          position={{ 
            lat: bto.geometry.coordinates[1],
            lng: bto.geometry.coordinates[0]
          }}
          draggable = {true}
          icon={{
            url:'/home.svg',
            scaledSize: new window.google.maps.Size(40,40)
          }}
          />  
        ))}
       <DirectionsRenderer directions={props.newDirections[0]} />
       <DirectionsRenderer directions={props.newDirections[1]} />
       <DirectionsRenderer directions={props.newDirections[2]} />
       <DirectionsRenderer directions={props.newDirections[3]} />
       <DirectionsRenderer directions={props.newDirections[4]} />
       <DirectionsRenderer directions={props.newDirections[5]} />
      
      }

    </GoogleMap>
);

export default MapWithADirectionsRenderer;
