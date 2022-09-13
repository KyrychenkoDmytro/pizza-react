import { Link } from 'react-router-dom';
import styless from './NotFound.module.scss';
import { useLocation } from 'react-router-dom';

export const NotFound = () => {
    const location = useLocation();
    
    return (
        <div className={styless.NotFound}>
            <h2>Page Not Found <span>😕</span></h2>
            <p>
                The page you were looking for could not be found. It may have been deleted, renamed, or didn't exist at all.
            </p>
            <img src="./img/not-found.webp" alt="Not found" />
            {location.pathname === '/'
                ? ''
                : <Link to="/">
                    <button className='button button--black'>To main</button>
                </Link>
            }
        </div>
    );
}

export default NotFound;
