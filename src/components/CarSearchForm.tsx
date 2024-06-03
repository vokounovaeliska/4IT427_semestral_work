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
      brandId: formData.get("brandId")?.toString() ?? "",
      modelId: formData.get("modelId")?.toString() ?? "",
    };

    router.push(
        `?location=${obj.location}&brandId=${obj.brandId}&modelId=${obj.modelId}`
      )
  }

  const objectsRefreshed = {
    location: searchParams.get("location"),
    brandId: searchParams.get("brandId"),
    modelId: searchParams.get("modelId"),
}

  return (
    <div>
      <form className="flex flex-col"  onSubmit={handleFormSubmit}>
        <BrandAndModelFormFields models={models} brands={brands} refreshedParams={{brandId: objectsRefreshed.brandId || "",
         modelId: objectsRefreshed.modelId || "",  location: objectsRefreshed.location || ""}} />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default CarSearchForm