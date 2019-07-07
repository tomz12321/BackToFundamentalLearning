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

import CustomReactSelect from "../Forms/CustomReactSelect/CustomReactSelect";

//setup for icon
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import auFlag from "assets/img/flags/AU.png";
import deFlag from "assets/img/flags/DE.png";
import esFlag from "assets/img/flags/ES.png";
import cnFlag from "assets/img/flags/CN.png";
import sgFlag from "assets/img/flags/SG.png";

class HeaderLinks extends React.Component {
  state = {
    open: false,
    news_list: [],
    language_list_prio:[
    { value: 'en', label: 'en' },
    { value: 'de', label: 'de' },
    { value: 'es', label: 'es' },
    { value: 'zh', label: 'zh' },
    ],
    // iconOption: "",
    // valueOption: ""
  };

  handleDefaultText(){
    //console.log(window.name)
    switch(window.name){
      case '{"selectLanguage":"en"}':
          return auFlag;
        break;
      case '{"selectLanguage":"zh"}':
          return sgFlag;
        break;
      case '{"selectLanguage":"es"}':
          return esFlag;
        break;
      case '{"selectLanguage":"de"}':
          return deFlag;
        break;
      default:
        return auFlag;
      break;
    }
  }

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

  handleCustomReactSelectChange = name => value => {
    var option_value;
    if (value === null) {
      option_value = null
    } else {
      option_value = value.value
    }
    this.setState({
      [name]: option_value,
      iconOption: ""+option_value+".png",
      valueOption: option_value
    });
    //this.props.updateNewBeneficiaryCreation(name, option_value);

    var win = window.top || window;
    //console.log(value._source.lineNumber);
    switch (value._source.lineNumber){
      case 256:
          win.name = '{"selectLanguage":"en"}';
        break;
      case 259:
          win.name = '{"selectLanguage":"zh"}';
        break;
      case 260:
          win.name = '{"selectLanguage":"zh"}';
        break;
      case 258:
          win.name = '{"selectLanguage":"de"}';
        break;
      case 257:
          win.name = '{"selectLanguage":"es"}';
        break;

      default:
        //myJSON = JSON.stringify(messages_en_json);
          win.name = '{"selectLanguage":"en"}';
    }

    // //set win.name using option value
    // switch (option_value){
    //   case 'en': 
    //     //myJSON = JSON.stringify(messages_en_json);
    //     win.name = '{"selectLanguage":"en"}';
    //     break;
    //   case 'zh': 
    //     //myJSON = JSON.stringify(messages_zh_json);
    //     win.name = '{"selectLanguage":"zh"}';
    //     break;
    //   case 'de': 
    //     //myJSON = JSON.stringify(messages_de_json);
    //     win.name = '{"selectLanguage":"de"}';
    //     break;
    //   case 'es': 
    //     //myJSON = JSON.stringify(messages_es_json);
    //     win.name = '{"selectLanguage":"es"}';
    //     break;
    
    //   default:
    //     //myJSON = JSON.stringify(messages_en_json);
    //     win.name = '{"selectLanguage":"en"}';
    // }

    // trigger reload()
    window.location.reload();
    // Debug message to locate source lineNumber
    // console.log(document.getElementsByTagName("span")[9].innerText);
    // console.log(document.getElementsByTagName("span")[11].innerText);
    // console.log(document.getElementsByTagName("span")[13].innerText);
    // console.log(document.getElementsByTagName("span")[15].innerText);
    // console.log(document.getElementsByTagName("span")[17].innerText);
    // console.log(document.getElementsByTagName("span")[19].innerText);
    console.log(value._source.lineNumber);//256,259,260,258,257
  };


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

    // For CustomReactSelect. Generate select options for dropdown list.
    const select_language_select_options = this.state.language_list_prio;
    // .sort((a, b) => a.full_name.localeCompare(b.full_name)) // Sorts elements alphabetically
    // .sort((a, b) => b.list_priority-a.list_priority) // For descending sort of list_priority
    // .map(item => (
    // // {
    // //   value: item.id,
    // //   label: item.full_name
    // // },
    // {
    //   value: "zh",
    //   label: "zh"
    // }
    // ));
    //console.log(this.state);

    //console.log(window);

    return (
      <div className={wrapper} id="customDrop">
          <CustomDropdown
            buttonText={<span id="sel1"><img src={this.handleDefaultText()} alt="..."/> Language</span>}
            value={"userLanguage"}
            dropdownList={[
              <span id="sel1"><img src={auFlag} alt="..."/> English(AU)</span>,
              <span id="sel2"><img src={esFlag} alt="..."/> Español</span>,
              <span id="sel3"><img src={deFlag} alt="..."/> Deutsch</span>,
              <span id="sel4"><img src={cnFlag} alt="..."/> Chinese(CN)</span>,
              <span id="sel5"><img src={sgFlag} alt="..."/> Chinese(SG)</span>,
            ]}
            onClick={
              //console.log(document.getElementById("sec1").value);
              this.handleCustomReactSelectChange("userLanguage")
            }
          >
          </CustomDropdown>
 
      {
      //  <Button
      //     color="transparent"
      //         simple
      //         aria-label="Langauge"
      //         justIcon
      //         //className={classes.buttonLink}
      //         muiClasses={{
      //           label: ""
      //         }}
      //         round = "true"
      //     >
      //    <CustomReactSelect
      //         label="Langauge"
      //         components={{ Option: this.state.iconOption, SingleValue : this.state.valueOption }} 
      //         options={select_language_select_options}
      //         value={JSON.parse(window.name).selectLanguage}
      //         onChange={this.handleCustomReactSelectChange("userLanguage")}
      //         isClearable={true}
      //         // isDisabled={!this.state.edit_mode}
      //       />
      //   <Hidden mdUp implementation="css">
      //   </Hidden>
      // </Button>
      }

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
