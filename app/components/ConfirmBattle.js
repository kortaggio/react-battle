var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var ReactRouter = require('react-router')
var Link = ReactRouter.Link;
var UserDetailsWrapper = require('./UserDetailsWrapper')
var UserDetails = require('./UserDetails');
var MainContainer = require('./MainContainer');
var LoadingSpinner = require('./LoadingSpinner');

function ConfirmBattle (props) {
  return props.isLoading === true ? (
    <LoadingSpinner />
  ) : (
    <MainContainer>
      <div className="row">
        <div className='col-sm-10 col-sm-offset-1'>
          <h1>Confirm Players</h1>
          <div className="row">
            <UserDetailsWrapper header={'Player One'}>
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
            <UserDetailsWrapper header={'Player Two'}>
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </div>
        </div>
        <div className='col-sm-1- col-sm-offset-1'>
          <div className="row">
            <div className='col-xs-12' style={styles.space}>
              <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                Initiate Battle!
              </button>
            </div>
            <div className='col-xs-12' style={styles.space}>
              <Link to="/playerOne">
                <button className="btn btn-lg btn-danger">
                  Reselect Players
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
}

module.exports = ConfirmBattle;
