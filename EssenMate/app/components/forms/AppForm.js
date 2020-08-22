import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import { RFC_2822 } from 'moment';

function AppForm({initialValues, onSubmit, validationSchema, children}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppForm;
