import React, { useState,useEffect } from 'react';
import './Profile.css';
import {useUser } from './UserContext';
const Profile = () => {
    const {userInfo} = useUser();
    const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem(`userInfo`)));

  //   useEffect(()=>{
  //     setProfileData(userInfo);
  //   },[]);
    
  // const handleChange = (field, value) => {
  //   setProfileData((prevData) => ({
  //     ...prevData,
  //     [field]: value,
  //   }));
  // };

  const handleSave = () => {
    console.log('Saving profile data:', profileData);
  };

  return (
<>
{ profileData ?( <div className='profile-back'>
      <div className='profile-detail'>
        <div className='profile-pic'>
          <div className='profile-picture'></div>
          <div className='profile-username-pic'>{profileData.username}</div>
        </div>
        <div className='profile-line'></div>
        <div className='profile-userdetail'>
          <div className='profile-name'>
            <div className='profile-username'>Name</div>
            <div className='profile-user-name'>{profileData.first} {profileData.last}</div>
          </div>
          <div className='profile-name'>
            <div className='profile-username'>Gender</div>
            <div className='profile-user-name'>{profileData.gender}</div>
          </div>
          <div className='profile-name'>
            <div className='profile-username'>D.O.B</div>
            <div className='profile-user-name'>{new Date(profileData.dob).toLocaleDateString()}</div>
          </div>
          <div className='profile-name'>
            <div className='profile-username'>Email</div>
            <div className='profile-user-name'>{profileData.email}</div>
          </div>
          <div className='profile-name'>
            <div className='profile-username'>Phone</div>
            <div className='profile-user-name'>{profileData.phone}</div>
          </div>
        </div>

       

      </div>

      <div className='profile-table'>
          <div className='profile-table1'>
            <div className='profile-table-content'></div>
          </div>
          <div className='profile-table1'>
          <div className='profile-table-content'></div>
          </div>

        </div>

    </div>) : (<p>No user data available</p>)}
  
  </>
//     <div>

//     { profileData ?(
//     <div className='profile-div'>
//       <div>
//         <label>Name:</label>
//         <input className='profile-input'
//           type="text"
//           value={profileData.username}
//           onChange={(e) => handleChange('name', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Username:</label>
//         <input className='profile-input'
//           type="text"
//           value={profileData.username}
//           onChange={(e) => handleChange('username', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Gender:</label>
//         <select className='profile-select'
//           value={profileData.gender}
//           onChange={(e) => handleChange('gender', e.target.value)}
//         >
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
//       <div>
//         <label>Date of Birth:</label>
//         <input className='profile-input'
//           type="date"
//           value={profileData.dob}
//           onChange={(e) => handleChange('dob', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Phone Number:</label>
//         <input className='profile-input'
//           type="tel"
//           value={profileData.phone}
//           onChange={(e) => handleChange('phone', e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input className='profile-input'
//           type="email"
//           value={profileData.email}
//           onChange={(e) => handleChange('email', e.target.value)}
//         />
//       </div>
//       <div>
//         <button className="profile-button"onClick={handleSave}>Save</button>
//       </div>
//     </div>) : (<p>No user data available</p>)

// }
//      </div>
  );
};

export default Profile;
