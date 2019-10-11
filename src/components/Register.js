import React, { Component } from 'react'
import Axios from 'axios';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
        };
      }
    change(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    onSubmit = async e => {
        try {
            e.preventDefault();
            await Axios.post('http://localhost:8000/api/register', {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
            this.props.history.push("/login")
        } catch (err) {
            alert(err.response.data)
        }
        
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                Register
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>                 
                                     <div className="form-group row">
                                         <label className="col-md-4 col-form-label text-md-right">
                                             Name
                                         </label>
                                         <div className="col-md-6">
                                             <input 
                                                 type="text"
                                                 name="name" 
                                                 placeholder="name"
                                                 required 
                                                 onChange={e => this.change(e)}
                                              />
                                         </div>
                                     </div>
                                     <div className="form-group row">
                                         <label className="col-md-4 col-form-label text-md-right">
                                             Email
                                         </label>
                                         <div className="col-md-6">
                                             <input 
                                                 type="email"
                                                 name="email"
                                                 placeholder="Email"
                                                 required 
                                                 onChange={e => this.change(e)}
                                              />
                                         </div>
                                     </div>
                                     <div className="form-group row">
                                         <label className="col-md-4 col-form-label text-md-right">
                                             Password
                                         </label>
                                         <div className="col-md-6">
                                             <input 
                                                 type="password"
                                                 name="password"
                                                 placeholder="Password" 
                                                 required 
                                                 onChange={e => this.change(e)}
                                              />
                                         </div>
                                     </div>
                                     <div className="form-group row mb-0">
                                         <div className="col-md-8 offset-md-4">
                                             <button type="submit" className="btb btn-primary">
                                                 Register
                                             </button>                            
                                         </div>
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
