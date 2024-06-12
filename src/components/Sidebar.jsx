import { FaCalendarAlt, FaFire, FaFolderPlus, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                        to="/trending-books"
                    >
                        <FaFire />
                        <span>Trending</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        to="/new-releases"
                    >
                        <FaFolderPlus />
                        
                        <span>New Releases</span>
                    </Link>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <FaCalendarAlt />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                       <FaRegHeart />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                       <FaRegClock />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}