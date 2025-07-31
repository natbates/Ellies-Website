import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

import Contact from "./Contact";


const Packages = () => {

    const navigate = useNavigate();

    var package_images = {
        Weddings: "../images/weddings/DSC00632.jpg",
        Maternity: "../images/maternity/DSC02507.jpg",
        Resturants: "../images/restaurants/DSC08988.jpg",
        Private_Events: "../images/private_events/DSC08073.jpg"
    }

    return (
        <div className="packages">

            <h2 className="packages-title">Our Packages</h2>
            <p>Choose from a variety of packages tailored to your needs and budget.</p>

            <div className="package-columns">
                <div className="package-column">
                    <img
                        src={package_images.Weddings}
                        alt="Weddings"
                        className="package-img"
                        onClick={() => navigate("/weddings")}
                    />
                    <h2>Weddings</h2>
                    <p>Essential coverage for your event, capturing all the key moments with style and elegance.</p>
                    <button onClick={() => navigate("/weddings")}>View Details</button>
                </div>
                <div className="package-column">
                    <img
                        src={package_images.Maternity}
                        alt="Maternities"
                        className="package-img"
                        onClick={() => navigate("/maternity")}
                    />
                    <h2>Maternities</h2>
                    <p>Extended coverage, more photos, and extra edits to ensure every detail is remembered.</p>
                    <button onClick={() => navigate("/maternity")}>View Details</button>
                </div>
                <div className="package-column">
                    <img
                        src={package_images.Resturants}
                        alt="Restaurants"
                        className="package-img"
                        onClick={() => navigate("/restaurants")}
                    />
                    <h2>Restaurants</h2>
                    <p>The full experience: all-day coverage, premium albums, and a personalized photo session.</p>
                    <button onClick={() => navigate("/restaurants")}>View Details</button>
                </div>
            </div>
        </div>
    );
}


const About = () => {

    const navigate = useNavigate();

    return (
        <div className="about-container">
            <h2 className="centred-text">Meet the Photographer</h2>
            <div className="about-section">
                <div className="about-text">
                    <div className="text-section">
                        <h3>About Me</h3>
                        <p>I'm a passionate photographer with a love for capturing life's most beautiful moments. With years of experience in weddings, maternity, and special events, I strive to create timeless images that tell your unique story.</p>
                    </div>
                    <div className="text-section">
                        <h3>My Vision</h3>
                        <p>To create a visual narrative that reflects your unique story and personality.</p>
                        <p>Whether it's a wedding, maternity shoot, or a private event, I aim to capture the essence of each moment with creativity and elegance.</p>
                    </div>          
                    <div className="text-section">
                        <h3>Connect With Me</h3>
                        <p>If you're interested in working together or have any questions, feel free to reach out through the contact form below.</p>
                        <button style = {{marginTop: "30px"}} onClick={() => navigate("/contact")}>Book Me Now</button>
                    </div>
                </div>
                <img className="about-image" src="../images/me/IMG_7453.jpg" alt="About Background" />
            </div>
        </div>
    );
}


const Galleries = () => {
    const navigate = useNavigate();

    const galleryItems = [
        {
            label: "Weddings",
            img: "../images/weddings/DSC00632.jpg",
            link: "/gallery/weddings",
        },
        {
            label: "Restaurants",
            img: "../images/restaurants/DSC08988.jpg",
            link: "/gallery/restaurants",
        },
        {
            label: "Maternity",
            img: "../images/maternity/DSC02507.jpg",
            link: "/gallery/maternity",
        },
        {
            label: "Private Events",
            img: "../images/private_events/DSC08073.jpg",
            link: "/gallery/private",
        }
    ];

    return (
        <div className="galleries">
            <h2 className="centred-text">Explore My Work</h2>
            <div className="gallery-list">
                {galleryItems.map(item => (
                    <div
                        className="gallery-item"
                        key={item.label}
                        onClick={() => navigate(item.link)}
                    >
                        <img
                            src={item.img}
                            alt={item.label}
                        />
                        <div>
                            <h3 style={{ margin: 0 }}>{item.label}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const Clients = () => {
    return (
        <div className="clients-container">
            <div className="clients">
                <h2 className="client-title">What My Clients Think</h2>
                <div className="client-feedback">
                    <p>"Absolutely stunning work! You captured our special day perfectly."</p>
                    <p>"The attention to detail and creativity in every shot is amazing."</p>
                    <p>"We couldn't be happier with our photos. Thank you for your incredible talent!"</p>
                </div>
            </div>
            <div className="client-locations">
                <h2>Locations</h2>
                <ul>

                </ul>
            </div>
        </div>
    );
};

const Home = () => {

    return (
        <div className="home-page">
            
            <img className="home-image" src="../images/weddings/DSC08190.jpg" alt="Home Background" />

            <div className="home-text">
                <h1 className="home-title">Forever begins with a single beautiful moment captured</h1>
                <p className="home-quote">
                    Capturing the magic of weddings, maternity, and special events with a creative eye.<br />
                    Turning real moments into timeless, elegant photographs you'll cherish forever.<br />
                    Dedicated to making your memories last a lifetime.
                </p>
            </div>

            <div className="page-divider" alt="Page Divider" />

            <Packages />

            <div className="parallax-bg other">


                <Clients/ >

            </div>

            <About />

            <div className="parallax-bg"></div>
            

            <Contact />

        </div>
    );
}

export default Home;