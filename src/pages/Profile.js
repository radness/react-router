import React from "react";

const data = {
  radness: {
    name: "신영훈",
    description: "이것 저것 다하는 개발자"
  },
  inhye: {
    name: "전인혜",
    description: "사랑하는 여자친구"
  }
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.username})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
