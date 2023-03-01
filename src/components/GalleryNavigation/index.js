import { NavLink } from "react-router-dom";

import harvardArt from "../../data/harvardArt";




const GalleryNavigation = ({ galleries }) => {
    return (
        <nav>
            <h1>Galleries</h1>
                <NavLink to="/" className="home">
                Home
                </NavLink>
                {galleries.map((gallery) => {
                    return (
                        <NavLink 
                        to="/galleries/{gallery.id}"
                        key={gallery.id}>{gallery.name}
                        </NavLink>
                    )
                })}
        </nav>
    );
}

export default GalleryNavigation;