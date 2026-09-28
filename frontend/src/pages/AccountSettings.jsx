import React from "react";

export default function AccountSettings() {
    const [name, setName] = React.useState("User Name");
    const [email, setEmail] = React.useState("user@example.com");
    const [message, setMessage] = React.useState("");

    function saveSettings(e) {
        e.preventDefault();
        setMessage("Account settings saved successfully!");
    }

    return (
        <div className="container">
            <div className="page-title">
                <h1>Account Settings</h1>
            </div>

            <form className="form" onSubmit={saveSettings}>
                <div className="field">
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label>New Password</label>
                    <input
                        type="password"
                        placeholder="Enter new password"
                    />
                </div>

                <button className="btn" type="submit">
                    Save Changes
                </button>

                {message && <p className="success">{message}</p>}
            </form>
        </div>
    );
}