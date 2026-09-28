import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import App from "./App";
import { api } from "./services/api";

import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import AccountSettings from "./pages/AccountSettings";

import "./index.css";


// =====================================================
// COMMON PAGE WRAPPER
// =====================================================

function Page({ title, children }) {
  return (
    <div className="container">
      <div className="page-title">
        <h1>{title}</h1>
      </div>

      {children}
    </div>
  );
}


// =====================================================
// LOGIN PAGE
// =====================================================

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      /*
       * Team backend:
       * POST /api/auth/login
       *
       * Backend currently returns the JWT as a String.
       */

      const token = await api.login({
        email,
        password,
      });

      if (!token) {
        throw new Error("Login failed.");
      }

      // Store JWT
      localStorage.setItem("tripnest_token", token);

      // Go to profile after successful login
      nav("/profile");

    } catch (err) {
      console.error(err);

      setError(
        "Invalid email or password. Please check your credentials."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-page">

      {/* Background */}
      <div className="auth-background"></div>

      <div className="auth-overlay"></div>


      <div className="auth-layout">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="auth-intro">

          <Link to="/" className="brand auth-brand">

            <span className="brand-mark">
              T
            </span>

            <span>
              TripNest
            </span>

          </Link>


          <span className="section-label">
            WELCOME BACK
          </span>


          <h1>
            Continue your
            <br />
            <span>journey.</span>
          </h1>


          <p>
            Sign in to manage your trips, itineraries,
            destinations and travel plans.
          </p>


          <div className="auth-benefits">

            <div>
              <span>01</span>
              <p>Manage your trips</p>
            </div>

            <div>
              <span>02</span>
              <p>Organize itineraries</p>
            </div>

            <div>
              <span>03</span>
              <p>Track travel budgets</p>
            </div>

          </div>

        </div>


        {/* =================================================
            LOGIN CARD
        ================================================= */}

        <form
          className="auth-card"
          onSubmit={submit}
        >

          <div className="auth-card-header">

            <span>
              TRIPNEST ACCOUNT
            </span>

            <h2>
              Sign in
            </h2>

            <p>
              Enter your details to continue.
            </p>

          </div>


          {/* EMAIL */}

          <div className="auth-field">

            <label>
              Email address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="auth-field">

            <label>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              required
            />

          </div>


          {/* LOGIN BUTTON */}

          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Signing in..."
              : "Sign in"}

          </button>


          {/* ERROR */}

          {error && (
            <p className="auth-error">
              {error}
            </p>
          )}


          {/* DIVIDER */}

          <div className="auth-divider">
            <span>OR</span>
          </div>


          {/* GOOGLE */}

          <button
            type="button"
            className="auth-google"
            onClick={() => {
              alert(
                "Google authentication will be connected with the backend."
              );
            }}
          >
            Continue with Google
          </button>


          {/* REGISTER LINK */}

          <p className="auth-switch">

            Don't have an account?

            <Link to="/register">
              Create one
            </Link>

          </p>


          {/* HOME */}

          <Link
            to="/"
            className="back-home"
          >
            Back to TripNest
          </Link>

        </form>

      </div>

    </div>
  );
}


// =====================================================
// REGISTER PAGE
// =====================================================

