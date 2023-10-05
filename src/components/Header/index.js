import {Component} from 'react'

import {HiOutlineSearch} from 'react-icons/hi'

import {MdMenuOpen} from 'react-icons/md'

import {ImCross} from 'react-icons/im'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    showMenu: false,
    showSearchBar: false,
    navStyle: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  listenScrollEvent = () => {
    if (window.scrollY > 60) {
      this.setState({navStyle: true})
    } else {
      this.setState({navStyle: false})
    }
  }

  onClickShowMenu = () => {
    this.setState({showMenu: true})
  }

  onClickHideMenu = () => {
    this.setState({showMenu: false})
  }

  onClickSearchIcon = () => {
    this.setState(prevState => ({
      showSearchBar: !prevState.showSearchBar,
    }))
  }

  onChangeSearchInput = event => {
    const {searchInput} = this.props
    if (event.key === 'Enter') {
      searchInput(event.target.value)
    }
  }

  render() {
    const {showSearchBar, showMenu, navStyle} = this.state
    const {match} = this.props
    console.log(navStyle)
    const bgColor = navStyle ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.2)'
    const {path} = match
    let homeClassNameStyling
    let popularClassNameStyling
    let accountClassNameStyling

    switch (path) {
      case '/popular':
        homeClassNameStyling = 'passive'
        popularClassNameStyling = 'active'
        accountClassNameStyling = 'passive'
        break
      case '/account':
        homeClassNameStyling = 'passive'
        popularClassNameStyling = 'passive'
        accountClassNameStyling = 'active'
        break
      default:
        homeClassNameStyling = 'active'
        popularClassNameStyling = 'passive'
        accountClassNameStyling = 'passive'
        break
    }
    return (
      <>
        <nav className="nav-bar-desktop" style={{backgroundColor: bgColor}}>
          <div className="header-margin">
            <div className="header-card">
              <div className="website-logo-card">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/dra0hh2i3/image/upload/v1695982601/movies7_ljh7h5.svg"
                    className="website-logo"
                    alt="website logo"
                  />
                </Link>
              </div>
              <ul className="ul-card">
                <Link to="/" className="nav-link">
                  <li className={`popup-heading ${homeClassNameStyling}`}>
                    Home
                  </li>
                </Link>
                <Link to="/popular" className="nav-link">
                  <li className={`popup-heading ${popularClassNameStyling}`}>
                    Popular
                  </li>
                </Link>
              </ul>
            </div>

            <div className="search-container">
              {showSearchBar && (
                <input
                  type="search"
                  onKeyDown={this.onChangeSearchInput}
                  placeholder="Search..."
                  className="search"
                />
              )}
              <Link to="/search">
                <button
                  type="button"
                  className="icon-button"
                  testid="searchButton"
                >
                  <HiOutlineSearch
                    size={20}
                    color="white"
                    testid="searchButton"
                    onClick={this.onClickSearchIcon}
                  />
                </button>
              </Link>
              <div>
                <Link to="/account" className="nav-link">
                  <img
                    className="profile-img"
                    src="https://res.cloudinary.com/dra0hh2i3/image/upload/v1694704497/Avatar_do104x.png"
                    alt="profile"
                  />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav className="nav-bar-mobile" style={{backgroundColor: bgColor}}>
          <div className="website-logo-card">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dra0hh2i3/image/upload/v1695982601/movies7_ljh7h5.svg"
                className="website-logo"
                alt="website logo"
              />
            </Link>
          </div>
          <div className="search-container">
            {showSearchBar && (
              <input
                type="search"
                onKeyDown={this.onChangeSearchInput}
                placeholder="Search..."
                className="search"
              />
            )}
            <Link to="/search">
              <button
                type="button"
                className="icon-button"
                testid="searchButton"
              >
                <HiOutlineSearch
                  size={25}
                  color="white"
                  testid="searchButton"
                  onClick={this.onClickSearchIcon}
                />
              </button>
            </Link>
            <div>
              <MdMenuOpen
                size={30}
                color="white"
                className="menu-icon"
                onClick={this.onClickShowMenu}
              />
            </div>
          </div>
        </nav>
        {showMenu && (
          <div className="nav-list-mobile">
            <ul className="list-mini">
              <Link to="/" className="nav-link">
                <li className={`popup-heading ${homeClassNameStyling}`}>
                  Home
                </li>
              </Link>
              <Link to="/popular" className="nav-link">
                <li className={`popup-heading ${popularClassNameStyling}`}>
                  Popular
                </li>
              </Link>

              <Link to="/account" className="nav-link">
                <li className={`popup-heading ${accountClassNameStyling}`}>
                  Account
                </li>
              </Link>
              <ImCross
                size={10}
                color="#ffffff"
                onClick={this.onClickHideMenu}
                className="icon"
              />
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default withRouter(Header)
