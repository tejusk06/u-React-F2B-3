import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {/* techs !== null is added because it starts out as null but updates after useEffect runs */}
          {!loading && techs !== null && techs.map(tech => (
            <TechItem tech={tech} key={tech.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  // state.log = 'log' in index.js = initialState in logReducer
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
