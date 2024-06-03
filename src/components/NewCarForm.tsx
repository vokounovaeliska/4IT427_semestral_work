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
    <div>
      <form action={createCar} className="flex flex-col rounded-md px-10 py-5 shadow-sm shadow-gray-400">
        <BrandAndModelFormFields models={models} brands={brands} refreshedParams={{brandId: "", modelId: "",  location: ""}} />
     
        <OtherCarFormFields/>
        <button className="btn mt-4" type="submit">submit</button>
      </form>
    </div>
  )
}

export default NewCarForm
