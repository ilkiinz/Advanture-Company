import Nav from "../Navbar/Nav";
import Background from "../assets/background.jpg";
import "../Home/Home.css";
import Post1 from "../assets/@swatchlland.png";
import Post2 from "../assets/Yeni kolleksiya.png";
import Post3 from "../assets/Curren Blanche.png";
const Home = () =>{
    return(
        <div className="home-main-cont">
            <Nav/>
            <div className="home-main1">
               <img src={Background} alt="" />
               
                <div className="home-main1-txt">

                    <h1>Serving you
                        since 1989.</h1>
                    <p>Acme Outdoors is an outdoor
                        and adventure shop located in the
                        Boathouse District in Oklahoma City.</p>

                    <button>Shop Now</button>

                </div>
                <div class="overlay"></div>
                 </div>


            <div className="home-main-cont2">
                <div className="head-main">
                    <div className="head1">
                        <p>WAYS TO SUPPORT</p>
                        <h1>Support Acme Outdoors.</h1>
                    </div>
                    <p className="txt-head">COVID-19 has forced us to close our retail space,
                        but we need support from patrons like
                        yourself now more than ever.
                        Below, we’ve listed the best ways to
                        help us through this season.</p>
                </div>


                <div className="cards-cont">

                    <div className="card">
                        <img src={Post1} alt="" />
                        <p>Our full product line is still available online here on our site!
                             Getting outside and hiking is still something you can do.
                             Get your gear now!</p>
                    </div>
                    
                    <div className="card">
                    <img src={Post2} alt="" />
                        <p>Our full product line is still available online here on our site!
                             Getting outside and hiking is still something you can do.
                             Get your gear now!</p>
                    </div>

                    <div className="card">
                    <img src={Post3} alt="" />
                        <p>Our full product line is still available online here on our site!
                             Getting outside and hiking is still something you can do.
                             Get your gear now!</p>
                    </div>

                </div>


            </div>
             
            
            
        </div>
    )
}

export default Home;