function Register() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

  const [loading, setLoading] = React.useState(false);

  const nav = useNavigate();


  async function submit(e) {

    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);


    try {

      await api.register({
        name,
        email,
        password,
      });


      setSuccess(
        "Account created successfully. Redirecting to login..."
      );


      setTimeout(() => {
        nav("/login");
      }, 1200);


    } catch (err) {

      console.error(err);

      setError(
        err.message || "Registration failed."
      );


    } finally {

      setLoading(false);

    }
  }


  return (

    <div className="auth-page">

      {/* Background */}

      <div
        className="auth-background"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(3, 13, 25, 0.92),
              rgba(3, 13, 25, 0.48)
            ),
            url("https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=90")
          `,
        }}
      />

      <div className="auth-overlay"></div>


      <div className="auth-layout">


        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="auth-intro">

          <Link
            to="/"
            className="brand auth-brand"
          >

            <span className="brand-mark">
              T
            </span>

            <span>
              TripNest
            </span>

          </Link>


          <span className="section-label">
            START YOUR JOURNEY
          </span>


          <h1>

            Plan the trip

            <br />

            <span>
              you'll remember.
            </span>

          </h1>


          <p>

            Create your TripNest account and bring your
            destinations, itineraries and travel plans together.

          </p>


          <div className="auth-benefits">

            <div>
              <span>01</span>
              <p>Discover beautiful destinations</p>
            </div>

            <div>
              <span>02</span>
              <p>Create organized itineraries</p>
            </div>

            <div>
              <span>03</span>
              <p>Travel with your group</p>
            </div>

          </div>

        </div>


        {/* =================================================
            REGISTER CARD
        ================================================= */}

        <form
          className="auth-card"
          onSubmit={submit}
        >

          <div className="auth-card-header">

            <span>
              CREATE ACCOUNT
            </span>

            <h2>
              Join TripNest
            </h2>

            <p>
              Create your account to start planning.
            </p>

          </div>


          {/* NAME */}

          <div className="auth-field">

            <label>
              Full name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Your full name"
              required
            />

          </div>


          {/* EMAIL */}

          <div className="auth-field">

            <label>
              Email address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
              required
            />

          </div>


          {/* PASSWORD */}

          <div className="auth-field">

            <label>
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Create a password"
              minLength="6"
              required
            />

          </div>


          {/* REGISTER */}

          <button
            className="auth-submit"
            type="submit"
            disabled={loading}
          >

            {loading
              ? "Creating account..."
              : "Create account"}

          </button>


          {/* SUCCESS */}

          {success && (

            <p className="auth-success">
              {success}
            </p>

          )}


          {/* ERROR */}

          {error && (

            <p className="auth-error">
              {error}
            </p>

          )}


          {/* DIVIDER */}

          <div className="auth-divider">

            <span>
              OR
            </span>

          </div>


          {/* GOOGLE */}

          <button
            type="button"
            className="auth-google"
            onClick={() => {

              alert(
                "Google authentication will be connected with the backend."
              );

            }}
          >
            Continue with Google
          </button>


          {/* LOGIN */}

          <p className="auth-switch">

            Already have an account?

            <Link to="/login">
              Sign in
            </Link>

          </p>


          {/* HOME */}

          <Link
            to="/"
            className="back-home"
          >
            Back to TripNest
          </Link>

        </form>

      </div>

    </div>
  );
}


// =====================================================
// TRIPS PAGE
// =====================================================

function Trips() {

  const [trips, setTrips] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {

    api.getTrips()

      .then((data) => {

        setTrips(
          Array.isArray(data)
            ? data
            : []
        );

      })

      .catch((err) => {

        console.error(err);

        setError(
          "Unable to load trips from the backend."
        );

      });

  }, []);


  const data = trips.length
    ? trips
    : [
      {
        id: 1,
        title: "Your first adventure",
        description:
          "Connect the backend to start creating and managing trips.",
        status: "READY",
      },
    ];


  return (

    <Page title="My Trips">

      {error && (
        <p className="error">
          {error}
        </p>
      )}


      <div className="grid">

        {data.map((trip) => (

          <article
            className="card"
            key={trip.id}
          >

            <h3>
              {trip.title || "Untitled Trip"}
            </h3>


            <p className="muted">

              {trip.description ||
                "No description available."}

            </p>


            <p>

              <strong>
                Status:
              </strong>{" "}

              {trip.status ||
                "PLANNING"}

            </p>

          </article>

        ))}

      </div>

    </Page>
  );
}


// =====================================================
// DESTINATIONS PAGE
// =====================================================

function Destinations() {

  const [items, setItems] = React.useState([]);

  const [error, setError] = React.useState("");


  React.useEffect(() => {

    api.getDestinations()

      .then((data) => {

        setItems(
          Array.isArray(data)
            ? data
            : []
        );

      })

      .catch((err) => {

        console.error(err);

        setError(
          "Unable to load destinations from the backend."
        );

      });

  }, []);


  const data = items.length
    ? items
    : [
      {
        id: 1,
        name: "Goa",
        country: "India",
        description: "Beaches, sunsets and unforgettable coastal experiences.",
      },
      {
        id: 2,
        name: "Hyderabad",
        country: "India",
        description: "Historic landmarks, food, culture and modern city life.",
      },
      {
        id: 3,
        name: "Bengaluru",
        country: "India",
        description: "Technology, gardens, cafes and vibrant city experiences.",
      },
      {
        id: 4,
        name: "Kerala",
        country: "India",
        description: "Backwaters, lush landscapes and relaxing journeys.",
      },
      {
        id: 5,
        name: "Jaipur",
        country: "India",
        description: "Royal architecture, forts and vibrant culture.",
      },
      {
        id: 6,
        name: "Delhi",
        country: "India",
        description: "Historic monuments, markets and India's capital city.",
      },
      {
        id: 7,
        name: "Mumbai",
        country: "India",
        description: "Coastal views, iconic landmarks and vibrant city life.",
      },
      {
        id: 8,
        name: "Manali",
        country: "India",
        description: "Snow-covered mountains, valleys and adventure.",
      },
      {
        id: 9,
        name: "Jammu & Kashmir",
        country: "India",
        description: "Mountain landscapes, valleys and scenic escapes.",
      },
      {
        id: 10,
        name: "Ooty",
        country: "India",
        description: "Cool weather, tea gardens and peaceful hill views.",
      },
      {
        id: 11,
        name: "Visakhapatnam",
        country: "India",
        description: "Beautiful beaches, hills and coastal experiences.",
      },
      {
        id: 12,
        name: "Tirupati",
        country: "India",
        description: "A major spiritual destination surrounded by scenic hills.",
      },
      {
        id: 13,
        name: "Araku Valley",
        country: "India",
        description: "Misty hills, coffee plantations and peaceful valleys.",
      },
      {
        id: 14,
        name: "Tamil Nadu Beaches",
        country: "India",
        description: "Beautiful coastal destinations across Tamil Nadu.",
      },
      {
        id: 15,
        name: "Tamil Nadu Temples",
        country: "India",
        description: "Historic temples, architecture and spiritual heritage.",
      },
      {
        id: 16,
        name: "East Godavari",
        country: "India",
        description: "River landscapes, temples and cultural destinations.",
      },
      {
        id: 17,
        name: "West Godavari",
        country: "India",
        description: "Cultural heritage, temples and scenic countryside.",
      },
      {
        id: 18,
        name: "Taj Mahal",
        country: "India",
        description: "One of India's most famous monuments and heritage sites.",
      },
      {
        id: 19,
        name: "Varanasi",
        country: "India",
        description: "Ancient ghats, temples and spiritual experiences.",
      },
      {
        id: 20,
        name: "Hampi",
        country: "India",
        description: "Ancient ruins, temples and remarkable heritage landscapes.",
      },
      {
        id: 21,
        name: "Agra",
        country: "India",
        description: "Historic monuments and the home of the Taj Mahal.",
      },
      {
        id: 22,
        name: "Amritsar",
        country: "India",
        description: "Golden Temple, heritage and Punjabi culture.",
      },
      {
        id: 23,
        name: "Rishikesh",
        country: "India",
        description: "River experiences, spirituality and mountain scenery.",
      },
      {
        id: 24,
        name: "Haridwar",
        country: "India",
        description: "Sacred ghats, temples and spiritual traditions.",
      },
      {
        id: 25,
        name: "Ayodhya",
        country: "India",
        description: "Historic temples, culture and spiritual heritage.",
      },
      {
        id: 26,
        name: "Mathura",
        country: "India",
        description: "Ancient temples and traditions associated with Krishna.",
      },
      {
        id: 27,
        name: "Vrindavan",
        country: "India",
        description: "Temples, spiritual heritage and cultural experiences.",
      },
      {
        id: 28,
        name: "Udaipur",
        country: "India",
        description: "Lakes, palaces and royal Rajasthani heritage.",
      },
      {
        id: 29,
        name: "Jodhpur",
        country: "India",
        description: "Historic forts, blue streets and royal architecture.",
      },
      {
        id: 30,
        name: "Jaisalmer",
        country: "India",
        description: "Golden fort, desert landscapes and cultural experiences.",
      },
      {
        id: 31,
        name: "Mount Abu",
        country: "India",
        description: "Hill station landscapes, lakes and peaceful escapes.",
      },
      {
        id: 32,
        name: "Pushkar",
        country: "India",
        description: "Sacred lake, temples and colorful cultural experiences.",
      },
      {
        id: 33,
        name: "Ajmer",
        country: "India",
        description: "Historic shrines, heritage and cultural attractions.",
      },
      {
        id: 34,
        name: "Leh Ladakh",
        country: "India",
        description: "High mountains, dramatic landscapes and adventure.",
      },
      {
        id: 35,
        name: "Shimla",
        country: "India",
        description: "Mountain views, colonial heritage and cool weather.",
      },
      {
        id: 36,
        name: "Chandigarh",
        country: "India",
        description: "Modern architecture, gardens and planned city spaces.",
      },
      {
        id: 37,
        name: "Mussoorie",
        country: "India",
        description: "Mountain scenery, viewpoints and peaceful escapes.",
      },
      {
        id: 38,
        name: "Nainital",
        country: "India",
        description: "Lake views, hills and pleasant mountain weather.",
      },
      {
        id: 39,
        name: "Darjeeling",
        country: "India",
        description: "Tea gardens, mountain views and scenic rail journeys.",
      },
      {
        id: 40,
        name: "Sikkim",
        country: "India",
        description: "Mountain landscapes, monasteries and peaceful valleys.",
      },
      {
        id: 41,
        name: "Shillong",
        country: "India",
        description: "Hills, waterfalls and beautiful northeastern landscapes.",
      },
      {
        id: 42,
        name: "Guwahati",
        country: "India",
        description: "River views, temples and a gateway to Northeast India.",
      },
      {
        id: 43,
        name: "Tawang",
        country: "India",
        description: "Mountain scenery, monasteries and peaceful landscapes.",
      },
      {
        id: 44,
        name: "Gangtok",
        country: "India",
        description: "Mountain views, monasteries and vibrant local culture.",
      },
      {
        id: 45,
        name: "Munnar",
        country: "India",
        description: "Tea gardens, misty hills and beautiful valleys.",
      },
      {
        id: 46,
        name: "Alleppey",
        country: "India",
        description: "Backwaters, houseboats and tropical landscapes.",
      },
      {
        id: 47,
        name: "Wayanad",
        country: "India",
        description: "Forests, waterfalls, hills and nature experiences.",
      },
      {
        id: 48,
        name: "Thekkady",
        country: "India",
        description: "Wildlife, forests and scenic lake experiences.",
      },
      {
        id: 49,
        name: "Kochi",
        country: "India",
        description: "Coastal heritage, culture and historic neighborhoods.",
      },
      {
        id: 50,
        name: "Varkala",
        country: "India",
        description: "Cliffs, beaches and relaxing coastal experiences.",
      },
      {
        id: 51,
        name: "Kovalam",
        country: "India",
        description: "Beaches, coastal views and relaxing getaways.",
      },
      {
        id: 52,
        name: "Kanyakumari",
        country: "India",
        description: "Coastal landscapes and the meeting point of seas.",
      },
      {
        id: 53,
        name: "Rameswaram",
        country: "India",
        description: "Temples, coastal scenery and spiritual heritage.",
      },
      {
        id: 54,
        name: "Madurai",
        country: "India",
        description: "Historic temples, culture and traditional Tamil heritage.",
      },
      {
        id: 55,
        name: "Thanjavur",
        country: "India",
        description: "Historic temples, art and Chola heritage.",
      },
      {
        id: 56,
        name: "Mahabalipuram",
        country: "India",
        description: "Ancient shore temples, sculptures and coastal heritage.",
      },
      {
        id: 57,
        name: "Pondicherry",
        country: "India",
        description: "French-inspired streets, beaches and relaxed coastal life.",
      },
      {
        id: 58,
        name: "Coorg",
        country: "India",
        description: "Coffee plantations, hills and nature experiences.",
      },
      {
        id: 59,
        name: "Mysore",
        country: "India",
        description: "Palaces, heritage and cultural attractions.",
      },
      {
        id: 60,
        name: "Kodaikanal",
        country: "India",
        description: "Misty mountains, lakes and peaceful hill-station experiences.",
      },
      {
        id: 61,
        name: "Chennai",
        country: "India",
        description: "Beaches, temples, heritage and urban experiences.",
      },
      {
        id: 62,
        name: "Vijayawada",
        country: "India",
        description: "River views, temples and cultural attractions.",
      },
      {
        id: 63,
        name: "Amaravati",
        country: "India",
        description: "Buddhist heritage, temples and cultural attractions.",
      },
      {
        id: 64,
        name: "Srisailam",
        country: "India",
        description: "Temple heritage, forests and scenic surroundings.",
      },
      {
        id: 65,
        name: "Rajahmundry",
        country: "India",
        description: "Godavari river views, bridges and cultural experiences.",
      },
      {
        id: 66,
        name: "Konaseema",
        country: "India",
        description: "Lush greenery, canals, villages and Godavari landscapes.",
      },
      {
        id: 67,
        name: "Papikondalu",
        country: "India",
        description: "River valleys, hills and scenic boat journeys.",
      },
      {
        id: 68,
        name: "Dwaraka Tirumala",
        country: "India",
        description: "Temple heritage and spiritual experiences.",
      },
      {
        id: 69,
        name: "Bhimavaram",
        country: "India",
        description: "Temples, culture and local heritage.",
      },
      {
        id: 70,
        name: "Eluru",
        country: "India",
        description: "Historic sites, temples and regional culture.",
      },
      {
        id: 71,
        name: "Kurnool",
        country: "India",
        description: "Historic sites, caves and natural attractions.",
      },
      {
        id: 72,
        name: "Anantapur",
        country: "India",
        description: "Heritage, temples and regional cultural experiences.",
      },
      {
        id: 73,
        name: "Kadapa",
        country: "India",
        description: "Historic temples, forts and natural surroundings.",
      },
      {
        id: 74,
        name: "Nellore",
        country: "India",
        description: "Temples, lakes and coastal surroundings.",
      },
      {
        id: 75,
        name: "Srikalahasti",
        country: "India",
        description: "Famous temple heritage and spiritual experiences.",
      },
      {
        id: 76,
        name: "Warangal",
        country: "India",
        description: "Historic forts, temples and Kakatiya heritage.",
      },
      {
        id: 77,
        name: "Nagarkurnool",
        country: "India",
        description: "Forests, waterfalls and nature experiences.",
      },
      {
        id: 78,
        name: "Pune",
        country: "India",
        description: "Historic forts, culture and modern city life.",
      },
      {
        id: 79,
        name: "Lonavala",
        country: "India",
        description: "Hills, waterfalls and scenic weekend escapes.",
      },
      {
        id: 80,
        name: "Nashik",
        country: "India",
        description: "Temples, vineyards and scenic landscapes.",
      },
      {
        id: 81,
        name: "Aurangabad",
        country: "India",
        description: "Historic monuments, caves and heritage experiences.",
      },
      {
        id: 82,
        name: "Ajanta Caves",
        country: "India",
        description: "Ancient Buddhist cave art and heritage.",
      },
      {
        id: 83,
        name: "Ellora Caves",
        country: "India",
        description: "Remarkable rock-cut temples and historic architecture.",
      },
      {
        id: 84,
        name: "Ahmedabad",
        country: "India",
        description: "Heritage architecture, food and cultural experiences.",
      },
      {
        id: 85,
        name: "Rann of Kutch",
        country: "India",
        description: "White salt desert landscapes and cultural festivals.",
      },
      {
        id: 86,
        name: "Surat",
        country: "India",
        description: "Food, textiles and vibrant urban experiences.",
      },
      {
        id: 87,
        name: "Kolkata",
        country: "India",
        description: "Heritage buildings, culture, food and arts.",
      },
      {
        id: 88,
        name: "Puri",
        country: "India",
        description: "Temple heritage, beaches and coastal experiences.",
      },
      {
        id: 89,
        name: "Bhubaneswar",
        country: "India",
        description: "Ancient temples, heritage and Odisha culture.",
      },
      {
        id: 90,
        name: "Konark",
        country: "India",
        description: "Sun Temple, heritage architecture and coastal surroundings.",
      },
      {
        id: 91,
        name: "Ranchi",
        country: "India",
        description: "Waterfalls, forests and scenic landscapes.",
      },
      {
        id: 92,
        name: "Bodh Gaya",
        country: "India",
        description: "Important Buddhist heritage and spiritual destination.",
      },
      {
        id: 93,
        name: "Lucknow",
        country: "India",
        description: "Nawabi heritage, architecture and local cuisine.",
      },
      {
        id: 94,
        name: "Prayagraj",
        country: "India",
        description: "Historic river confluence and cultural heritage.",
      },
      {
        id: 95,
        name: "Khajuraho",
        country: "India",
        description: "Historic temples and remarkable sculptures.",
      },
      {
        id: 96,
        name: "Bhopal",
        country: "India",
        description: "Lakes, museums and cultural attractions.",
      },
      {
        id: 97,
        name: "Indore",
        country: "India",
        description: "Food, heritage and vibrant city experiences.",
      },
      {
        id: 98,
        name: "Pachmarhi",
        country: "India",
        description: "Forests, waterfalls and peaceful hill landscapes.",
      },
      {
        id: 99,
        name: "Andaman & Nicobar",
        country: "India",
        description: "Islands, beaches, marine life and tropical landscapes.",
      },
      {
        id: 100,
        name: "Lakshadweep",
        country: "India",
        description: "Tropical islands, beaches and clear waters.",
      },
      {
        id: 101,
        name: "Daman & Diu",
        country: "India",
        description: "Coastal scenery, forts and heritage.",
      },
      {
        id: 102,
        name: "Ranthambore",
        country: "India",
        description: "Wildlife, forests and historic fort landscapes.",
      },
      {
        id: 103,
        name: "Jim Corbett",
        country: "India",
        description: "Wildlife, forests and nature experiences.",
      },
      {
        id: 104,
        name: "Kaziranga",
        country: "India",
        description: "Wildlife, grasslands and natural landscapes.",
      },
      {
        id: 105,
        name: "Bandipur",
        country: "India",
        description: "Forests, wildlife and scenic nature experiences.",
      },
      {
        id: 106,
        name: "Chikmagalur",
        country: "India",
        description: "Coffee plantations, hills and peaceful landscapes.",
      },
      {
        id: 107,
        name: "Gokarna",
        country: "India",
        description: "Beaches, temples and relaxed coastal experiences.",
      }
    ];


  return (

    <Page title="Destinations">

      {error && (

        <p className="error">
          {error}
        </p>

      )}


      <div className="grid">

        {data.map((destination, index) => (

          <article
            className="card"
            key={destination.id || index}
          >

            <h3>
              {destination.name}
            </h3>


            <p>
              {destination.country}
            </p>


            <p className="muted">

              {destination.description ||
                "Discover this destination with TripNest."}

            </p>

          </article>

        ))}

      </div>

    </Page>
  );
}


// =====================================================
// 404 PAGE
// =====================================================

function NotFound() {

  return (

    <Page title="Page not found">

      <div className="card">

        <p className="muted">

          The page you are looking for
          does not exist.

        </p>


        <Link
          className="btn"
          to="/"
        >
          Back to TripNest
        </Link>

      </div>

    </Page>
  );
}


// =====================================================
// APPLICATION ROUTES
// =====================================================

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>


        {/* =============================================
            LANDING PAGE
        ============================================= */}

        <Route
          path="/"
          element={<App />}
        />


        {/* =============================================
            LOGIN
        ============================================= */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* =============================================
            REGISTER
        ============================================= */}

        <Route
          path="/register"
          element={<Register />}
        />


        {/* =============================================
            PROTECTED TRIPS
        ============================================= */}

        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <Trips />
            </ProtectedRoute>
          }
        />


        {/* =============================================
            DESTINATIONS
        ============================================= */}

        <Route
          path="/destinations"
          element={<Destinations />}
        />


        {/* =============================================
            PROTECTED PROFILE
        ============================================= */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />


        {/* =============================================
            PROTECTED SETTINGS
        ============================================= */}

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <AccountSettings />
            </ProtectedRoute>
          }
        />


        {/* =============================================
            404
        ============================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);