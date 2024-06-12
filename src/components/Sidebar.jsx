import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <NavLink
                        className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg `}
                        activeclassname="bg-primary text-black"
                        to="/trending-books"
                    >
                        <FaFire />
                        <span>Trending</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/new-releases"
                    >
                        <FaFolderPlus />
                        <span>New Releases</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        activeclassname="bg-primary text-black"
                        to="/upcoming-books"
                    >
                        <FaCalendarAlt />
                        <span>Coming Soon</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                         to="/favorite-books"
                         activeclassname="bg-primary text-black"
                    >
                       <FaRegHeart />
                        <span>Favourites</span>
                    </NavLink>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                      
                    >
                       <FaRegClock />
                        <span>Watch Later</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
