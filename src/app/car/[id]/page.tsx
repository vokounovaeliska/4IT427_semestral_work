import CarItem from '@/components/CarItem'
import prisma from '@/utils/prisma'
import Link from 'next/link'

const fetchCarDetail = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: { id },
    include: { model: true, brand: true },
  })
  return car
}

const DetailParam = (car: any) => (
  <div className="detail-param">
    <dt className="detail-label">{car?.label}</dt>
    <dd className="detail-value">{car?.value}</dd>
  </div>
)

const CarDetailPage = async ({ params }: { params: { id: string } }) => {
  const car = await fetchCarDetail(params.id)

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-700">Car not found.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <Link href="/">Home</Link>
      <div className="car-title mt-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          {car.brand.name} - {car.model.name}{' '}
        </h1>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <DetailParam label="Year" value={car?.year} />
          <DetailParam label="Price" value={`${car?.price} CZK`} />
          <DetailParam label="Color" value={car?.color} />
          <DetailParam label="Location" value={car?.location} />
          <DetailParam label="Description" value={car?.description} />
        </dl>
      </div>
    </div>
  )
}

export default CarDetailPage
