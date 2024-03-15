import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  console.log(user.following);
  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <div className="ProfileImg">
          {" "}
          <img src={user.avatar_url} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-name">{user.name}</div>
        <div className="profile-username">@{user.login}</div>
      </div>
      <div className="profile-details">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div>
            <p>{user.followers}</p>
            <p> Followers</p>
          </div>
          <div>
            <p>{user.following}</p>
            <p>Following</p>
          </div>
          <div>
            <p>{user.public_repos}</p>
            <p> Repositories</p>
          </div>
        </div>

        <p>Email: {user.email}</p>
        <p>Organization: {user.company}</p>
        <p>Location: {user.location}</p>
        <p>Joined Date: {new Date(user.created_at).toLocaleDateString()}</p>
        <p>Twitter: @{user.twitter_username}</p>
        <p>Website: {user.blog}</p>
        <p>Bio: {user.bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
