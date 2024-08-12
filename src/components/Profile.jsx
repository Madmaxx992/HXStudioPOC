// Profile.js
import styled from "styled-components";
import profileImage from "../assets/images/profile.png"; // Adjust the path accordingly

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.span`
  margin-left: 8px;
  font-size: 16px;
  color: #fff;
`;

const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Profile = ({ name }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={profileImage} alt={name} />
      <ProfileName>{name}</ProfileName>
    </ProfileWrapper>
  );
};

export default Profile;
