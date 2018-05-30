import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import style from './style';

class Dashboard extends React.Component {
  render(){
    const { userData } = this.props;

    return (
      <div className={this.props.className}>
        <div className="container">
          <h2>Dashboard</h2>
          <div>
            {Object.keys(userData).map((key, index) => (
              <div key={index}>
                <b>{key}:</b> {userData[key]}
              </div>
            ))}
          </div>
        </div>
      </div>
    );    
  }
}

const mapStateToProps = (state) => ({  
  userData: state.user
});

const StyledDashboard = styled(Dashboard)`${style}`;

export default connect( mapStateToProps, null )(StyledDashboard);