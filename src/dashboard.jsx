import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./header";

const data = [
  { name: "Jan", value: 1000 },
  { name: "Feb", value: 1200 },
  { name: "Mar", value: 800 },
  { name: "Apr", value: 1725 },
  { name: "May", value: 950 },
];

const Dashboard = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2025-01-20"));
  const [endDate, setEndDate] = useState(new Date("2025-02-09"));
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <>
      <div>
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
            <div className="text">Dashboard</div>
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
            <div className="text">
              <div className="text-first">
                <h2>Tauk Client Dashboard</h2>
                <p>Central Hub for Personal Customization</p>
              </div>
              <div
                className="date"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <span className="date-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M10.6386 1.94707H10.8609L11.8262 2.09928C12.7183 2.3556 13.5026 2.89358 14.0612 3.63227C14.6198 4.37096 14.9225 5.2704 14.9238 6.19526V11.2045C14.9201 12.3326 14.4692 13.4135 13.6691 14.2118C12.8691 15.0101 11.7848 15.4611 10.6525 15.4666H5.33251C4.19537 15.4684 3.10397 15.0206 2.29794 14.2215C1.49191 13.4224 1.03713 12.3374 1.03345 11.2045V6.19526C1.0347 5.2704 1.33741 4.37096 1.89604 3.63227C2.45466 2.89358 3.23899 2.3556 4.13099 2.09928L5.09637 1.93323H5.31862H7.62442L8.59674 1.94707H10.6386Z"
                      fill="#78829D"
                    />
                    <path
                      d="M11.878 2.0272V0.988145C11.8637 0.869619 11.8063 0.760421 11.7167 0.681204C11.627 0.601986 11.5113 0.55824 11.3915 0.55824C11.2717 0.55824 11.156 0.601986 11.0663 0.681204C10.9767 0.760421 10.9193 0.869619 10.905 0.988145V1.87378H10.681H8.623V0.988145C8.623 0.858681 8.57137 0.734519 8.47948 0.642974C8.38759 0.551429 8.26296 0.5 8.133 0.5C8.00304 0.5 7.87841 0.551429 7.78652 0.642974C7.69462 0.734519 7.643 0.858681 7.643 0.988145V1.85983H5.319H5.095V0.988145C5.0807 0.869619 5.0233 0.760421 4.93366 0.681204C4.84401 0.601986 4.72833 0.55824 4.6085 0.55824C4.48867 0.55824 4.37299 0.601986 4.28334 0.681204C4.1937 0.760421 4.1363 0.869619 4.122 0.988145V2.0272C3.22295 2.28554 2.43243 2.82777 1.8694 3.57229C1.30636 4.31681 1.00126 5.22335 1 6.15551V11.2043C1.00371 12.3461 1.46208 13.4397 2.27447 14.2451C3.08687 15.0505 4.18688 15.5018 5.333 15.5H10.695C11.8363 15.4945 12.9291 15.0399 13.7354 14.2353C14.5418 13.4307 14.9963 12.3413 15 11.2043V6.15551C14.9987 5.22335 14.6936 4.31681 14.1306 3.57229C13.5676 2.82777 12.7771 2.28554 11.878 2.0272ZM4.122 3.0523V3.61715C4.1363 3.73568 4.1937 3.84488 4.28334 3.9241C4.37299 4.00331 4.48867 4.04706 4.6085 4.04706C4.72833 4.04706 4.84401 4.00331 4.93366 3.9241C5.0233 3.84488 5.0807 3.73568 5.095 3.61715V2.85007C5.172 2.85007 5.242 2.85007 5.319 2.85007H7.643V3.61715C7.643 3.74662 7.69462 3.87078 7.78652 3.96232C7.87841 4.05387 8.00304 4.1053 8.133 4.1053C8.26296 4.1053 8.38759 4.05387 8.47948 3.96232C8.57137 3.87078 8.623 3.74662 8.623 3.61715V2.82915H10.681C10.758 2.82915 10.828 2.82915 10.905 2.82915V3.59623C10.9193 3.71476 10.9767 3.82396 11.0663 3.90317C11.156 3.98239 11.2717 4.02614 11.3915 4.02614C11.5113 4.02614 11.627 3.98239 11.7167 3.90317C11.8063 3.82396 11.8637 3.71476 11.878 3.59623V3.0523C12.4281 3.26547 12.912 3.61954 13.2807 4.07872C13.6495 4.53789 13.89 5.0859 13.978 5.66736H2.008C2.09728 5.08436 2.3399 4.5353 2.71121 4.07599C3.08251 3.61667 3.56927 3.26348 4.122 3.0523ZM10.681 14.5307H5.319C4.43094 14.5325 3.57841 14.1833 2.94849 13.5597C2.31856 12.9361 1.96271 12.089 1.959 11.2043V6.60878H14.041V11.1764C14.0428 11.6168 13.9573 12.0533 13.7891 12.4606C13.621 12.8679 13.3737 13.2381 13.0614 13.5499C12.7491 13.8616 12.3781 14.1088 11.9695 14.2771C11.561 14.4454 11.1231 14.5316 10.681 14.5307ZM6.313 9.28661C6.31718 9.4074 6.28505 9.52669 6.22073 9.62918C6.15641 9.73166 6.06282 9.81267 5.95197 9.86181C5.84113 9.91095 5.71807 9.92599 5.59859 9.905C5.4791 9.88401 5.36864 9.82794 5.28135 9.74398C5.19407 9.66003 5.13395 9.55202 5.1087 9.43379C5.08345 9.31557 5.09422 9.19253 5.13963 9.08045C5.18504 8.96837 5.26302 8.87235 5.36358 8.80471C5.46413 8.73708 5.58267 8.70091 5.704 8.70083C5.86194 8.70074 6.01375 8.76178 6.12737 8.87107C6.24099 8.98036 6.30755 9.12936 6.313 9.28661ZM8.595 9.28661C8.60056 9.40989 8.56868 9.53199 8.50352 9.63695C8.43836 9.74191 8.34295 9.82486 8.22974 9.87497C8.11653 9.92508 7.99079 9.94002 7.86893 9.91784C7.74706 9.89567 7.63474 9.8374 7.54663 9.75065C7.45852 9.66391 7.3987 9.55271 7.375 9.43158C7.3513 9.31045 7.36481 9.18501 7.41377 9.07164C7.46272 8.95828 7.54485 8.86225 7.64944 8.7961C7.75402 8.72995 7.87619 8.69675 8 8.70083C8.15551 8.7043 8.30379 8.76692 8.41443 8.87585C8.52507 8.98477 8.58968 9.13174 8.595 9.28661ZM10.891 9.28661C10.8938 9.40883 10.8599 9.5291 10.7936 9.63198C10.7273 9.73487 10.6317 9.81569 10.519 9.86407C10.4063 9.91246 10.2816 9.92621 10.161 9.90356C10.0404 9.88091 9.92938 9.82289 9.84211 9.73695C9.75483 9.651 9.69531 9.54104 9.67118 9.42118C9.64705 9.30131 9.65941 9.17699 9.70668 9.06417C9.75394 8.95134 9.83396 8.85515 9.93646 8.78794C10.039 8.72072 10.1593 8.68553 10.282 8.68689C10.4423 8.68688 10.5962 8.74984 10.7102 8.86211C10.8242 8.97438 10.8892 9.12691 10.891 9.28661ZM6.306 11.539C6.30509 11.6178 6.28861 11.6956 6.25751 11.768C6.22641 11.8404 6.18129 11.906 6.12474 11.9611C6.06819 12.0161 6.00131 12.0595 5.92791 12.0888C5.85452 12.1181 5.77606 12.1327 5.697 12.1318C5.57795 12.1304 5.46198 12.0939 5.36376 12.0268C5.26555 11.9598 5.18949 11.8652 5.14522 11.7551C5.10094 11.645 5.09043 11.5243 5.11502 11.4083C5.1396 11.2922 5.19818 11.186 5.28334 11.1031C5.3685 11.0203 5.47642 10.9644 5.59346 10.9426C5.71049 10.9208 5.83139 10.9341 5.94085 10.9807C6.05031 11.0274 6.14343 11.1053 6.20842 11.2047C6.27342 11.3041 6.30738 11.4204 6.306 11.539ZM8.588 11.539C8.59078 11.661 8.55703 11.781 8.49106 11.8837C8.42509 11.9864 8.32988 12.0673 8.2176 12.1158C8.10531 12.1644 7.98104 12.1786 7.86064 12.1565C7.74024 12.1344 7.62917 12.0771 7.54162 11.9919C7.45406 11.9066 7.39399 11.7973 7.36906 11.6779C7.34414 11.5585 7.35549 11.4344 7.40167 11.3215C7.44786 11.2085 7.52678 11.1119 7.62836 11.0438C7.72994 10.9757 7.84958 10.9394 7.972 10.9393C8.05223 10.9375 8.13202 10.9516 8.20668 10.9809C8.28134 11.0102 8.34937 11.0541 8.40676 11.11C8.46415 11.1658 8.50975 11.2326 8.54087 11.3063C8.572 11.38 8.58802 11.4591 8.588 11.539ZM10.884 11.539C10.8868 11.661 10.853 11.781 10.7871 11.8837C10.7211 11.9864 10.6259 12.0673 10.5136 12.1158C10.4013 12.1644 10.277 12.1786 10.1566 12.1565C10.0362 12.1344 9.92517 12.0771 9.83762 11.9919C9.75006 11.9066 9.68999 11.7973 9.66506 11.6779C9.64014 11.5585 9.65149 11.4344 9.69767 11.3215C9.74386 11.2085 9.82278 11.1119 9.92436 11.0438C10.0259 10.9757 10.1456 10.9394 10.268 10.9393C10.3482 10.9375 10.428 10.9516 10.5027 10.9809C10.5773 11.0102 10.6454 11.0541 10.7028 11.11C10.7601 11.1658 10.8057 11.2326 10.8369 11.3063C10.868 11.38 10.884 11.4591 10.884 11.539Z"
                      fill="#78829D"
                    />
                  </svg>
                </span>
                <span className="date-text">{startDate.toDateString()}</span>
                <span className="date-text">-</span>
                <span className="date-text">{endDate.toDateString()}</span>
              </div>
              {showCalendar && (
                <div className="calendar-popup">
                  <p>Select Start Date:</p>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <p>Select End Date:</p>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              )}
            </div>
            <div className="dashbord-inner">
              <div className="item item-1">
                <div className="item-inner">
                  <span className="item-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66675 5L15.6667 12L9.66675 19"
                        stroke="#99A1B7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="44" height="44" rx="12" fill="#9873D0" />
                      <circle
                        cx="22"
                        cy="32"
                        r="2.5"
                        stroke="white"
                        stroke-width="1.8"
                      />
                      <circle
                        cx="14.5"
                        cy="14.5"
                        r="1.25"
                        stroke="white"
                        stroke-width="1.8"
                      />
                      <path
                        d="M21.1 29.5C21.1 29.9971 21.5029 30.4 22 30.4C22.4971 30.4 22.9 29.9971 22.9 29.5H21.1ZM22 9.5L22.7488 9.00077C22.5819 8.75039 22.3009 8.6 22 8.6C21.6991 8.6 21.4181 8.75039 21.2512 9.00077L22 9.5ZM23.7512 13.7492C24.0269 14.1628 24.5857 14.2746 24.9992 13.9988C25.4128 13.7231 25.5246 13.1643 25.2488 12.7508L23.7512 13.7492ZM18.7512 12.7508C18.4754 13.1643 18.5872 13.7231 19.0008 13.9988C19.4143 14.2746 19.9731 14.1628 20.2488 13.7492L18.7512 12.7508ZM22 9.5L21.2512 9.99923L23.7512 13.7492L24.5 13.25L25.2488 12.7508L22.7488 9.00077L22 9.5ZM22 9.5L21.2512 9.00077L18.7512 12.7508L19.5 13.25L20.2488 13.7492L22.7488 9.99923L22 9.5ZM22 29.5H22.9V25.75H22H21.1V29.5H22ZM22 25.75H22.9V9.5H22H21.1V25.75H22Z"
                        fill="white"
                      />
                      <path
                        d="M14.5 15.75V18.9481C14.5 20.0242 15.1886 20.9795 16.2094 21.3198L20.2906 22.6802C21.3114 23.0205 22 23.9758 22 25.0519V25.75"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                      <path
                        d="M29.5 19.5V22.6981C29.5 23.7742 28.8114 24.7295 27.7906 25.0698L23.7094 26.4302C22.6886 26.7705 22 27.7258 22 28.8019V29.5"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                      <path
                        d="M28.25 18.25C28.25 17.6607 28.25 17.3661 28.4331 17.1831C28.6161 17 28.9107 17 29.5 17C30.0893 17 30.3839 17 30.5669 17.1831C30.75 17.3661 30.75 17.6607 30.75 18.25C30.75 18.8393 30.75 19.1339 30.5669 19.3169C30.3839 19.5 30.0893 19.5 29.5 19.5C28.9107 19.5 28.6161 19.5 28.4331 19.3169C28.25 19.1339 28.25 18.8393 28.25 18.25Z"
                        stroke="white"
                        stroke-width="1.8"
                      />
                    </svg>
                  </span>
                  <div className="item-text">
                    <h3>253</h3>
                    <p>Total Leads</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <span className="item-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66675 5L15.6667 12L9.66675 19"
                        stroke="#99A1B7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="45"
                      height="44"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.666504"
                        width="44"
                        height="44"
                        rx="12"
                        fill="#FF8439"
                      />
                      <path
                        d="M25.7032 30.1095L24.8021 31.0105C21.8163 33.9964 16.9752 33.9964 13.9894 31.0105C11.0035 28.0247 11.0035 23.1837 13.9894 20.1978L14.8905 19.2968"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                      <path
                        d="M20.2969 24.7031L25.7032 19.2968"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                      <path
                        d="M20.2969 13.8905L21.1979 12.9894C24.1838 10.0035 29.0248 10.0035 32.0107 12.9894C34.9965 15.9752 34.9965 20.8163 32.0107 23.8021L31.1096 24.7032"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <div className="item-text">
                    <h3>178</h3>
                    <p>Callable Leads</p>
                  </div>
                </div>
              </div>
              <div className="item item-2">
                <div className="item-inner">
                  <span className="item-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66675 5L15.6667 12L9.66675 19"
                        stroke="#99A1B7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      width="45"
                      height="44"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.333252"
                        width="44"
                        height="44"
                        rx="12"
                        fill="#006AE6"
                      />
                      <path
                        d="M10.75 34.5H33.25"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.75 20.75C10.75 19.5715 10.75 18.9822 11.1161 18.6161C11.4822 18.25 12.0715 18.25 13.25 18.25C14.4285 18.25 15.0178 18.25 15.3839 18.6161C15.75 18.9822 15.75 19.5715 15.75 20.75V28.25C15.75 29.4285 15.75 30.0178 15.3839 30.3839C15.0178 30.75 14.4285 30.75 13.25 30.75C12.0715 30.75 11.4822 30.75 11.1161 30.3839C10.75 30.0178 10.75 29.4285 10.75 28.25V20.75Z"
                        stroke="white"
                        stroke-width="1.8"
                      />
                      <path
                        d="M19.5 15.75C19.5 14.5715 19.5 13.9822 19.8661 13.6161C20.2322 13.25 20.8215 13.25 22 13.25C23.1785 13.25 23.7678 13.25 24.1339 13.6161C24.5 13.9822 24.5 14.5715 24.5 15.75V28.25C24.5 29.4285 24.5 30.0178 24.1339 30.3839C23.7678 30.75 23.1785 30.75 22 30.75C20.8215 30.75 20.2322 30.75 19.8661 30.3839C19.5 30.0178 19.5 29.4285 19.5 28.25V15.75Z"
                        stroke="white"
                        stroke-width="1.8"
                      />
                      <path
                        d="M28.25 12C28.25 10.8215 28.25 10.2322 28.6161 9.86612C28.9822 9.5 29.5715 9.5 30.75 9.5C31.9285 9.5 32.5178 9.5 32.8839 9.86612C33.25 10.2322 33.25 10.8215 33.25 12V28.25C33.25 29.4285 33.25 30.0178 32.8839 30.3839C32.5178 30.75 31.9285 30.75 30.75 30.75C29.5715 30.75 28.9822 30.75 28.6161 30.3839C28.25 30.0178 28.25 29.4285 28.25 28.25V12Z"
                        stroke="white"
                        stroke-width="1.8"
                      />
                    </svg>
                  </span>
                  <div className="item-text">
                    <h3>42</h3>
                    <p>Total Sales</p>
                  </div>
                </div>
              </div>
              <div className="item item-1">
                <div className="item-inner">
                  <span>
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="44" height="44" rx="12" fill="#4B9C19" />
                      <path
                        d="M9.5 22C9.5 16.1074 9.5 13.1612 11.3306 11.3306C13.1612 9.5 16.1074 9.5 22 9.5C27.8926 9.5 30.8388 9.5 32.6694 11.3306C34.5 13.1612 34.5 16.1074 34.5 22C34.5 27.8926 34.5 30.8388 32.6694 32.6694C30.8388 34.5 27.8926 34.5 22 34.5C16.1074 34.5 13.1612 34.5 11.3306 32.6694C9.5 30.8388 9.5 27.8926 9.5 22Z"
                        stroke="white"
                        stroke-width="1.8"
                      />
                      <path
                        d="M15.75 24.5L18.6161 21.6339C19.1043 21.1457 19.8957 21.1457 20.3839 21.6339L22.3661 23.6161C22.8543 24.1043 23.6457 24.1043 24.1339 23.6161L28.25 19.5M28.25 19.5V22.625M28.25 19.5H25.125"
                        stroke="white"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="item-text">
                    <h3>$72,450</h3>
                    <p>Sales Revenue</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <span>
                    <svg
                      width="45"
                      height="44"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.666504"
                        width="44"
                        height="44"
                        rx="12"
                        fill="#5B93FF"
                      />
                      <path
                        d="M34.8333 15.75L25.6087 24.9183C24.3616 26.1578 23.7381 26.7776 22.9646 26.7775C22.1912 26.7774 21.5678 26.1575 20.321 24.9177L20.0218 24.6202C18.7739 23.3794 18.15 22.7589 17.376 22.7592C16.6021 22.7595 15.9786 23.3804 14.7316 24.6222L9.83325 29.5M34.8333 15.75V22.6823M34.8333 15.75H27.8556"
                        stroke="white"
                        stroke-width="1.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <div className="item-text">
                    <h3>16.6%</h3>
                    <p>Conversion Rate (CVR)</p>
                  </div>
                </div>
              </div>
              <div className="item item-2">
                <div className="item-inner">
                  <span>
                    <svg
                      width="45"
                      height="44"
                      viewBox="0 0 45 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.333252"
                        width="44"
                        height="44"
                        rx="12"
                        fill="#D14C8C"
                      />
                      <path
                        d="M25.7917 15.125H29.5417M29.5417 15.125H33.2917M29.5417 15.125V18.875M29.5417 15.125V11.375"
                        stroke="white"
                        stroke-width="1.875"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.7917 15.125C10.7917 12.768 10.7917 11.5895 11.524 10.8572C12.2562 10.125 13.4347 10.125 15.7917 10.125C18.1488 10.125 19.3273 10.125 20.0595 10.8572C20.7917 11.5895 20.7917 12.768 20.7917 15.125C20.7917 17.482 20.7917 18.6605 20.0595 19.3928C19.3273 20.125 18.1488 20.125 15.7917 20.125C13.4347 20.125 12.2562 20.125 11.524 19.3928C10.7917 18.6605 10.7917 17.482 10.7917 15.125Z"
                        stroke="white"
                        stroke-width="1.875"
                      />
                      <path
                        d="M24.5417 28.875C24.5417 26.518 24.5417 25.3395 25.274 24.6072C26.0062 23.875 27.1847 23.875 29.5417 23.875C31.8988 23.875 33.0773 23.875 33.8095 24.6072C34.5417 25.3395 34.5417 26.518 34.5417 28.875C34.5417 31.232 34.5417 32.4105 33.8095 33.1428C33.0773 33.875 31.8988 33.875 29.5417 33.875C27.1847 33.875 26.0062 33.875 25.274 33.1428C24.5417 32.4105 24.5417 31.232 24.5417 28.875Z"
                        stroke="white"
                        stroke-width="1.875"
                      />
                      <path
                        d="M10.7917 28.875C10.7917 26.518 10.7917 25.3395 11.524 24.6072C12.2562 23.875 13.4347 23.875 15.7917 23.875C18.1488 23.875 19.3273 23.875 20.0595 24.6072C20.7917 25.3395 20.7917 26.518 20.7917 28.875C20.7917 31.232 20.7917 32.4105 20.0595 33.1428C19.3273 33.875 18.1488 33.875 15.7917 33.875C13.4347 33.875 12.2562 33.875 11.524 33.1428C10.7917 32.4105 10.7917 31.232 10.7917 28.875Z"
                        stroke="white"
                        stroke-width="1.875"
                      />
                    </svg>
                  </span>
                  <div className="item-text">
                    <h3>$1,725</h3>
                    <p>Average Order Value (AOV)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-screen bg-gray-50">
              <main className="flex-1 p-6 overflow-y-auto">
                {/* Charts */}
                <div className="grid grid-cols-2 gap-6 chart">
                  <div className="bg-white p-4 rounded-md shadow margin">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium">
                        Average Order Value Over Time
                      </p>
                      <select className="text-sm border rounded p-1">
                        <option>12 months</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#00AEEF"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-medium">
                        Conversion Rate Over Time
                      </p>
                      <select className="text-sm border rounded p-1">
                        <option>12 months</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 2000]} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#28A745"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
