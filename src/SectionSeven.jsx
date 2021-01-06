import React from "react";
import "./SectionSeven.css"

function SectionSeven() {
    return (

        <div class="container-fluid" id="how-it-works">
            <div class="work">
                <h2>Here's How It Works</h2>
                <p>Our main aim is to make the entire booking process from choosing your favourite chef to the arrival
                   of your private chef (at the place and time convenient for you) quick, easy and professional.</p>
            </div>
            <div class="row">
                <div class="col-md-6 mb-4">
                    <div class="media theme-bg-2  ">
                        <img src="icon/tailor.jpg" />
                        <div class="media-body">
                            <h5 class="mt-0">Choose Your Tailor</h5>
                            <p>Browse our selection of professional Tailors from your favourite TailorShop.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="media theme-bg-2 ">
                        <img src="icon/design.jpg" />
                        <div class="media-body">
                            <h5 class="mt-0">Select Dedign</h5>
                            <p>Browse our design selection of set collection and choose your favourite one.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="media theme-bg-2">
                        <img src="icon/calendar.png" />
                        <div class="media-body">
                            <h5 class="mt-0">Pick Your Date of Event</h5>
                            <p>Select the location, date and estimated no. of guests for your event.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mb-4">
                    <div class="media theme-bg-2 ">
                        <img src="icon/rupee.png" />
                        <div class="media-body">
                            <h5 class="mt-0">Book and Choose Payment Option</h5>
                            <p>Once you select your preference, pay online through our secure gateways.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6 mb-4">
                    <div class="media theme-bg-2 ">
                        <img src="icon/host.png" />
                        <div class="media-body">
                            <h5 class="mt-0">Be the Host and Enjoy</h5>
                            <p>Host a party, Tailor Connect will make your entire event memorable.</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>

    );


}
export default SectionSeven;