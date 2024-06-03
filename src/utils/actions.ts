'use server'

import { redirect } from 'next/navigation'
import prisma from './prisma'

export const createCar = async (formData: FormData) => {
  const modelId = formData.get('modelId')?.toString()
  const brandId = formData.get('brandId')?.toString()
  const description = formData.get('description')?.toString()
  const color = formData.get('color')?.toString()
  const location = formData.get('location')?.toString()
  const price = formData.get('price')?.toString()
  const year = formData.get('year')?.toString()

  if (!modelId || !brandId || !description || !color || !location || !price || !year) {
    return
  }

  await prisma.car.create({
    data: {
      modelId: modelId,
      brandId: brandId,
      description: description,
      color: color,
      location: location,
      price: parseFloat(price),
      year: parseInt(year, 10),
    },
  })

  redirect('/')
}
