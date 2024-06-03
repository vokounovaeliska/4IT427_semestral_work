'use client'

import { Brand, CarModel } from '@prisma/client'
import BrandAndModelFormFields from './BrandAndModelFormFields'
import { useRouter, useSearchParams } from 'next/navigation'

const CarSearchForm = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const obj = {
      location: formData.get('location')?.toString() ?? '',
      brand: formData.get('brand')?.toString() ?? '',
      model: formData.get('model')?.toString() ?? '',
    }

    router.push(
      `?location=${obj.location}&brand=${obj.brand}&model=${obj.model}`
    )
  }

  const handleClear = () => {
    router.push('/')

    const form = document.getElementById('carSearchForm') as HTMLFormElement
    const elements = form.elements

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLInputElement | HTMLSelectElement

      if (element.tagName === 'INPUT') {
        const input = element as HTMLInputElement
        if (
          input.type !== 'submit' &&
          input.type !== 'button' &&
          input.type !== 'reset'
        ) {
          input.value = ''
        }
      } else if (element.tagName === 'SELECT') {
        const select = element as HTMLSelectElement
        select.value = ''
      }
    }
  }

  const objectsRefreshed = {
    location: searchParams.get('location'),
    brand: searchParams.get('brand'),
    model: searchParams.get('model'),
  }

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <form
        id="carSearchForm"
        className="flex flex-col lg:flex-row items-end space-y-4 lg:space-y-0 lg:space-x-4"
        onSubmit={handleFormSubmit}
      >
        <BrandAndModelFormFields
          models={models}
          brands={brands}
          refreshedParams={{
            brand: objectsRefreshed.brand || '',
            model: objectsRefreshed.model || '',
          }}
        />
        <div className="flex flex-col w-full lg:w-1/2">
          <label htmlFor="locationId" className="text-gray-700 font-semibold">
            Location
          </label>
          <input
            id="locationId"
            type="text"
            name="location"
            defaultValue={objectsRefreshed.location || ''}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition duration-200"
            type="submit"
          >
            Filter
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md shadow hover:bg-gray-400 transition duration-200"
            onClick={handleClear}
            type="button"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

export default CarSearchForm
