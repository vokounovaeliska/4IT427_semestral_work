import CarList from '@/components/CarList'
import CarSearchForm from '@/components/CarSearchForm'
import prisma from '@/utils/prisma'
import Link from 'next/link'

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
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Home Page</h1>
      <CarSearchForm brands={brands} models={models} />
      <CarList cars={filteredCars} brands={brands} models={models} />
      <div className="mt-4 text-center">
        <Link href="/car/new">Add New Car</Link>
      </div>
    </div>
  )
}

export default HomePage
