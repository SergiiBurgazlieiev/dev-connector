import React from 'react';
import PropTypes from 'prop-types';
import requireAuth from '../../hoc/requireAuth';

const Dashboard  = props =>{
    
    return <div>Dashboard</div>;
    
  
};

Dashboard.propTypes = {};

export default requireAuth(Dashboard);
