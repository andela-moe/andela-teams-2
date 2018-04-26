import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false
    };
    this.toggleState = this.toggleState.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    event.preventDefault();
    this.setState({
      showSearchBar: true
    });
  }

  toggleState(state) {
    this.setState(prevState => ({
      [state]: !prevState[state]
    }));
    if (state === 'showSearchBar') {
      setTimeout(() => {
        document.getElementById('search').focus();
      }, 100);
    }
  }

  render() {
    const { showSearchBar } = this.state;
    const searchBar = showSearchBar ? 'show' : 'hide';
    const mainNav = showSearchBar ? 'hide' : 'show';
    /* eslint-disable */
    return (
      <div className="navbar-fixed">
        <nav className={`nav-blue  ${mainNav}`}>
          <div className="nav-wrapper">
            <a
              href="#!"
              data-target="main-navigation"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>

            <a href="#!" className="brand">
              Andela Teams
            </a>
            <a
              href="#!"
              onClick={() => this.toggleState('showSearchBar')}
              className=" float-right sidenav-trigger"
            >
              <i className="material-icons">search</i>
            </a>
            <ul className="right hide-on-med-and-down nav-items">
              <li>
                <a href="#!" onClick={() => this.toggleState('showSearchBar')}>
                  <i className="material-icons" data-tip="search teams">
                    search
                  </i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="material-icons" data-tip="Teams">
                    group
                  </i>
                </a>
              </li>

              <li>
                <a href="#!">
                  <i className="material-icons" data-tip="Create teams">
                    group_add
                  </i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="material-icons" data-tip="favorite teams">
                    favorite
                  </i>
                </a>
              </li>
              <li className="notif-container">
                <a href="#!">
                  <span className="notif-badge" />
                  <i className="material-icons" data-tip="notifications">
                    notifications_active
                  </i>
                </a>
              </li>
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown-menu-main"
                  data-beloworigin="true"
                >
                  <i className="medium material-icons left">
                    account_circle arrow_drop_down
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={`nav-blue navbar-fixed ${searchBar}`}>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i
                  className="material-icons"
                  onClick={() => this.toggleState('showSearchBar')}
                >
                  close
                </i>
              </div>
            </form>
          </div>
        </nav>
        <ul id="dropdown-menu-main" className="dropdown-content">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li className="divider" />
          <li>
            <a href="#!">Sign Out</a>
          </li>
        </ul>
        <ul id="dropdown-menu" className="dropdown-content">
          <li>
            <a href="#!">Profile</a>
          </li>
          <li className="divider" />
          <li>
            <a href="#!">Sign Out</a>
          </li>
        </ul>
        <ul className="sidenav" id="main-navigation">
          <li>
            <a href="#!">Teams</a>
          </li>
          <li>
            <a href="#!">Favorite Teams</a>
          </li>
          <li>
            <a href="#!">Create Team</a>
          </li>
          <li>
            <a
              className="dropdown-trigger"
              href="#!"
              data-target="dropdown-menu"
            >
              <i className="small material-icons left">
                account_circle arrow_drop_down
              </i>
            </a>
          </li>
        </ul>
        <ReactTooltip />
      </div>
    );
  }
}
