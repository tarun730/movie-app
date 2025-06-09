import React, { useEffect, useState } from "react";
import { useParams ,Link } from "react-router-dom";
// import Image from "next/image";
// import Link from "next/link";
import { Star, HeartIcon, ShoppingCartIcon } from "lucide-react";

import { Button } from "@/components/components/ui/button";

const Moviedetails = () => {
    let { id } = useParams();

    console.log(id)
    const [movieDetailsData, setmovieDetailsData] = useState([])
    // const APIKEY="ba7a19ab"
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=ba7a19ab&i=${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.Response == "False") {
                    throw new Error(" sorry😔, try to be more specific with movie name");
                }

                setmovieDetailsData(data)
            })

            .catch(err => alert(err));

    }, [])
    console.log(movieDetailsData)
    const { Title, Plot, BoxOffice, Released, Poster, Actors, Director, Genre, Language, Runtime, Type, imdbRating } = movieDetailsData
    return movieDetailsData.length === 0 ? <h1>loading.....</h1> : (
        <div className="Moviedetails">



<div
      className="mx-auto max-w-2xl px-4 py-14 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
        <figure className="mx-auto shrink-0">
          <img
           src={Poster}
            alt="..."
            width={800}
            height={600}
            className="w-full rounded-lg"
            unoptimized />
        </figure>

        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold md:text-3xl">
            {Title}
            </h1>

            <div className="sm:flex sm:items-center sm:gap-4">
              <p className="text-xl font-semibold sm:text-2xl">BoxOffice: {BoxOffice}</p>
              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <div className="flex items-center gap-0.5">
                 {imdbRating}
                    <Star className="size-5 fill-yellow-400 text-yellow-400" />
                
                </div>
                <p className="text-muted-foreground text-sm">Duration:-{Runtime}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button>
              {Genre}
              </Button>
              <Button >
              {Language} ,   {Released}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground">
            {Plot}
            </p>
            <h4 className="text-foreground font-medium">Cast</h4>
            <ul role="list" className="list-disc space-y-2 ps-5">
              <li>{Actors}</li>
            </ul>
            <h4 className="text-foreground font-medium">Director</h4>
            <ul role="list" className="list-disc space-y-2 ps-5">
              <li>{Director}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>








        </div>
    )
}
export default Moviedetails