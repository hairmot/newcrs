import React from 'react';
import '../../styles/index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../Actions/actionCreators';


class AdditionalCourseInformation extends React.Component {

	render() {
		return (
			<div>
				Hello {this.props.name}
			</div>
		)
	}
}

const mapDispatchToProps = function (dispatch, ownProps) {
	return { actions: bindActionCreators(actionCreators, dispatch) }
}

const mapStateToProps = function (store, ownProps) {
	return {
		name: store.name
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalCourseInformation);
