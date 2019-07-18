import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";

// core components
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-dashboard-pro-react/components/headerLinksStyle";
import { withRouter } from "react-router-dom";
import { API } from "aws-amplify";

//setup for language components
import LanguageSelectionContainer from "../CustomDropdown/LanguageSelectionContainer";

class HeaderLinks extends React.Component {
  state = {
    open: false,
    news_list: [],
  };

  is_empty(x) {
    return (
      (typeof x == 'undefined')        ||
      (x == null)                      ||
      (x == false)  //same as: !x
      ||
      (x.length == 0)                  ||
      (x == "")                        ||
      (x.replace(/\s/g,"") == "")      ||
      (!/[^\s]/.test(x))               ||
      (/^\s*$/.test(x))
    );
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = (e, a) => {
    let news_id = e.target.id;
    this.setState({ open: false });

    if(! this.is_empty(news_id)) window.location = '/news/show/'+news_id;

  };

  // handleSelectChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  componentDidMount() {
      API.get("news", `/news/notification`)
        .then(response => {
         // console.log(response);
          this.setState({
            news_list: response
          });
      })
      .catch(error => {
      });
  }

  // handleLogout = async () => {
  //   // event.preventDefault();
  //   // this.props.history.push("/");
  //   try {
  //     await Auth.signOut();
  //     alert("Logged out");
  //     this.props.userHasAuthenticated(false);
  //     this.props.history.push("/");
  //   } catch (e) {
  //     alert(e.message);
  //   }
  //
  //
  // };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    // const searchButton =
    //   classes.top +
    //   " " +
    //   classes.searchButton +
    //   " " +
    //   classNames({
    //     [classes.searchRTL]: false
    //   });
    const dropdownItem = classNames(
      classes.dropdownItem,
      classes.primaryHover,
      { [classes.dropdownItemRTL]: false }
    );
    const wrapper = classNames({
      [classes.wrapperRTL]: false
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });

    const listItems = this.state.news_list.map((prop, key) =>
      <MenuItem key={key} id={prop.id} onClick={this.handleClose} className={dropdownItem}>{prop.headline.substring(0, 40)}</MenuItem>

    );

    return (
      <div className={wrapper} id="customDrop">
        <LanguageSelectionContainer></LanguageSelectionContainer>
      <Button
          color="transparent"
          simple
          aria-label="Dashboard"
          justIcon
          className={classes.buttonLink}
          muiClasses={{
            label: ""
          }}
        >
          <Dashboard className={classes.headerLinksSvg + " " + classes.links} />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>Dashboard</span>
          </Hidden>
        </Button>
        
        <div className={managerClasses}>
          <Button
            color="transparent"
            justIcon
            aria-label="Notifications"
            aria-owns={open ? "menu-list" : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            className={classes.buttonLink}
            muiClasses={{
              label: ""
            }}
            buttonRef={node => {
              this.anchorEl = node;
            }}
          >
            <Notifications
              className={classes.headerLinksSvg + " " + classes.links}
            />
            <span className={classes.notifications}>{this.state.news_list.length} </span>
            <Hidden mdUp implementation="css">
              <span onClick={this.handleClick} className={classes.linkText}>
                Notification
              </span>
            </Hidden>
          </Button>
          <Popper
            open={open}
            anchorEl={this.anchorEl}
            transition
            disablePortal
            placement="bottom"
            className={classNames({
              [classes.popperClose]: !open,
              [classes.pooperResponsive]: true,
              [classes.pooperNav]: true
            })}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list"
                style={{ transformOrigin: "0 0 0" }}
              >
                <Paper className={classes.dropdown}>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList role="menu">
                      {listItems}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Button
          color="transparent"
          aria-label="Person"
          justIcon
          className={classes.buttonLink}
          muiClasses={{
            label: ""
          }}
        >
          <Person className={classes.headerLinksSvg + " " + classes.links} />
          <Hidden mdUp implementation="css">
            <span className={classes.linkText}>Profile</span>
          </Hidden>
        </Button>
        {this.props.isAuthenticated && (
          <Button
            color="transparent"
            aria-label="Sign Out"
            justIcon
            className={classes.buttonLink}
            onClick={() => this.props.handleLogout()}
            muiClasses={{
              label: ""
            }}
          >
            <ExitToApp
              className={classes.headerLinksSvg + " " + classes.links}
            />
            <Hidden mdUp implementation="css">
              <span className={classes.linkText}>Sign Out</span>
            </Hidden>
          </Button>
        )}
      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(headerLinksStyle)(HeaderLinks));
