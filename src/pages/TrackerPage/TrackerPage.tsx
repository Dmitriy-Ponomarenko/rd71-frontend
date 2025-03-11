import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser, selectIsAuthenticated } from '../../redux/auth/selectors';

export const TrackerPage: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const goToProfile = () => {
    if (isAuthenticated && user) {
      navigate(`/user/${user.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <h1>Tracker Page</h1>
      <button onClick={goToProfile}>My Profile</button>
    </div>
  );
};
