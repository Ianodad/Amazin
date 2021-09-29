import React from 'react';
import { connect } from 'react-redux';

const NotFoundPage = (props) => {
  return (
    <div>
      <p>Not found</p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);
