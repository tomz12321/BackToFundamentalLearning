import { connect } from "react-redux";
import I18nExample from "./I18nExample";
import {
//   updateClient,
  loadIdentificationRecordDetailsRequest,
  loadIdentificationRecordDetailsSuccess,
//   createCognitoAccountForClient,

} from "../../redux/actions/identification";

const mapStateToProps = state => {
  return {
    app_state: state.app_state,
    identification: state.identification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadIdentificationRecordDetailsRequest: () => {
      dispatch(loadIdentificationRecordDetailsRequest())
    },
    loadIdentificationRecordDetailsSuccess: () => {
      dispatch(loadIdentificationRecordDetailsSuccess())
    },
    // createCognitoAccountForClient: (id, username, password) => {
    //   dispatch(createCognitoAccountForClient(id, username, password))
    // },
    // updateClient: (data, id) => {
    //   dispatch(updateClient(data, id))
    // }

  }
}

const I18nExampleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(I18nExample);

export default I18nExampleContainer;
