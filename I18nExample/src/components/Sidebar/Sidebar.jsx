import React from "react";
import PropTypes from "prop-types";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import { NavLink } from "react-router-dom";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Collapse from "@material-ui/core/Collapse";
import Icon from "@material-ui/core/Icon";

// core components
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import sidebarStyle from "assets/jss/material-dashboard-pro-react/components/sidebarStyle.jsx";

import avatar from "../../assets/img/faces/blank-profile-picture.jpg";
import gostudy from "../../assets/img/GOSTUDY_PrimaryUsage_White.png";

var ps;

// We've created this component so we can have a ref to the wrapper of the links that appears in our sidebar.
// This was necessary so that we could initialize PerfectScrollbar on the links.
// There might be something with the Hidden component from material-ui, and we didn't have access to
// the links, and couldn't initialize the plugin.
class SidebarWrapper extends React.Component {
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebarWrapper, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, user, headerLinks, links } = this.props;
    return (
      <div className={className} ref="sidebarWrapper">
        {user}
        {headerLinks}
        {links}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      openClients: this.activeRoute("/clients"),
      openTransfers: this.activeRoute("/transfers"),
      openBeneficiaries: this.activeRoute("/beneficiaries"),
      openIdentification: this.activeRoute("/identification"),
      openSettings: this.activeRoute("/settings"),
      openSystemNews: this.activeRoute("/news"),
      openSystemSettings: this.activeRoute("/system-settings"),
      openReports: this.activeRoute("/reports"),
      miniActive: true
    };
    this.activeRoute.bind(this);
    //console.log(this.props.language);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
  openCollapse(collapse) {
    var st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }
  render() {
    const {
      classes,
      color,
      logo,
      image,
      logoText,
      routes,
      bgColor,
      rtlActive
    } = this.props;

    let avatar_image = this.props.app_state.current_brand === "gostudy" ? gostudy : avatar;

    const super_admin = (this.props.app_state.current_staff && this.props.app_state.current_staff.super_admin === 1);
    const itemText =
      classes.itemText +
      " " +
      cx({
        [classes.itemTextMini]: this.props.miniActive && this.state.miniActive,
        [classes.itemTextMiniRTL]:
          rtlActive && this.props.miniActive && this.state.miniActive,
        [classes.itemTextRTL]: rtlActive
      });
    // const collapseItemText =
    //   classes.collapseItemText +
    //   " " +
    //   cx({
    //     [classes.collapseItemTextMini]:
    //       this.props.miniActive && this.state.miniActive,
    //     [classes.collapseItemTextMiniRTL]:
    //       rtlActive && this.props.miniActive && this.state.miniActive,
    //     [classes.collapseItemTextRTL]: rtlActive
    //   });
    const userWrapperClass =
      classes.user +
      " " +
      cx({
        [classes.whiteAfter]: bgColor === "white"
      });
    // const caret =
    //   classes.caret +
    //   " " +
    //   cx({
    //     [classes.caretRTL]: rtlActive
    //   });
    // const collapseItemMini =
    //   classes.collapseItemMini +
    //   " " +
    //   cx({
    //     [classes.collapseItemMiniRTL]: rtlActive
    //   });
    const photo =
      classes.photo +
      " " +
      cx({
        [classes.photoRTL]: rtlActive
      });
    var user = this.props.current_user ? (
      <div className={userWrapperClass}>
        <div className={photo}>
          <img src={avatar_image} className={classes.avatarImg} alt="..." />
        </div>
        <List className={classes.list}>
          <ListItem className={classes.item + " " + classes.userItem}>
            <NavLink
              to="/settings/staffprofile"
              className={classes.itemLink + " " + classes.userCollapseButton}
            >
              <ListItemText
                // primary={`${this.props.current_user.first_name} ${this.props.current_user.last_name}`}
                primary={`${this.props.current_user.first_name} ${this.props.current_user.last_name}`}
                disableTypography={true}
                className={itemText + " " + classes.userItemText}
              />
            </NavLink>
          </ListItem>
        </List>
      </div>
    ) : (
        <span />
      );

    // );
    var links = (
      <List className={classes.list}>
        {routes.map((prop, key) => {
          if (prop.redirect) {
            return null;
          }
          if (prop.invisible) {
            return null;
          }
          if (prop.superAdmin && !super_admin) {
            return null;
          }
          if (prop.collapse) {
            const navLinkClasses =
              classes.itemLink +
              " " +
              cx({
                [" " + classes.collapseActive]: this.activeRoute(prop.path)
              });
            const itemText =
              classes.itemText +
              " " +
              cx({
                [classes.itemTextMini]:
                  this.props.miniActive && this.state.miniActive,
                [classes.itemTextMiniRTL]:
                  rtlActive && this.props.miniActive && this.state.miniActive,
                [classes.itemTextRTL]: rtlActive
              });
            const collapseItemText =
              classes.collapseItemText +
              " " +
              cx({
                [classes.collapseItemTextMini]:
                  this.props.miniActive && this.state.miniActive,
                [classes.collapseItemTextMiniRTL]:
                  rtlActive && this.props.miniActive && this.state.miniActive,
                [classes.collapseItemTextRTL]: rtlActive
              });
            const itemIcon =
              classes.itemIcon +
              " " +
              cx({
                [classes.itemIconRTL]: rtlActive
              });
            const caret =
              classes.caret +
              " " +
              cx({
                [classes.caretRTL]: rtlActive
              });

            let menu_item_text = "";
            switch (this.props.language.language_current_ui) {
              case "es":
                menu_item_text = prop.name_es || prop.name;
                break;
              case "de":
                menu_item_text = prop.name_de || prop.name;
                break;
              case "zh":
                menu_item_text = prop.name_zh || prop.name;
                break;
              case "fr":
                menu_item_text = prop.name_fr || prop.name;
                break;
              case "it":
                menu_item_text = prop.name_it || prop.name;
                break;
              case "pt":
                menu_item_text = prop.name_pt || prop.name;
                break;
              default:
                menu_item_text = prop.name;
                break;
            }
            return (
              <ListItem key={key} className={classes.item}>
                <NavLink
                  to={"#"}
                  className={navLinkClasses}
                  onClick={() => this.openCollapse(prop.state)}
                >
                  <ListItemIcon className={itemIcon}>
                    {typeof prop.icon === "string" ? (
                      <Icon>{prop.icon}</Icon>
                    ) : (
                        <prop.icon />
                      )}
                  </ListItemIcon>
                  <ListItemText
                    // primary={prop.name}
                    primary={menu_item_text}
                    secondary={
                      <b
                        className={
                          caret +
                          " " +
                          (this.state[prop.state] ? classes.caretActive : "")
                        }
                      />
                    }
                    disableTypography={true}
                    className={itemText}
                  />
                </NavLink>
                <Collapse in={this.state[prop.state]} unmountOnExit>
                  <List className={classes.list + " " + classes.collapseList}>
                    {prop.views.map((prop, key) => {
                      if (prop.redirect) {
                        return null;
                      }
                      if (prop.invisible) {
                        return null;
                      }
                      let menu_item_text = "";
                      switch (this.props.language.language_current_ui) {
                        case "es":
                          menu_item_text = prop.name_es || prop.name;
                          break;
                        case "de":
                          menu_item_text = prop.name_de || prop.name;
                          break;
                        case "zh":
                          menu_item_text = prop.name_zh || prop.name;
                          break;
                        case "fr":
                          menu_item_text = prop.name_fr || prop.name;
                          break;
                        case "it":
                          menu_item_text = prop.name_it || prop.name;
                          break;
                        case "pt":
                          menu_item_text = prop.name_pt || prop.name;
                          break;
                        default:
                          menu_item_text = prop.name;
                          break;
                      }
                      const navLinkClasses =
                        classes.collapseItemLink +
                        " " +
                        cx({
                          [" " + classes[color]]: this.activeRoute(prop.path)
                        });
                      const collapseItemMini =
                        classes.collapseItemMini +
                        " " +
                        cx({
                          [classes.collapseItemMiniRTL]: rtlActive
                        });
                      return (
                        <ListItem key={key} className={classes.collapseItem}>
                          <NavLink to={prop.path} className={navLinkClasses}>
                            <span className={collapseItemMini}>
                              {prop.mini}
                            </span>
                            <ListItemText
                              // primary={prop.name}
                              primary={menu_item_text}
                              disableTypography={true}
                              className={collapseItemText}
                            />
                          </NavLink>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </ListItem>
            );
          }
          const navLinkClasses =
            classes.itemLink +
            " " +
            cx({
              [" " + classes[color]]: this.activeRoute(prop.path)
            });
          const itemText =
            classes.itemText +
            " " +
            cx({
              [classes.itemTextMini]:
                this.props.miniActive && this.state.miniActive,
              [classes.itemTextMiniRTL]:
                rtlActive && this.props.miniActive && this.state.miniActive,
              [classes.itemTextRTL]: rtlActive
            });
          const itemIcon =
            classes.itemIcon +
            " " +
            cx({
              [classes.itemIconRTL]: rtlActive
            });
          let menu_item_text = "";
          switch (this.props.language.language_current_ui) {
            case "es":
              menu_item_text = prop.name_es || prop.name;
              break;
            case "de":
              menu_item_text = prop.name_de || prop.name;
              break;
            case "zh":
              menu_item_text = prop.name_zh || prop.name;
              break;
            case "fr":
              menu_item_text = prop.name_fr || prop.name;
              break;
            case "it":
              menu_item_text = prop.name_it || prop.name;
              break;
            case "pt":
              menu_item_text = prop.name_pt || prop.name;
              break;
            default:
              menu_item_text = prop.name;
              break;
          }

          return (
            <ListItem key={key} className={classes.item}>
              <NavLink to={prop.path} className={navLinkClasses}>
                <ListItemIcon className={itemIcon}>
                  {typeof prop.icon === "string" ? (
                    <Icon>{prop.icon}</Icon>
                  ) : (
                      <prop.icon />
                    )}
                </ListItemIcon>
                <ListItemText
                  // primary={prop.name}
                  primary={menu_item_text}
                  disableTypography={true}
                  className={itemText}
                />
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    );

    const logoNormal =
      classes.logoNormal +
      " " +
      cx({
        [classes.logoNormalSidebarMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.logoNormalSidebarMiniRTL]:
          rtlActive && this.props.miniActive && this.state.miniActive,
        [classes.logoNormalRTL]: rtlActive
      });
    const logoMini =
      classes.logoMini +
      " " +
      cx({
        [classes.logoMiniRTL]: rtlActive
      });
    const logoClasses =
      classes.logo +
      " " +
      cx({
        [classes.whiteAfter]: bgColor === "white"
      });
    var brand = (
      <div className={logoClasses}>
        <a href="https://www.forexworldwide.com" className={logoMini}>
          <img src={logo} alt="logo" className={classes.img} />
        </a>
        <a href="https://www.forexworldwide.com" className={logoNormal}>
          {logoText}
        </a>
      </div>
    );
    const drawerPaper =
      classes.drawerPaper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.drawerPaperRTL]: rtlActive
      });
    const sidebarWrapper =
      classes.sidebarWrapper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.sidebarWrapperWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    return (
      <div ref="mainPanel">
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={rtlActive ? "left" : "right"}
            open={this.props.open}
            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              headerLinks={<HeaderLinks rtlActive={rtlActive} />}
              links={links}
            />
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            onMouseOver={() => this.setState({ miniActive: false })}
            onMouseOut={() => this.setState({ miniActive: true })}
            anchor={rtlActive ? "right" : "left"}
            variant="permanent"
            open
            classes={{
              paper: drawerPaper + " " + classes[bgColor + "Background"]
            }}
          >
            {brand}
            <SidebarWrapper
              className={sidebarWrapper}
              user={user}
              links={links}
            />
            {image !== undefined ? (
              <div
                className={classes.background}
                style={{ backgroundImage: "url(" + image + ")" }}
              />
            ) : null}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  bgColor: "blue"
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  bgColor: PropTypes.oneOf(["white", "black", "blue"]),
  rtlActive: PropTypes.bool,
  color: PropTypes.oneOf([
    "white",
    "red",
    "orange",
    "green",
    "blue",
    "purple",
    "rose"
  ]),
  logo: PropTypes.string,
  logoText: PropTypes.string,
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(sidebarStyle)(Sidebar);
