import React, { Component } from 'react';
import { Form, Item, Input, Button, Text, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import { LkTextInput, LkPicker } from 'lazy-kitten-redux-form';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';
lang._set('en', en);

const validate = values => {
  const rules = {
    todosName: 'required',
    language: 'required'
  };

  const validator = new Validator(values, rules);
  if(validator.fails()){
    return validator.errors.all();
  }
}

class TodosForm extends Component {
  render() {

    const { handleSubmit } = this.props;

    return(
      <Form>
        <Field component={LkTextInput} name="todosName" label="Name" />
        <Field
          name="language"
          component={LkPicker}
          label="Select Language"
          items={[
            {label: 'Php', value: 'php'},
            {label: 'Javascript', value: 'js'},
            {label: 'Java', value: 'java'},
            {label: 'C', value: 'c'},
            {label: 'Golang', value: 'golang'},
            {label: 'Python', value: 'python'}
          ]}
        />
        <Button onPress={handleSubmit} full>
          <Text>Submit</Text>
        </Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'todos',
  validate
})(TodosForm)