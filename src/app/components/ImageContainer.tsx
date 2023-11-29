import type { Photo } from "@/models/Images"
import Image from "next/image"

type Props = {
  photo: Photo
}

const ImageContainer = ({ photo }: Props) => {
  return (
    <div key={photo.id} className="h-64 bg-gray-200 rounded-xl relative group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        sizes="(min-width: 1420px) 272px, (min-width: 1080px) calc(5.63vw + 193px), (min-width: 800px) calc(33.08vw - 14px), (min-width: 540px) calc(50vw - 16px), calc(100vw - 16px)"
        className="object-cover group-hover:opacity-75"
      />
    </div>
  )
}
export default ImageContainer
