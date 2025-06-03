import React, { useState } from 'react';
import logo from '../assets/images/Gologo.png';
import arrow from '../assets/images/arrow.png';
import Background from '../assets/images/background.png';
import profilePic from '../assets/images/profilepic.jpg';
import { Link } from 'react-router-dom';
import { useEditingContext } from '../contexts/editingContext.jsx';
import axiosClient from '../axiosClient.js';

export default function Profile() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    extensionName: '',
    gender: '',
    age: '',
    dateOfBirth: '',
    nationality: '',
    email: '',
    contactNumber: '',
    address: '',
    province: '',
    city: '',
    barangay: '',
    zipCode: '',
    emergencyContactPerson: '',
    emergencyAddress: '',
    emergencyContactNumber: '',
  });

  const { isEditing, setIsEditing } = useEditingContext();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDone = async () => {
    try {
      await updateProfileApi(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const updateProfileApi = async (data) => {
    const response = await axiosClient.put('/employees/updateProfile', data);
    return response.data;
  };

  return (
    <div>
      {/* Header Section */}
      <section className="header-section-login_7">
        <div className="top-shape-login_7"></div>
        <div className="header-container-login_6">
          <img src={logo} alt="header Logo" className="logo-signup_7" />
          <img src={arrow} alt="header-arrow_7" />
        </div>
        <Link to="/dashboard" className="back-button_7">Back</Link>
      </section>

      {/* Body Section */}
      <section className="container-login_7">
        <div className="body-background_7">
          <img src={Background} alt="body background" className="background-signup_7" />
        </div>
        <div className="green-employee-profile_7">
          <div className="Profile-Picture_7">
            <img src={profilePic} alt="profile" className="pic_7" />
            <span className="edit-profile-text_7">Edit Profile</span>
          </div>
        </div>
        <div className="grey-fade-employee_7"></div>

        <div className="Container_7">
          <span className="top-text_7">Complete your profile so others can learn more about you.</span>

          <button onClick={isEditing ? handleDone : handleEdit} className="edit-button_7">
            <span className="done-button_7">{isEditing ? 'Done' : 'Edit'}</span>
          </button>

          <div className="White-box_7">
            {isEditing ? (
              <input
                type="text"
                placeholder="Last Name"
                className="LastName_7"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            ) : (
              <span className="LastName_7">{formData.lastName || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="First Name"
                className="FirstName_7"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            ) : (
              <span className="FirstName_7">{formData.firstName || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Middle Name"
                className="MiddleName_7"
                value={formData.middleName}
                onChange={(e) => handleInputChange('middleName', e.target.value)}
              />
            ) : (
              <span className="MiddleName_7">{formData.middleName || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Extension Name"
                className="Extension_7"
                value={formData.extensionName}
                onChange={(e) => handleInputChange('extensionName', e.target.value)}
              />
            ) : (
              <span className="Extension_7">{formData.extensionName || 'N/A'}</span>
            )}
            {isEditing ? (
              <select
                className="Gender_7"
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <span className="Gender_7">{formData.gender || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Age"
                className="Age_7"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
              />
            ) : (
              <span className="Age_7">{formData.age || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Date of Birth"
                className="DateofBirth_7"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            ) : (
              <span className="DateofBirth_7">{formData.dateOfBirth || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Nationality"
                className="Nationality_7"
                value={formData.nationality}
                onChange={(e) => handleInputChange('nationality', e.target.value)}
              />
            ) : (
              <span className="Nationality_7">{formData.nationality || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Email"
                className="Email_7"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            ) : (
              <span className="Email_7">{formData.email || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Contact Number"
                className="ContactNumber_7"
                value={formData.contactNumber}
                onChange={(e) => handleInputChange('contactNumber', e.target.value)}
              />
            ) : (
              <span className="ContactNumber_7">{formData.contactNumber || 'N/A'}</span>
            )}
            <div className="Division-Line1"></div>
            {isEditing ? (
              <input
                type="text"
                placeholder="Address"
                className="Address_7"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            ) : (
              <span className="Address_7">{formData.address || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Province/Region"
                className="Province_7"
                value={formData.province}
                onChange={(e) => handleInputChange('province', e.target.value)}
              />
            ) : (
              <span className="Province_7">{formData.province || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="City"
                className="City_7"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
              />
            ) : (
              <span className="City_7">{formData.city || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Barangay"
                className="Barangay_7"
                value={formData.barangay}
                onChange={(e) => handleInputChange('barangay', e.target.value)}
              />
            ) : (
              <span className="Barangay_7">{formData.barangay || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="ZipCode"
                className="Zip-Code_7"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
              />
            ) : (
              <span className="Zip-Code_7">{formData.zipCode || 'N/A'}</span>
            )}
            <div className="Division-Line2"></div>
            {isEditing ? (
              <input
                type="text"
                placeholder="Emergency Contact Person"
                className="Emergency-contact_7"
                value={formData.emergencyContactPerson}
                onChange={(e) => handleInputChange('emergencyContactPerson', e.target.value)}
              />
            ) : (
              <span className="Emergency-contact_7">{formData.emergencyContactPerson || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Emergency Address"
                className="Emergency-address_7"
                value={formData.emergencyAddress}
                onChange={(e) => handleInputChange('emergencyAddress', e.target.value)}
              />
            ) : (
              <span className="Emergency-address_7">{formData.emergencyAddress || 'N/A'}</span>
            )}
            {isEditing ? (
              <input
                type="text"
                placeholder="Emergency Contact Number"
                className="Emergency-num_7"
                value={formData.emergencyContactNumber}
                onChange={(e) => handleInputChange('emergencyContactNumber', e.target.value)}
              />
            ) : (
              <span className="Emergency-num_7">{formData.emergencyContactNumber || 'N/A'}</span>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
