import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="ProfileImg">
          <img src={user.avatar_url} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-name">{user.name}</div>
        <div className="profile-username">@{user.login}</div>
      </div>
      <div className="stats">
        <div>
          <p>{user.followers}</p>
          <div style={{ backgroundColor: "#a9a9a9", width: "110px" }}>
            <p style={{ color: "Black" }}>Followers</p>
          </div>
        </div>
        <div>
          <p>{user.following}</p>
          <div style={{ backgroundColor: "#a9a9a9", width: "110px" }}>
            <p style={{ color: "Black" }}>Following</p>
          </div>
        </div>
        <div>
          <p>{user.public_repos}</p>
          <div style={{ backgroundColor: "#a9a9a9", width: "110px" }}>
            <p style={{ color: "Black" }}>Repositories</p>
          </div>
        </div>
      </div>

      <div className="info_bio">
      <div className="left-info" style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '10px', width: '100%' }}>
  <p className="bold-heading">Email: {user.email}</p>
  <p className="bold-heading">Organization: {user.company}</p>
  <p className="bold-heading">Location: {user.location}</p>
  <p className="bold-heading">Joined Date: {new Date(user.created_at).toLocaleDateString()}</p>
  <p className="bold-heading">Twitter: @{user.twitter_username}</p>
  <p className="bold-heading">Website: {user.blog}</p>
</div>

        <div className="right-info">
          <h2 className="bold-heading">Bio:</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            tincidunt arcu non sodales neque sodales. Hendrerit dolor magna eget
            est lorem ipsum dolor sit. Consectetur adipiscing elit pellentesque
            habitant morbi tristique. A iaculis at erat pellentesque adipiscing
            commodo. Lobortis feugiat vivamus at augue eget arcu dictum varius
            duis. Congue mauris rhoncus aenean vel sed do.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
