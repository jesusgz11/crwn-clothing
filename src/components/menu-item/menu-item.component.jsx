import './menu-item.styles.scss';
import { useNavigate, useLocation, useParams, useHref } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const customPath = pathname !== '/' ? `${pathname}/` : pathname;

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${customPath}${linkUrl}`)}
    >
      <div
        className={`${size} background-image`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
