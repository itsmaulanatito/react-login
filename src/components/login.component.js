import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Login extends Component {

	handleSubmit = e => {
		e.preventDefault();

		const data = {
			email: this.email,
			password: this.password
		}

		axios.post('http://localhost:8000/login', data).then(
			res => {
				console.log(res);
			}
		).catch (
			err => {
				console.log(err);
			}
		)
	};
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<h3>Login</h3>

				<div className="form-group">
					<label>Email</label>
					<input type="email" className="form-control" placeholder="Email"
						onChange={e => this.email = e.target.value} />
				</div>

				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Password"
						onChange={e => this.password = e.target.value} />
				</div>

				<label>
        			<input type="checkbox" />
        				Remember me
      			</label>

				<button className="btn btn-primary btn-block">Login</button>
				<Link className="btn btn-success btn-block" to={'/register'}>Register</Link>
			</form>
		);
	}
}