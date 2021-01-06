import React from "react"
import "./Header.css"

function Header() {
    return (<div class="container-flued">
    <div class="row header">
        <div class="col md-4 col-sm-4" id="headericon"> <img id="iconimage" src="img/icon1.jpg" alt="" height="60px"
                width="85px"/></div>
        <div class="col md-8 col-sm-8" id="headercontainer">
            <div class="row">
                <ul>
                    <li class="nav-item"><a class="nav-link" href=""> Home          </a></li>
                    <li class="nav-item"><a class="nav-link" href=""> Popular Tailor</a></li>
                    <li class="nav-item"><a class="nav-link" href=""> Abous Us      </a></li>
                    <li class="nav-item"><a class="nav-link" href=""> How it Works  </a></li>
                    <li class="nav-item"><a class="nav-link" href=""> Design        </a></li>
                    <li class="nav-item"><a class="nav-link" href=""> Blog          </a></li>
                    <li class="nav-item"><a class="nav-link" href=""> Join the Team </a></li>
                    <li class="nav-item"><a class="nav-link" href=""> Content       </a></li>
                </ul>

            </div>
        </div>
    </div>

</div>);

}

 
export default Header;