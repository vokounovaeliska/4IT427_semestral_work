import { CarWithDeps } from '@/types/prismaTypes'
import Link from 'next/link'

const CarItem = ({ car }: { car: CarWithDeps }) => {
  return (
    <Link href={`/car/${car.id}`}>
      <div className="flex w-full rounded-lg border border-gray-200 p-4 shadow-md hover:bg-slate-100 transition-colors duration-200 cursor-pointer">
        <div className="flex items-center space-x-4">
          <div className="w-24 h-16 bg-gray-200 rounded-md"></div>
          <div className="text-base">
            <h1 className="text-xl font-semibold text-gray-800">
              {car.brand.name} {car.model.name}
            </h1>
            <h2 className="text-gray-600">
              {`${car.color} - ${car.location} - ${car.price} CZK`}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarItem
