'use client';

import { Fragment } from 'react';

const OtherCarFormFields = () => {
  return (
    <Fragment>
      <label htmlFor="color">Color</label>
      <input id='color' type="text" name="color" required={true} className="form-field"/>
      <label htmlFor="description">Description</label>
      <input id='description' type="text" name="description"className="form-field" />
      <label htmlFor="price">Price</label>
      <input id='price' type="text" name="price" required={true} className="form-field"/>
      <label htmlFor="location">Location</label>
      <input id='location' type="text" name="location" required={true} className="form-field"/>
      <label htmlFor="year">Year</label>
      <input id='year' type="text" name="year" required={true} className="form-field"/>
    </Fragment>
  );
}

export default OtherCarFormFields;
