import styles from './WatchlistError.module.css'
import { Error } from "../Error/Error";
import watchlistImg from '../../assets/watchlist.png'
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import { Link } from 'react-router-dom';

export function WatchlistError() {
    return <div className={styles.watchlistError}>
        <Error>No movies added to watchlist</Error>
        <img src={watchlistImg} alt="Watchlist Error Image"/>
        <FullWidthButton><Link to="/library">Search</Link></FullWidthButton>
    </div>
}