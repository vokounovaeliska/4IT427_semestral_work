'use client'
import { Brand, CarModel } from '@prisma/client'
import { Fragment, useMemo, useState } from 'react'
import OtherCarFormFields from './OtherCarFormFields'

const BrandAndModelFormFields = ({
  models,
  brands,
  refreshedParams,
}: {
  models: CarModel[]
  brands: Brand[]
  refreshedParams:{
    location: string,
    brandId: string,
    modelId: string
  },
}) => {
  const [brandId, setBrandId] = useState(refreshedParams?.brandId || "")

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  return (
    <Fragment>
      <label htmlFor="brand">Brand</label>
      <select
       className="form-field"
        name="brandId"
        required={true}
        id=""
        value={refreshedParams?.brandId}
        onChange={(e) => {
          setBrandId(e.target.value)
        }}
      >
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name}
          </option>
        ))}
      </select>
      <label htmlFor="modelId">Model</label>
      <select name="modelId"  className="form-field" required={true} value={refreshedParams?.modelId}>
        {filteredModels.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </Fragment>
    
  )
}

export default BrandAndModelFormFields
