import Profile from "./Profile";
import NewPost from "./NewPost";
import Post from "./Post";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function makePost(paras) {
  return (
    <>
      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col-md-12" style={{ marginBottom: "1rem" }}>
          {<Post />}
        </div>
      </div>
    </>
  );
}
function Feed() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, [localStorage.getItem("auth")]);
  return (
    <>
      <section className="py-5" style={{ marginTop: "5rem" }}>
        <div className="container">
          <div className="row">
            <div className="col col-md-3" style={{ marginLeft: "8%" }}>
              <div className="row">
                <div className="col-md-12">{<Profile />}</div>
              </div>
            </div>
            <div className="col col-md-6">
              <div className="row">
                <div className="col-md-12 col-lg-12">{<NewPost />}</div>
              </div>
              {makePost(10)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feed;
