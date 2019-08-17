import { connect } from "react-redux";
import Header from "./Header";
// import {
  // createNewStaffMember,
  // cancelCreateNewStaffMember,
  // confirmNewStaffMember,
  // selectStaffUi
// } from "../../redux/actions/staff";

const mapStateToProps = state => {
  return {
    app_state: state.app_state,
    language: state.language
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // createNewStaffMember: (data) => {
      // dispatch(createNewStaffMember(data))
    // },
    // cancelCreateNewStaffMember: () => {
      // dispatch(cancelCreateNewStaffMember())
    // },
    // confirmNewStaffMember: (data) => {
    //   dispatch(confirmNewStaffMember(data))
    // },
    // selectStaffUi: (data) => {
    //   dispatch(selectStaffUi(data))
    // },
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
