import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createPost } from '../../actions';

class PostNew extends Component {

  handleFormSubmit({ title, categories, content, writer, edition, rating, dop }) {
    //console.log(title);

    //console.log(categories);
    //console.log(content);
    this.props.createPost({ title, categories, content, writer, edition, rating, dop }, (path) => {  // callback 1: history push
      this.props.history.push(path);
    }, (path, state) => {  // callback 2: history replace
      this.props.history.replace(path, state);
    });
  }


  // renderInput = (field) => (
  //   <fieldset className="form-group">
  //     <label>{field.label}</label>
  //     <input
  //       className="form-control"
  //       {...field.input}
  //       type={field.type}
  //       placeholder={field.placeholder}
  //       required={field.required? 'required' : ''}
  //       disabled={field.disabled? 'disabled' : ''}
  //     />
  //   </fieldset>
  // );

  renderInput = ({ label, input, type, meta: { touched, error, warning } }) => (
    <fieldset className="form-group">
      {<label>{label}</label>}
      <input className="form-control" placeholder={label} {...input} type={type} required='required' />
      {touched && error && <span className="text-danger">{error}</span>}
    </fieldset>
  );

  renderTextEditor = (field) => (
    <fieldset className="form-group">
      <label>{field.label}</label>
      <input className="form-control" id="x" type="hidden" name="content" />
      <trix-editor input="x" {...field.input} />
    </fieldset>
  );

  renderAlert() {

    const { state } = this.props.history.location;
    const { action } = this.props.history;

    if (state && action === 'REPLACE') {
      return (
        <div className="alert alert-danger" role="alert">
          {`[${state.time}] --- `} <strong>Oops!</strong> {state.message}
        </div>
      );
    }
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className="post">
        {this.renderAlert()}
        <h2 className="mb-5">New Review</h2>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <Field name="title" component={this.renderInput} type="text" label="Name of the Book:"
            placeholder="Please enter the name of the book" />


          <Field name="writer" component={this.renderInput} type="text" label="Author:"
            placeholder="Please Enter Name of the Author" />

          <Field name="rating" component={this.renderInput} type="number" label="Review out of 5:"
            placeholder="Rate the book out of 5" />


          <Field name="dop" component={this.renderInput} type="date" label="Date of Publication:"
            placeholder="dd/mm/yyyy" />


          <Field name="edition" component={this.renderInput} type="text" label="Edition:"
            placeholder="Please enter edition here" />

          <Field name="categories" component={this.renderInput} type="text" label="Categories:"
            placeholder="Enter your category" />

          <Field name="content" component={this.renderTextEditor} label="Your Review Goes Here:" />
          <button action="submit" className="btn btn-primary">Post</button>
        </form>
      </div>
    );
  }
}

PostNew = reduxForm({
  form: 'post_new',  // name of the form
})(PostNew);

export default connect(null, { createPost })(PostNew);