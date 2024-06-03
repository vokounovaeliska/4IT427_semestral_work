import NewCarForm from '@/components/NewCarForm'
import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchBrands = async () => {
  const brands = await prisma.brand.findMany()
  return brands
}

const fetchModels = async () => {
  const models = await prisma.carModel.findMany()
  return models
}

const NewCarPage = async () => {
  const brands = await fetchBrands()
  const models = await fetchModels()

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <Link href="/">Home</Link>
      <h1 className="text-3xl font-bold text-center mb-6">New Car</h1>
      <NewCarForm brands={brands} models={models} />
    </div>
  )
}

export default NewCarPage
