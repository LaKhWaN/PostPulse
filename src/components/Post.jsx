const Post = () => {
  return (
    <div className="card" style={{ background: "#1a2630" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div
                className="col-lg-3"
                style={{ paddingLeft: "25px", paddingRight: "5px" }}
              >
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "52%",
                    margin: "10px",
                    marginRight: "0px",
                  }}
                  src="https://w7.pngwing.com/pngs/639/452/png-transparent-computer-icons-avatar-user-profile-people-icon-child-face-heroes-thumbnail.png"
                  alt="User Avatar"
                />
                <h1
                  style={{ width: "100%", fontSize: "1rem", marginLeft: "0px" }}
                >
                  John Doe
                </h1>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <p
                      style={{
                        fontSize: "10px",
                        color: "var(--bs-dark-bg-subtle)",
                        marginTop: "5px",
                        paddingTop: "5px",
                      }}
                    >
                      Few minutes ago
                    </p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", width: "80%" }}>
                  I think PostPulse is something else and I really like the
                  concept of this.
                  <br />
                  <br />
                  What do you think about this?
                  <br />
                  <br />
                  #PostPulse #Nice
                </p>
                <div className="row">
                  <div className="col d-lg-flex justify-content-lg-start align-items-lg-center">
                    <p></p>
                    <span className="fa-stack">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="d-lg-flex align-items-lg-center fa-stack-1x fa-inverse"
                        style={{ width: "25px", height: "25px" }}
                      >
                        <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path>
                      </svg>
                    </span>
                    <p
                      className="text-start d-lg-flex justify-content-lg-start align-items-lg-center"
                      style={{
                        fontSize: "10px",
                        color: "var(--bs-dark-bg-subtle)",
                        marginTop: "7%",
                        paddingTop: "0px",
                        marginLeft: "3%",
                      }}
                    >
                      21K
                    </p>
                  </div>
                  <div className="col d-lg-flex align-items-lg-center">
                    <p
                      style={{
                        fontSize: "10px",
                        color: "var(--bs-dark-bg-subtle)",
                        marginTop: "5px",
                        paddingTop: "5px",
                      }}
                    >
                      23 comments
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ textAlign: "left" }}>
                    <button
                      className="btn btn-primary"
                      data-bss-hover-animate="pulse"
                      type="button"
                      style={{
                        height: "45.6px",
                        width: "25%",
                        margin: "10px",
                        color: "#f5fcfe",
                        background: "#1a2630",
                        borderStyle: "solid",
                        borderColor: "#28353f",
                        padding: "5px",
                        marginLeft: "0px",
                        fontSize: "0.75rem",
                        borderRadius: "15px",
                      }}
                    >
                      Like
                    </button>
                    <button
                      className="btn btn-primary"
                      data-bss-hover-animate="pulse"
                      type="button"
                      style={{
                        height: "45.6px",
                        width: "25%",
                        margin: "10px",
                        color: "#f5fcfe",
                        background: "#1a2630",
                        borderStyle: "solid",
                        borderColor: "#28353f",
                        padding: "5px",
                        marginLeft: "0px",
                        fontSize: "0.75rem",
                        borderRadius: "15px",
                      }}
                    >
                      Comment
                    </button>
                    <button
                      className="btn btn-primary"
                      data-bss-hover-animate="pulse"
                      type="button"
                      style={{
                        height: "45.6px",
                        width: "25%",
                        margin: "10px",
                        color: "#f5fcfe",
                        background: "#1a2630",
                        borderStyle: "solid",
                        borderColor: "#28353f",
                        padding: "5px",
                        marginLeft: "0px",
                        fontSize: "0.75rem",
                        borderRadius: "15px",
                      }}
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
