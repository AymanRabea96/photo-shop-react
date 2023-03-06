import React, { useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"
function Photos() {
    const { allPhotos } = useContext(Context)
    const photos = allPhotos.map((photo, i) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(i)} />
        )
    })
    return (
        <main className="photos">
            {photos}
        </main>
    )
}

export default Photos
