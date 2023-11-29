import type { ImagesResults } from "@/models/Images"
import { ImagesSchemaWithPhotos } from "@/models/Images"

export async function fetchImages(
  url: string
): Promise<ImagesResults | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${process.env.PEXELS_API_KEY}`
        Authorization: process.env.PEXELS_API_KEY || "",
      },
    })

    if (!res.ok) throw new Error("Fetch images error!\n")

    const imagesResults: ImagesResults = await res.json()

    console.log(imagesResults)
    // parse data with zod schema
    const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)

    if (parsedData.total_results === 0) return undefined
    return parsedData
  } catch (error) {
    if (error instanceof Error) console.log(error.stack)
  }
}
