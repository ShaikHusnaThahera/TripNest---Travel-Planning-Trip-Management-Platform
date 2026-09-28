export default function Profile() {
    return (
        <div className="container">
            <div className="page-title">
                <h1>My Profile</h1>
            </div>

            <div className="card">
                <h3>Profile Information</h3>
                <p><strong>Name:</strong> User Name</p>
                <p><strong>Email:</strong> user@example.com</p>

                <h3>Travel Preferences</h3>
                <p>Beaches, Mountains, Heritage</p>

                <h3>Favorite Destinations</h3>
                <p>Hyderabad, Goa, Bengaluru</p>
            </div>
        </div>
    );
}