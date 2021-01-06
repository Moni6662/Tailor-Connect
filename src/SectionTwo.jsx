import React from "react"
import "./SectionTwo.css"

function SectionTwo() {
    return (

        <div class="container fluid ">
            <div class="BodyKurs">

                <picture><img src="img.jpg"/></picture>
            
                <div class="overlay">
                    <h1 class="display-4 font-weight-normal headline">Hire a <span class="theme-color">Tailor</span> </h1>
                    <p class="lead font-weight-normal">Hire Your Private Tailor</p>

                    <div class="formcontainer">
                        <form id="home-form" class="home-form p-4 mb-3 theme-bg-transparent rounded">
                            <div class="theme-input d-flex flex-column flex-md-row">
                                <input name="name" type="text" class="formdesign" id="name" placeholder="Your Name"/>
                                <input name="mobile" type="text" class="formdesign" id="mobile" placeholder="Mobile"/>
                                <input name="date" type="date" class="formdesign" id="date" placeholder="dd/mm/yy"/>
                                <button type="submit" class="formdesign  btn-block btn-outline-secondary btn-theme"
                                    id="btn1" type="button">Enquiry</button>
                            </div>
                        </form>
                    </div>

                    <p id="success" class="text-center text-success"></p>
                    <p id="error" class="text-center text-danger"></p>
                    <h3 class="mt-3 textapitalize">Desiner Tailor Available for you at your home with your favorite Design </h3>

                    <a href="" class="btn " id="btnid">What Does a Private tailor Do?</a>

                </div>
            </div>
        </div>    

    );

}
export default SectionTwo;