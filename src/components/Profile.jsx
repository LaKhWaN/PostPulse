const Profile = () => {
    return (
        <div className="card" style={{ background: "#1a2630" }}>
            <div className="card-body justify-content-lg-end">
                <div className="row">
                    <div
                        className="col-lg-6"
                        style={{ borderRight: "2px solid #28353f" }}
                    >
                        <img
                            style={{
                                height: "50px",
                                width: "50px",
                                borderRadius: "52%",
                                margin: "10px",
                            }}
                            src="https://cdn5.vectorstock.com/i/1000x1000/00/49/jurist-avatar-icon-flat-style-vector-27140049.jpg"
                        />
                        <h1 style={{ width: "75%", fontSize: "1rem", marginLeft: "0px" }}>
                            John Doe
                        </h1>
                        <p
                            style={{
                                color: "var(--bs-dark-bg-subtle)",
                                fontSize: "0.8rem",
                                width: "50%",
                            }}
                        >
                            @johndoe
                        </p>
                    </div>
                    <div className="col-lg-6 text-start d-lg-flex justify-content-lg-center align-items-lg-center">
                        <div className="row">
                            <div
                                className="col-lg-12 text-center"
                                style={{
                                    borderRightWidth: "2px",
                                    borderRightStyle: "none",
                                    borderBottom: "2px solid #28353f",
                                }}
                            >
                                <h1 style={{ fontSize: "0.8rem" }}>6,669</h1>
                                <p
                                    style={{
                                        color: "var(--bs-dark-bg-subtle)",
                                        fontSize: "0.7rem",
                                    }}
                                >
                                    Following
                                </p>
                            </div>
                            <div
                                className="col-lg-12 text-center"
                                style={{
                                    borderRight: "2px none #28353f",
                                    marginTop: "0px",
                                    paddingTop: "10px",
                                }}
                            >
                                <h1 style={{ fontSize: "0.8rem" }}>9,989</h1>
                                <p
                                    style={{
                                        color: "var(--bs-dark-bg-subtle)",
                                        fontSize: "0.7rem",
                                    }}
                                >
                                    Followers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p style={{ color: "var(--bs-dark-bg-subtle)", fontSize: "0.8rem" }}>
                    Just live your life, don't make it more shittier 💖
                </p>
                <hr />
                <div className="row">
                    <div className="col text-center">
                        <a href="#" style={{ color: "#007df8" }}>
                            My Profile
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
