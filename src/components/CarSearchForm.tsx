'use client'
import { Brand, CarModel } from '@prisma/client'
import BrandAndModelFormFields from './BrandAndModelFormFields'
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';


const CarSearchForm = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
    const router = useRouter(); 
    const searchParams = useSearchParams(); 

function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const obj = {
      location: formData.get("location")?.toString() ?? "",
      brand: formData.get("brand")?.toString() ?? "",
      model: formData.get("model")?.toString() ?? "",
    };

    router.push(
        `?location=${obj.location}&brand=${obj.brand}&model=${obj.model}`
      )
  }

  const handleClear = () => {
    router.push('/')
  };

  const objectsRefreshed = {
    location: searchParams.get("location"),
    brand: searchParams.get("brand"),
    model: searchParams.get("model"),
}

  return (
    <div>
      <form className="flex flex-col"  onSubmit={handleFormSubmit}>
        <BrandAndModelFormFields models={models} brands={brands} refreshedParams={{brand: objectsRefreshed.brand || "",
         model: objectsRefreshed.model || ""}} />
         <label htmlFor="locationId">Location</label>
         <input id='locationId' type="text" name="location" defaultValue={objectsRefreshed?.location || ""} className="form-field"/>
        <button type="submit">Filter</button>
        <button onClick={handleClear} type="button">Clear</button>
      </form>
    </div>
  )
}

export default CarSearchForm