import React, { FC } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';

const MainLayout: FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-center align-middle text-center">
      <Navbar />
      {children}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
