import React from 'react';

class TextInput extends React.Component {

	render() {
		return (

				<div className="sv-form-group sv-row">
					<label className="sv-col-md-4 sv-text-right sv-form-control-static">{this.props.label}</label>
					<div className="sv-col-md-2">
						<select className="sv-form-control" onChange={this.props.update} value={this.props.value}>
								<option value=""></option>
								<option value={true}>Yes</option>
								<option value={false}>No</option>
							</select>
					</div>
				</div>

		)
	}
}


export default TextInput;
