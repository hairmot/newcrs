import React from 'react';
import '../../styles/index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../Actions/actionCreators';
import TextInput from './TextInput';
import BoolInput from './BoolInput';
import translateName from '../util/translateName';


class DateAndAuthorisation extends React.Component {
	update = (val, item) => {
		this.props.actions.updateInput(val, 'DateAndAuthorisation', item  )
	}

	render() {
		console.log(this.props.DateAndAuthorisation);
		var inputs = Object.keys(this.props.DateAndAuthorisation).map((a, i) => {
			return typeof(this.props.DateAndAuthorisation[a]) == 'boolean' ?
				<BoolInput key={i} value={this.props.DateAndAuthorisation[a]} update={(e) => this.update(e.target.value === 'true', a)} label={translateName(a)} /> :
				<TextInput key={i} val={this.props.DateAndAuthorisation[a]} update={(e) => this.update(e.target.value, a)} label={translateName(a)} />
		})
		return (
			<div>
				{inputs}
			</div>
		)
	}
}

const mapDispatchToProps = function (dispatch, ownProps) {
	return { actions: bindActionCreators(actionCreators, dispatch) }
}

const mapStateToProps = function (store, ownProps) {
	return {
		DateAndAuthorisation: store.DateAndAuthorisation
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DateAndAuthorisation);
