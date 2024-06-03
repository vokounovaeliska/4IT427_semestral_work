'use client'
import { Brand, CarModel } from '@prisma/client'
import { Fragment, useMemo, useState } from 'react'

const BrandAndModelFormFields = ({
  models,
  brands,
  refreshedParams,
}: {
  models: CarModel[]
  brands: Brand[]
  refreshedParams?:{
    brand: string
    model: string
  },
}) => {
  const [brandId, setBrandId] = useState(refreshedParams?.brand || "")

  const filteredModels = useMemo(() => {
    return models.filter((model) => model.brandId === brandId)
  }, [brandId, models])
  return (
    <Fragment>
      <label >Brand</label>
      <select
       className="form-field"
       id='brandId'
       name='brand'
        defaultValue={refreshedParams?.brand || ""}
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
      <label >Model</label>
      <select className="form-field" defaultValue={refreshedParams?.model || ""} name='model'>
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
