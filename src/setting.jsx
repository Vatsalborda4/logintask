import React, { useState } from "react";
import Header from "./header";

const Setting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <>
      <div className="dashboard">
        <Header />
        <div className="dashboard-right">
          <div className="dashbord-right-top">
            <span className="arrow">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6375 9.00006C15.6356 9.14864 15.5757 9.29058 15.4706 9.39566C15.3656 9.50073 15.2236 9.56061 15.075 9.56256H8.95505V12.0001C8.9609 12.0894 8.93852 12.1784 8.89108 12.2544C8.84364 12.3304 8.77352 12.3895 8.69064 12.4235C8.60775 12.4575 8.51629 12.4646 8.42915 12.4438C8.34202 12.423 8.26363 12.3753 8.20505 12.3076L5.20505 9.30756C5.12627 9.22758 5.08211 9.11982 5.08211 9.00756C5.08211 8.89529 5.12627 8.78753 5.20505 8.70756L8.20505 5.70756C8.26286 5.64104 8.33981 5.59401 8.42538 5.57291C8.51095 5.55182 8.60094 5.55768 8.68305 5.5897C8.76515 5.62172 8.83536 5.67834 8.88405 5.75179C8.93274 5.82525 8.95754 5.91196 8.95505 6.00006V8.42256H15.075C15.1499 8.42353 15.2238 8.43925 15.2926 8.4688C15.3614 8.49835 15.4237 8.54117 15.4759 8.59479C15.5282 8.64842 15.5693 8.71181 15.597 8.78135C15.6248 8.85088 15.6385 8.9252 15.6375 9.00006ZM2.92505 3.63006C2.77586 3.63006 2.63279 3.68932 2.5273 3.79481C2.42181 3.9003 2.36255 4.04337 2.36255 4.19256V13.8076C2.36255 13.9567 2.42181 14.0998 2.5273 14.2053C2.63279 14.3108 2.77586 14.3701 2.92505 14.3701C3.07423 14.3701 3.21731 14.3108 3.3228 14.2053C3.42829 14.0998 3.48755 13.9567 3.48755 13.8076V4.19256C3.48856 4.11841 3.4747 4.04481 3.44679 3.97611C3.41888 3.90741 3.37748 3.845 3.32504 3.79256C3.27261 3.74013 3.2102 3.69873 3.1415 3.67082C3.07279 3.64291 2.9992 3.62905 2.92505 3.63006Z"
                  fill="#99A1B7"
                />
              </svg>
            </span>
            <div className="text">Settings</div>
            <div className="icon">
              <div className="bell" onClick={() => setShowNotifications(!showNotifications)}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.7491 17.7096V17.005C26.7491 13.1362 23.7274 10 20 10C16.2726 10 13.2509 13.1362 13.2509 17.005V17.7096C13.2509 18.5552 13.0097 19.3818 12.5578 20.0854L11.4504 21.8095C10.4388 23.3843 11.211 25.5249 12.9704 26.0229C17.5727 27.3257 22.4273 27.3257 27.0296 26.0229C28.789 25.5249 29.5612 23.3843 28.5496 21.8095L27.4422 20.0854C26.9903 19.3818 26.7491 18.5552 26.7491 17.7096Z"
                    stroke="#99A1B7"
                    stroke-width="1.5"
                  />
                  <path
                    d="M15.5 27C16.155 28.7478 17.9225 30 20 30C22.0775 30 23.845 28.7478 24.5 27"
                    stroke="#99A1B7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <circle
                    cx="27"
                    cy="13"
                    r="4.5"
                    fill="url(#paint0_linear_23_2396)"
                    stroke="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_23_2396"
                      x1="23"
                      y1="9"
                      x2="32.3665"
                      y2="14.789"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#00AEEF" />
                      <stop offset="1" stop-color="#007FC4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {showNotifications && (
    <div className="notification-text">
                <h2>Notifications</h2>
                <ul>
                  <li className="notification-item">
                    <h3>Optio eum repudiandae harum.</h3>
                    <p>
                      Dolores nostrum rerum dignissimos molestiae. Eligendi
                      neque vel deleniti nisi ut sunt et.
                    </p>
                    <span>6 mins ago</span>
                  </li>
                  <li className="notification-item">
                    <h3>Dicta perspiciatis in.</h3>
                    <p>
                      Qui aperiam voluptatem aspernatur quia veniam quos neque
                      rerum.
                    </p>
                    <span>30 mins ago</span>
                  </li>
                  <li className="notification-item2">
                    <h3>Nisi nihil ipsa maiores illo quo harum nisi.</h3>
                    <p>
                      Provident quam nisi. Dolorem totam quia sed quos aut
                      aliquam accusantium.
                    </p>
                    <span>1 hour ago</span>
                  </li>
                  <li className="notification-item2">
                    <h3>Doloremque ut distinctio est omnis odio.</h3>
                    <p>Consectetur architecto a. Et facilis velit quos corporis qui. Ullam et illo.</p>
                    <span>
                      2 weeks ago
                    </span>
                  </li>
                </ul>
              </div>
)}
              <div className="cover-image">
                <img
                  src="assets\images\cover.jpg"
                  alt="dashboard-cover-img"
                  className="cover-inner-image"
                />
              </div>
            </div>
          </div>
          <div className="dashbord-right-bottom">
            <div className="text lead-margin">
              <div className="text-first">
                <h2>Settings</h2>
                <p>Central Hub for Personal Customization</p>
              </div>
            </div>
            <div className="profile-photo">
              <div className="profile-cover-photo">
                <img
                  src="assets\images\cover.jpg"
                  alt="profile-cover-photo"
                  className="profile-cover"
                />
              </div>
              <div className="profile-text">
                <div className="profile-button">
                  <button className="profile-btn">Upload New Photo</button>
                  <input type="reset" value="Reset" />
                </div>
                <p>Allowed JPG, GIF or PNG. Max size of 800KB</p>
              </div>
            </div>
            <div className="border"></div>
            <div className="profile-info">
              <h2>Profile Info</h2>
              <div className="profile-info-input">
                <div className="name1">
                  <label htmlFor="name">First Name</label>
                  <input type="text" id="name" placeholder="Enter first name" />
                </div>
                <div className="name">
                  <label htmlFor="name">Last Name</label>
                  <input type="text" id="name" placeholder="Enter last name" />
                </div>
              </div>
            </div>
            <div className="border"></div>
            <div className="profile-security">
              <h2>Security</h2>
              <div className="profile-security-input">
                <div className="password1">
                  <label>Current Password </label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="reset-emailtext"
                    />
                    <span className="icon-svg1" onClick={togglePassword}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z"
                          fill="#111827"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                          fill="#111827"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="password">
                  <label>New Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="reset-emailtext"
                    />
                    <span className="icon-svg1" onClick={togglePassword}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z"
                          fill="#111827"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                          fill="#111827"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="password">
                  <label>Confirm Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="reset-emailtext"
                    />
                    <span className="icon-svg1" onClick={togglePassword}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z"
                          fill="#111827"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                          fill="#111827"
                        />
                      </svg>
                    </span>
                  </div>    
                </div>
              </div>
                <h3>
                    Password Requirements:
                </h3>
                <ul className="password-requirements">
                    <li>Minimum 8 characters long - the more, the better</li>
                    <li>At least one lowercase character</li>
                    <li>At least one number, symbol, or whitespace character</li>
                </ul>
                <div className="profile-submit">
                    <button className="profile-btn">Save Changes</button>
                    <input type="reset" value="Reset" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
