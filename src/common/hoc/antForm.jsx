import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

function antForm(WrappedComponent) {
  class Wrapper extends React.Component {
    static propsTypes = {
      initialValues: PropTypes.object,
      onSubmit: PropTypes.func.isRequired,
      errors: PropTypes.object,
    }

    static defaultProps = {
      initialValues: {},
      errors: {},
    }

    /**
     * Set initial form values and errors when form mounted
     */
    componentDidMount() {
      const { form, initialValues, errors } = this.props;
      form.setFieldsInitialValue(initialValues);
      form.setFieldsValue(initialValues);
      this.setErrors(errors);
    }

    /**
     * Set form errors passed from parent component
     * @param {Object} prevProps
     */
    componentDidUpdate(prevProps) {
      const { errors } = this.props;
      if (prevProps.errors !== errors) {
        this.setErrors(errors);
      }
    }

    /**
     * Set form field errors
     * @param {Object} errors
     */
    setErrors(errors) {
      const { form } = this.props;
      Object.entries(errors).forEach(([field, messages]) => {
        form.setFields({
          [field]: {
            value: form.getFieldValue(field),
            errors: [Error(messages[0])],
          },
        });
      });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const { form, onSubmit } = this.props;
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }

        // export submit event to outside
        onSubmit(values);
      });
    }

    render() {
      const {
        initialValues, onSubmit, errors, ...props
      } = this.props;
      return (
        <WrappedComponent {...props} onSubmit={this.handleSubmit} />
      );
    }
  }

  Wrapper.displayName = 'AntForm';
  return Form.create()(Wrapper);
}

export default antForm;
