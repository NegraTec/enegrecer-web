import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class NewComplaintForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      report: '',
      ocurrenceDate: '',
      categoryId: '',
      address: '',
      latitude: '',
      longitude: '',
    };
  }

  handleChange(event, property) {
    this.setState({ [property]: event.target.value });
  }

  handleSubmit() {
    this.props.salvarDenuncia(this.state);
  }

  renderTextField(name) {
    return (
      <TextField
        id={name}
        value={this.state[name]}
        onChange={event => this.handleChange(event, name)}
      />
    );
  }

  render() {
    return (
      <form id="form-nova-denuncia" onSubmit={this.handleSubmit}>
        <h1>Nova Denúncia</h1>
        <label htmlFor="report">Detalhamento:</label>
        {this.renderTextField('report')}

        <label htmlFor="ocurrenceDate">Data e Hora do ocorrido:</label>
        {this.renderTextField('ocurrenceDate')}

        <label htmlFor="categoryId">Categoria (injury ou racism)</label>
        {this.renderTextField('categoryId')}

        <h3>Local do crime</h3>
        <br />

        <label htmlFor="address">Endereço:</label>
        {this.renderTextField('address')}
        <br />

        <label htmlFor="latitude">Latitude:</label>
        {this.renderTextField('latitude')}
        <br />

        <label htmlFor="longitude">Longitude:</label>
        {this.renderTextField('longitude')}
        <br />

        <button type="submit" id="btn-salvar-denuncia">
              Salvar
        </button>
      </form>);
  }
}

NewComplaintForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
};