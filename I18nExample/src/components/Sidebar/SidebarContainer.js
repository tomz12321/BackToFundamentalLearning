import { connect } from "react-redux";
import Sidebar from "./Sidebar";
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

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
