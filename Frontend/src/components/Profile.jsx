import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import "./Profile.css";
const Profile = () => {
  const [profileData, setProfileData] = useState(
    JSON.parse(localStorage.getItem(`userInfo`))
  );
  const [image, setImage] = useState(
    localStorage.getItem("userImage") ||
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  const [isdriver, setdriver] = useState([]);
  const [ispassenger, setpassenger] = useState([]);

  useEffect(() => {
    const fetchdriver = async () => {
      try {
        const driver = profileData.username;
        const res = await fetch(`http://localhost:3300/driverride/${driver}`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const drires = await res.json();
        setdriver(drires);
        console.log("dri", isdriver);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchpassenger = async () => {
      try {
        const passenger = profileData.username;

        const res = await fetch(
          `http://localhost:3300/passengerride/${passenger}`
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const passres = await res.json();
        setpassenger(passres);
        console.log(ispassenger);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpassenger();
    fetchdriver();
  }, [profileData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageData = reader.result;

        // Save image data to localStorage
        localStorage.setItem("userImage", imageData);

        setImage(imageData);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {profileData ? (
        <div className="profile-back">
          <div className="profile-detail">
            <div className="profile-pic">
              <div
                className="profile-picture"
                style={{ backgroundImage: `url(${image})` }}
              >
                <label htmlFor="fileInput" className="edit-icon">
                  <FaPen></FaPen> Edit
                </label>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
              <div className="profile-username-pic">{profileData.username}</div>
            </div>
            <div className="profile-line"></div>
            <div className="profile-userdetail">
              <div className="profile-name">
                <div className="profile-username">Name</div>
                <div className="profile-user-name">
                  {profileData.first} {profileData.last}
                </div>
              </div>
              <div className="profile-name">
                <div className="profile-username">Gender</div>
                <div className="profile-user-name">{profileData.gender}</div>
              </div>
              <div className="profile-name">
                <div className="profile-username">D.O.B</div>
                <div className="profile-user-name">
                  {new Date(profileData.dob).toLocaleDateString()}
                </div>
              </div>
              <div className="profile-name">
                <div className="profile-username">Email</div>
                <div className="profile-user-name">{profileData.email}</div>
              </div>
              <div className="profile-name">
                <div className="profile-username">Phone</div>
                <div className="profile-user-name">{profileData.phone}</div>
              </div>
            </div>
          </div>

          <div className="profile-table">
            <div className="profile-table1">
              <div className="profile-table-content">
                {isdriver.map((isdri, index) => (
                  <>
                    <div key={index}>
                      <div className="textstyle">
                        Driver: {isdri.Driver} &nbsp; &nbsp; &nbsp;
                        &nbsp;Passeneger: {isdri.Passenger} &nbsp; &nbsp; &nbsp;
                        &nbsp;Seats Date: {isdri.Date} &nbsp; &nbsp; &nbsp;
                        &nbsp; Amount: {isdri.Amount}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="profile-table1">
              <div className="profile-table-content"></div>
            </div>
          </div>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </>
  );
};

export default Profile;
