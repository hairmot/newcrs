import React from 'react';
import '../../styles/index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../Actions/actionCreators';
import TextInput from './TextInput';
import BoolInput from './BoolInput';
import translateName from '../util/translateName';


class CourseInformation extends React.Component {

	update = (val, item) => {
		this.props.actions.updateInput(val, 'CourseInformation', item)
	}

	render() {
		var inputs = Object.keys(this.props.CourseInformation).map((a, i) => {
			return typeof(this.props.CourseInformation[a]) == 'boolean' ?
				<BoolInput key={i} value={this.props.CourseInformation[a]} update={(e) => this.update(e.target.value === 'true', a)} label={translateName(a)} /> :
				<TextInput key={i} val={this.props.CourseInformation[a]} update={(e) => this.update(e.target.value, a)} label={translateName(a)} />
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
		CourseInformation: store.CourseInformation
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseInformation);
