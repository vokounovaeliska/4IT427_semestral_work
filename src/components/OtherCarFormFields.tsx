'use client';

import { Fragment } from 'react';

const OtherCarFormFields = () => {
  return (
    <Fragment>
      <label htmlFor="colorId">Color</label>
      <input id='colorId' type="text" name="color" required={true} className="form-field"/>
      <label htmlFor="descriptionId">Description</label>
      <input id='descriptionId' type="text" name="description"className="form-field" />
      <label htmlFor="priceId">Price</label>
      <input id='priceId' type="text" name="price" required={true} className="form-field"/>
      <label htmlFor="locationId">Location</label>
      <input id='locationId' type="text" name="location" className="form-field"/>
      <label htmlFor="yearId">Year</label>
      <input id='yearId' type="text" name="year" required={true} className="form-field"/>
    </Fragment>
  );
}

export default OtherCarFormFields;
