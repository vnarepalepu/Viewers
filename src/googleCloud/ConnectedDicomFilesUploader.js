import { connect } from 'react-redux';
import DicomFileUploaderModal from './DicomFileUploaderModal.js';

const isActive = a => a.active === true;

const mapStateToProps = state => {
  const activeServer = state.servers.servers.find(isActive);

  if (window.config.oidc) {
    const { authority, client_id } = window.config.oidc[0];
    const oidcStorageKey = `oidc.user:${authority}:${client_id}`;

    return {
      oidcStorageKey,
      url: activeServer && activeServer.qidoRoot,
    };
  } else {
    return {
      url: activeServer && activeServer.qidoRoot,
    };
  }
};

const ConnectedDicomFileUploader = connect(
  mapStateToProps,
  null
)(DicomFileUploaderModal);

export default ConnectedDicomFileUploader;
