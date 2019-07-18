import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";

// material-ui icons
import Menu from "@material-ui/icons/Menu";
import MoreVert from "@material-ui/icons/MoreVert";
import ViewList from "@material-ui/icons/ViewList";

// core components
import HeaderLinks from "./HeaderLinks";
import Button from "components/CustomButtons/Button.jsx";

import headerStyle from "assets/jss/material-dashboard-pro-react/components/headerStyle.jsx";

//setup for language components
let languageObj_en_json = require('../../translations/en.json');
let languageObj_zh_json = require('../../translations/zh.json');
let languageObj_de_json = require('../../translations/de.json');
let languageObj_es_json = require('../../translations/es.json');
let languageObj_fr_json = require('../../translations/fr.json');
let languageObj_it_json = require('../../translations/it.json');
let languageObj_pt_json = require('../../translations/pt.json');

function Header({ ...props }) {
  function makeBrand() {
    var name;
    //setup language obj to use
    //this.props.language.language_current_ui
    let languageObj = "";
      switch (props.language.language_current_ui) {
        case "es":
          languageObj = languageObj_es_json;
          //menu_item_text = prop.name_es || prop.name;
          break;
        case "de":
          languageObj = languageObj_de_json;
          //menu_item_text = prop.name_de || prop.name;
          break;
        case "zh":
          languageObj = languageObj_zh_json;
          //menu_item_text = prop.name_zh || prop.name;
          break;
        case "fr":
          languageObj = languageObj_fr_json;
          //menu_item_text = prop.name_fr || prop.name;
          break;
        case "it":
          languageObj = languageObj_it_json;
          //menu_item_text = prop.name_it || prop.name;
          break;
        case "pt":
          languageObj = languageObj_pt_json;
          //menu_item_text = prop.name_it || prop.name;
          break;
        default:
          languageObj = languageObj_en_json;
          //menu_item_text = prop.name;
          break;
      }
    props.routes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === props.location.pathname) {
            //console.log(prop.name); for collapse
            //name = prop.name;
            switch(props.language.language_current_ui){
              case "en":
                name = prop.name;
                break;
              case "es":
                name = prop.name_es;
                break;
              case "de":
                name = prop.name_de;
                break;
              case "zh":
                name = prop.name_zh;
                break;
              case "fr":
                name = prop.name_fr;
                break;
              case "it":
                name = prop.name_it;
                break;
              case "pt":
                name = prop.name_pt;
                break;
              default:
                name = prop.name;
            }
          }
          return null;
        });
      }
      if (prop.path === props.location.pathname) {
        switch(prop.path){ 
          case "/dashboard":
            // for dashboard
            //console.log(prop.path.split("/",2)[1]);
            name = languageObj["icon."+prop.path.split("/",2)[1]+""];//prop.name;
            break;
          case "/user-profile":
            //console.log(prop.path.split("/",2)[1].split("-")[0]+prop.path.split("/",2)[1].split("-")[1]);
            name = languageObj["icon."+prop.path.split("/",2)[1].split("-")[0]+prop.path.split("/",2)[1].split("-")[1]+""];//prop.name;
            break;
          default:
            // for dashboard and other components
            //console.log(prop.path.split("/",2)[1]);
            name = languageObj["icon."+prop.path.split("/",2)[1]+""];//prop.name;
            break;
        }
      }
      return null;
    });
    if (name) {
      return name;
    } else {
      return "Forex WorldWide";
    }
  }
  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  const sidebarMinimize =
    classes.sidebarMinimize +
    " " +
    cx({
      [classes.sidebarMinimizeRTL]: false
    });

  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title} color="transparent">
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks
            isAuthenticated={props.isAuthenticated}
            userHasAuthenticated={props.userHasAuthenticated}
            handleLogout={props.handleLogout}
          />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  // rtlActive: PropTypes.bool
  isAuthenticated: PropTypes.bool
};

export default withStyles(headerStyle)(Header);
