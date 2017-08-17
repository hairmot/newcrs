import React from 'react';

class TextInput extends React.Component {

	render() {
		return (

				<div className="sv-form-group sv-row">
					<label className="sv-col-md-4 sv-text-right sv-form-control-static">{this.props.label}</label>
					<div className="sv-col-md-4">
						<input onChange={this.props.update} className="sv-form-control" value={this.props.val} />
					</div>
				</div>

		)
	}
}


export default TextInput;
