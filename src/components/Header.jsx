import './Header.css';
const Header = ({username}) => {
    const initial = username ? username.charAt(0).toUpperCase() : 'U';
    return(
        <div className="top-header">
            <div className="header-inner">
                <div className="header-search-container">
                    <input type="text" placeholder="search..." />
                </div>

                <div className="header-right-group">
                    <div className="header-academic-info">
                        <p>Academic Year: 2023-2024</p>
                    </div>

                    <div className="header-actions-group">
                        <span>🔔</span>
                        <span>⚙️</span>
                    <div className="header-user-profile">{initial}</div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Header;