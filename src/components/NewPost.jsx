const NewPost = () => {
  return (
    <div className="card" style={{ background: "#1a2630" }}>
      <div className="card-body">
        <img
          style={{
            height: "50px",
            width: "50px",
            margin: "10px",
            borderRadius: "50%",
          }}
          src="https://cdn5.vectorstock.com/i/1000x1000/00/49/jurist-avatar-icon-flat-style-vector-27140049.jpg"
        />
        <input
          type="text"
          style={{
            width: "80%",
            marginLeft: "10px",
            padding: "10px",
            color: "rgb(245, 252, 254)",
            background: "#28353f",
            borderRadius: "15px",
            borderStyle: "none",
            paddingLeft: "20px",
          }}
          placeholder="What's going on?"
        />
        <button
          className="btn btn-primary"
          data-bss-hover-animate="pulse"
          type="button"
          style={{
            height: "45.6px",
            width: "28%",
            margin: "10px",
            color: "#f5fcfe",
            background: "#1a2630",
            borderStyle: "solid",
            borderColor: "#28353f",
          }}
        >
          Photo
        </button>
        <button
          className="btn btn-primary"
          data-bss-hover-animate="pulse"
          type="button"
          style={{
            height: "45.6px",
            width: "28%",
            margin: "10px",
            color: "#f5fcfe",
            background: "#1a2630",
            borderStyle: "solid",
            borderColor: "#28353f",
          }}
        >
          Video
        </button>
        <button
          className="btn btn-primary"
          data-bss-hover-animate="pulse"
          type="button"
          style={{
            height: "45.6px",
            width: "28%",
            margin: "10px",
            color: "#f5fcfe",
            background: "#1a2630",
            borderStyle: "solid",
            borderColor: "#28353f",
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
