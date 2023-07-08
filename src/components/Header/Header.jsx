import './Header.css'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

function Header () {
    return (
        <header className="header-banner">
        <h1 className="header-title">MY GALLERY <PhotoLibraryIcon className='photo-icon' fontSize='large'/></h1>
        </header>
    )
}

export default Header; 