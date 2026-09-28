import { Link, useNavigate } from "react-router-dom";

const destinations = [
  {
    name: "Araku Valley",
    state: "Andhra Pradesh",
    description: "Misty hills, coffee plantations and peaceful valleys.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    description: "A beautiful coastal city surrounded by beaches and hills.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Munnar",
    state: "Kerala",
    description: "Endless tea gardens, misty mountains and peaceful escapes.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Alleppey",
    state: "Kerala",
    description: "Calm backwaters, houseboats and beautiful landscapes.",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Ooty",
    state: "Tamil Nadu",
    description: "Cool weather, green hills and scenic mountain views.",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Kodaikanal",
    state: "Tamil Nadu",
    description: "Misty mountains, lakes and peaceful hill-station experiences.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Jaipur",
    state: "Rajasthan",
    description: "Royal palaces, historic architecture and vibrant culture.",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Leh Ladakh",
    state: "Ladakh",
    description: "High mountains, dramatic roads and unforgettable adventures.",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1200&q=85",
  },
];

function App() {
  const navigate = useNavigate();

  const isLoggedIn = !!localStorage.getItem("tripnest_token");

  const handleDestinationClick = () => {
    if (isLoggedIn) {
      navigate("/destinations");
    } else {
      navigate("/login");
    }
  };

  const handleExploreTrips = () => {
    if (isLoggedIn) {
      navigate("/trips");
    } else {
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("tripnest_token");
    window.location.href = "/";
  };

  return (
    <div className="tripnest-home">

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="top-navbar">

        <div className="navbar-container">

          <Link to="/" className="tripnest-logo">
            <span className="logo-box">T</span>
            <span>TripNest</span>
          </Link>


          <nav className="main-navigation">

            <Link className="nav-active" to="/">
              Home
            </Link>

            <button onClick={handleExploreTrips}>
              Trips
            </button>

            <button onClick={handleDestinationClick}>
              Destinations
            </button>

            <a href="#about">
              About Us
            </a>

            <a href="#contact">
              Contact
            </a>

          </nav>


          <div className="navbar-buttons">

            {isLoggedIn ? (
              <>
                <Link to="/profile" className="login-button">
                  Profile
                </Link>

                <button
                  className="register-button"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="login-button"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="register-button"
                >
                  Register
                </Link>
              </>
            )}

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">

        <div className="hero-dark-layer"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>


        {/* Animated airplane */}

        <div className="animated-airplane">

          <div className="airplane-body"></div>

          <div className="airplane-wing"></div>

          <div className="airplane-tail"></div>

        </div>


        {/* Flight trail */}

        <div className="airplane-trail"></div>


        <div className="hero-container">


          {/* =================================================
              HERO LEFT
          ================================================= */}

          <div className="hero-left">

            <div className="hero-small-title">
              YOUR SMART TRAVEL PLANNER
            </div>


            <h1>

              Plan.

              <br />

              Travel.

              <br />

              <span>Memories Forever.</span>

            </h1>


            <p className="hero-description">

              Plan trips, manage itineraries, track budgets
              and collaborate with your travel group —
              all in one place.

            </p>


            <div className="hero-actions">

              <Link
                to="/register"
                className="hero-primary-button"
              >
                Get Started
              </Link>


              <button
                className="hero-outline-button"
                onClick={handleExploreTrips}
              >
                Explore Trips
              </button>

            </div>


            <div className="hero-statistics">

              <div>
                <strong>01</strong>
                <span>Plan your journey</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Organize your trip</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Travel together</span>
              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT ACCESS PANEL
          ================================================= */}

          <div className="travel-access-panel">

            <div className="access-heading">

              <span>TRIPNEST ACCESS</span>

              <h2>
                Who are you?
              </h2>

              <p>
                Choose how you want to use TripNest.
              </p>

            </div>


            <div className="access-roles">


              {/* Traveler */}

              <button
                className="access-role"
                onClick={() => navigate("/register")}
              >

                <span className="role-number">
                  01
                </span>

                <div className="role-icon role-traveler">
                  T
                </div>

                <h3>
                  Traveler
                </h3>

                <p>
                  Plan your trips and explore new
                  destinations.
                </p>

              </button>


              {/* Group Admin */}

              <button
                className="access-role"
                onClick={() => navigate("/register")}
              >

                <span className="role-number">
                  02
                </span>

                <div className="role-icon role-group">
                  G
                </div>

                <h3>
                  Group Admin
                </h3>

                <p>
                  Manage group bookings, itineraries
                  and trips.
                </p>

              </button>


              {/* Admin */}

              <button
                className="access-role"
                onClick={() => navigate("/login")}
              >

                <span className="role-number">
                  03
                </span>

                <div className="role-icon role-admin">
                  A
                </div>

                <h3>
                  Admin
                </h3>

                <p>
                  Manage users, trips and the
                  TripNest platform.
                </p>

              </button>

            </div>


            <div className="access-divider">

              <span></span>

              <p>OR</p>

              <span></span>

            </div>


            <button
              className="google-login-button"
              onClick={() => navigate("/login")}
            >
              Continue with Google
            </button>


            <p className="access-login-text">

              Already have an account?

              <Link to="/login">
                Sign in
              </Link>

            </p>

          </div>

        </div>


        {/* Hero bottom fade */}

        <div className="hero-bottom-fade"></div>

      </section>


      {/* =====================================================
          POPULAR DESTINATIONS
      ===================================================== */}

      <section className="popular-section">

        <div className="content-container">


          <div className="destination-heading">

            <div>

              <span className="section-tag">
                EXPLORE INDIA
              </span>

              <h2>
                Popular Destinations
              </h2>

            </div>


            <button
              onClick={handleDestinationClick}
              className="view-all-button"
            >
              View all destinations
              <span>→</span>
            </button>

          </div>


          <div className="destination-grid">

            {destinations.map((destination, index) => (

              <button
                key={destination.name}
                className="destination-card"
                onClick={handleDestinationClick}
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                />


                <div className="destination-overlay"></div>


                <div className="destination-card-content">

                  <div>

                    <span className="destination-state">
                      {destination.state}
                    </span>

                    <h3>
                      {destination.name}
                    </h3>

                    <p>
                      {destination.description}
                    </p>

                  </div>


                  <span className="destination-arrow">
                    →
                  </span>

                </div>


                <span className="destination-count">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
    WHY TRIPNEST SECTION
===================================================== */}

      <section className="why-tripnest" id="about">

        <div className="container">

          <div className="why-header">

            <span className="eyebrow">
              WHY TRIPNEST
            </span>

            <h2>
              Travel planning,
              <br />
              <span>made beautifully simple.</span>
            </h2>

            <p>
              From discovering your next destination to organizing
              every part of your journey, TripNest keeps your travel
              plans together in one place.
            </p>

          </div>


          <div className="travel-features">

            <article className="travel-feature">

              <span className="feature-number">
                01
              </span>

              <div className="feature-line"></div>

              <h3>
                Discover
              </h3>

              <p>
                Explore amazing destinations across India and
                find places that match your travel style.
              </p>

            </article>


            <article className="travel-feature">

              <span className="feature-number">
                02
              </span>

              <div className="feature-line"></div>

              <h3>
                Plan
              </h3>

              <p>
                Build organized itineraries with destinations,
                activities and schedules for your journey.
              </p>

            </article>


            <article className="travel-feature">

              <span className="feature-number">
                03
              </span>

              <div className="feature-line"></div>

              <h3>
                Manage
              </h3>

              <p>
                Keep your travel budget, plans and important
                trip information organized.
              </p>

            </article>


            <article className="travel-feature">

              <span className="feature-number">
                04
              </span>

              <div className="feature-line"></div>

              <h3>
                Collaborate
              </h3>

              <p>
                Plan unforgettable journeys together with
                friends, family and your travel group.
              </p>

            </article>

          </div>


          {/* INDIA DESTINATIONS */}

          <div className="india-section">

            <div className="india-heading">

              <div>

                <span className="eyebrow">
                  EXPLORE INDIA
                </span>

                <h2>
                  Start your journey
                  <br />
                  <span>somewhere unforgettable.</span>
                </h2>

              </div>

              <p>
                Discover remarkable places from the mountains
                of the north to the beaches of the south.
              </p>

            </div>


            <div className="india-destinations">


              {/* Andhra Pradesh */}

              <Link to="/register" className="destination-card">

                <div
                  className="destination-image"
                  style={{
                    backgroundImage:
                      `url("https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=85")`
                  }}
                ></div>

                <div className="destination-overlay"></div>

                <div className="destination-content">

                  <span>ANDHRA PRADESH</span>

                  <h3>
                    Araku Valley
                  </h3>

                  <p>
                    Hills, coffee plantations and peaceful valleys.
                  </p>

                </div>

              </Link>


              {/* Kerala */}

              <Link to="/register" className="destination-card">

                <div
                  className="destination-image"
                  style={{
                    backgroundImage:
                      `url("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=85")`
                  }}
                ></div>

                <div className="destination-overlay"></div>

                <div className="destination-content">

                  <span>KERALA</span>

                  <h3>
                    Alleppey
                  </h3>

                  <p>
                    Backwaters, houseboats and tropical landscapes.
                  </p>

                </div>

              </Link>


              {/* Tamil Nadu */}

              <Link to="/register" className="destination-card">

                <div
                  className="destination-image"
                  style={{
                    backgroundImage:
                      `url("https://images.unsplash.com/photo-1600100397608-f0103b4c8d4b?auto=format&fit=crop&w=1000&q=85")`
                  }}
                ></div>

                <div className="destination-overlay"></div>

                <div className="destination-content">

                  <span>TAMIL NADU</span>

                  <h3>
                    Ooty
                  </h3>

                  <p>
                    Misty hills, tea gardens and cool mountain air.
                  </p>

                </div>

              </Link>


              {/* Rajasthan */}

              <Link to="/register" className="destination-card">

                <div
                  className="destination-image"
                  style={{
                    backgroundImage:
                      `url("https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=85")`
                  }}
                ></div>

                <div className="destination-overlay"></div>

                <div className="destination-content">

                  <span>RAJASTHAN</span>

                  <h3>
                    Jaipur
                  </h3>

                  <p>
                    Royal architecture, forts and colourful streets.
                  </p>

                </div>

              </Link>


            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="final-cta">

        <div className="cta-overlay"></div>

        <div className="cta-content">

          <span className="section-tag">
            YOUR NEXT ADVENTURE
          </span>

          <h2>
            Your journey
            <br />
            starts here.
          </h2>

          <p>
            Plan less. Experience more.
          </p>

          <Link
            to="/register"
            className="hero-primary-button"
          >
            Start Planning
          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="site-footer"
        id="contact"
      >

        <div className="content-container">

          <div className="footer-main">

            <div>

              <Link
                to="/"
                className="tripnest-logo"
              >

                <span className="logo-box">
                  T
                </span>

                <span>
                  TripNest
                </span>

              </Link>


              <p>
                Travel planning and trip management
                made simple.
              </p>

            </div>


            <div className="footer-navigation">

              <Link to="/">
                Home
              </Link>

              <button onClick={handleExploreTrips}>
                Trips
              </button>

              <button onClick={handleDestinationClick}>
                Destinations
              </button>

              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>

            </div>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 TripNest
            </span>

            <span>
              Travel better. Together.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;