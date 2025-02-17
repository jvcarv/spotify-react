import logoSpotify from '../assets/logo/spotify-logo.png';
const Header = () => {
    return (
        <header className='header'>
            <img src={logoSpotify} alt=""/>
            <a className='header__link' href='/'><h1>Spotify</h1></a>
        </header>
    );
};

export default Header;