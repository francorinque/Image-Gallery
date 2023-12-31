import { fetchImages } from "@/lib/fetchImages"
import { ImagesResults } from "@/models/Images"
import ImageContainer from "./ImageContainer"

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated"

  const images: ImagesResults | undefined = await fetchImages(url)
  if (!images) return <h2 className="m-4 text-2xl font-bold">No images</h2>

  return (
    <section className="px-2 my-3 grid gap-4 grid-cols-gallery">
      {images.photos.map((photo) => (
        <ImageContainer photo={photo} />
      ))}
    </section>
  )
}
