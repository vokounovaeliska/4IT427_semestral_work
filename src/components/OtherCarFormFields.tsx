import { Fragment } from 'react'

const OtherCarFormFields = () => {
  return (
    <Fragment>
      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="colorId" className="form-label">
          Color
        </label>
        <input
          id="colorId"
          type="text"
          name="color"
          required={true}
          className="form-field"
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="descriptionId" className="form-label">
          Description
        </label>
        <input
          id="descriptionId"
          type="text"
          name="description"
          className="form-field"
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="priceId" className="form-label">
          Price
        </label>
        <input
          id="priceId"
          type="text"
          name="price"
          required={true}
          className="form-field"
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="locationId" className="form-label">
          Location
        </label>
        <input
          id="locationId"
          type="text"
          name="location"
          className="form-field"
        />
      </div>

      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="yearId" className="form-label">
          Year
        </label>
        <input
          id="yearId"
          type="text"
          name="year"
          required={true}
          className="form-field"
        />
      </div>
    </Fragment>
  )
}

export default OtherCarFormFields
