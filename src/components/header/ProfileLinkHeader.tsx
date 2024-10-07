import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect, useState } from 'react';
import { getUserWithToken } from '../../features/auth/authActions';


const ProfileLinkHeader: React.FC = () => {
  const token = localStorage.getItem("user-token");
  const name = useAppSelector((state) => state.user.user.name)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserWithToken(token));
    }
  }, [dispatch, token])


  if (token) {
    return (
      <div className={styles.rightAligned}>
        <Link to={"/my-profile"} className={styles.navLink}>
          <svg fill="#ffffff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 472.615 472.615" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="236.308" cy="117.504" r="111.537"></circle> </g> </g> <g> <g> <path d="M369,246.306c-1.759-1.195-5.297-3.493-5.297-3.493c-28.511,39.583-74.993,65.402-127.395,65.402 c-52.407,0-98.894-25.825-127.404-65.416c0,0-2.974,1.947-4.451,2.942C41.444,288.182,0,360.187,0,441.87v24.779h472.615V441.87 C472.615,360.549,431.538,288.822,369,246.306z"></path> </g> </g> </g></svg>
          {name}
        </Link>
      </div>
    );
  } else {
    return (
      <div className={styles.rightAligned}>
        <Link to="/login" className={`${styles.navLink} ${styles.profileLink}`}>
          <span className={styles.iconProfile}></span>
          Login
        </Link>
        <Link to="/register" className={`${styles.navLink} ${styles.profileLink}`}>
          <span className={styles.iconProfile}></span>
          Register
        </Link>
      </div>
    );
  }
};

export default ProfileLinkHeader;
