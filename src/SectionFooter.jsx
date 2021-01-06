import React from "react";
import "./SectionFooter.css";


function SectionFooter() {
    return(
        <div class="container-fluid">
        <div class="row" id="footer">
            <div class="col md-8 " id="footer-l">
                <div class="row footer-left">
                    <h4>Tailor<spna> Connect</spna>
                    </h4>
                </div>
                <div class="row footer-left">
                    <h6><a href="#"> Home | </a></h6>
                    <h6><a href="#"> Blog |</a> </h6>
                    <h6><a href="#"> About |</a> </h6>
                    <h6><a href="#"> Contact | </a></h6>
                    

                </div>
                <div class="row footer-left">
                <p>Tailor Connect @2021 | Desinged by <span>Digital India Path</span></p>
                </div>
            </div>

            <div class="col md-4" id="footer-mid">
                <div class="row footer-middle"><img src="logo/location1.jpg"/><span>jaipur</span>
                    <p id="para">Rajsthan,India</p>
                </div>
                <div class="row footer-middle"><img src="logo/phone2.jpg"/>
                    <p>+918107302002</p>
                </div>
                <div class="row footer-middle"><img src="logo/email8.jpg"/>
                    <span>info@tailorcoonect.co.in </span>
                </div>
            </div>

            <div class="col md-8 footer-right" id="footer-r">
                <h4>About the compnay</h4>
                <p>Tailor connect is an indian specialist tailor recruitment agency,
                    sourcing talent at all levels from Commis tailor to Executive tailor for
                    Designing Dress like ethichal and traditional and all.</p>
                
            </div>

        </div>
    </div>
        
    );
}
export default SectionFooter;