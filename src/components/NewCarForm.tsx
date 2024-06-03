import { createCar } from '@/utils/actions'
import { Brand, CarModel } from '@prisma/client'
import BrandAndModelFormFields from './BrandAndModelFormFields'
import OtherCarFormFields from './OtherCarFormFields'

const NewCarForm = ({
  models,
  brands,
}: {
  models: CarModel[]
  brands: Brand[]
}) => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-md shadow-md">
      <form action={createCar} className="flex flex-col space-y-4 items-center">
        <BrandAndModelFormFields
          models={models}
          brands={brands}
          refreshedParams={{ brand: '', model: '' }}
        />
        <OtherCarFormFields />
        <button
          className="btn bg-blue-500 text-white font-semibold rounded-md py-2 hover:bg-blue-600 transition duration-200 lg:w-1/2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default NewCarForm
