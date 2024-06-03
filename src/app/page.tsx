import CarList from '@/components/CarList'
import CarSearchForm from '@/components/CarSearchForm'
import prisma from '@/utils/prisma'


const getCars = async () => {
  const cars = await prisma.car.findMany({
    include: {
      model: true,
      brand: true,
    },
  })
  return cars
}

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

const HomePage = async ({
  searchParams,
}: {
  searchParams: {
    location: string
    brand: string
    model: string
  }
}) => {
  const cars = await getCars()
  const brands = await fetchBrands()
  const models = await fetchModels()

  const filteredCars = cars.filter((car) => {
    const location = searchParams.location
    const brand = searchParams.brand
    const model = searchParams.model
 
    return (
      (location ? car.location?.includes(searchParams.location) : true) &&
      (brand ? car.brand.id.includes(searchParams.brand) : true) &&
      (model ? car.model.id.includes(searchParams.model) : true)
    )
  })
  
  return (
    <div>
      Home Page
      { <CarSearchForm brands={brands} models={models} />
      }
      <CarList cars={filteredCars} brands={brands} models={models}/>
    </div>
  )
}

export default HomePage
