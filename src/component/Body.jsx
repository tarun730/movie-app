

import { Button } from "@/components/components/ui/button"
import { Input } from "@/components/components/ui/input"
import React, { useState, useEffect } from "react"
import { Skeleton } from "@/components/components/ui/skeleton"
import MovieCard from "./MovieCard"
import { BlurFade } from "@/components/magicui/blur-fade";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/components/ui/pagination"


const Body = () => {

    const [search, setsearch] = useState("Avengers")
    const [Data, SetData] = useState([])
    const [page, setpage] = useState(parseInt(1))
    const [loading, setloading] = useState(true)
    // console.log(page)
    // const [page, setPage] = useState(1);
    const totalPages = Math.ceil(Data.length / 10); // example: 10 items per page




    const APIKEY = "ba7a19ab"
    useEffect(() => { fetchdata() }, [page])

    const fetchdata = () => {


        fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${search}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                if (data.Response == "False") {
                    throw new Error(" sorry😔, try to be more specific with movie name");
                }

                SetData(data)
                setloading(() => false)

            })

            .catch(err => alert(err.message));
    }

    return (
        <div className="body">
            <div className="searchbar my-6 ">
                <div className="flex w-full max-w-sm items-center gap-2">
                    <Input type="text" placeholder="search movie" name="search" className="search" onChange={(e) => setsearch(e.target.value)} value={search} />
                    <Button type="submit" onClick={(e) => {
                        e.preventDefault()
                        fetchdata()
                    }}> Search </Button>
                </div>
            </div>

            <section  id="header" className="moviecollection grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* {

                    Data.length === 0 ? <h1>enter movie name</h1> : Data.Search.map((item) => <Link to={/movie/ + item.imdbID} key={item.imdbID}> <MovieCard data={item} /></Link>)

                } */}
                {
                    !Data.Search || loading
                        ? <SkeletonCard />
                        : Data.Search.map((item,idx) => (
                            <BlurFade className="flex" key={idx} delay={0.25 + idx * 0.05} inView>
                            <MovieCard key={item.imdbID} data={item} movielink={`/movie/${item.imdbID}`} />
                            </BlurFade>
                            ))
                }

            </section >








            <Pagination className="py-6">
                <PaginationContent>
                    {
                        Data.length === 0 ? null :
                            < >
                                <PaginationItem>
                                    <PaginationPrevious  onClick={
                                        () => {
                                            setloading(() => true)
                                            setpage(prev => {
                                                if (prev < 1) return;
                                                return prev - 1;
                                              });
                                        }
                                    } />
                                </PaginationItem>


                                <PaginationItem>
                                    <PaginationLink href="#">{page}</PaginationLink>
                                </PaginationItem>

                                <PaginationItem>
                                    <PaginationNext onClick={
                                        () => {
                                            setloading(() => true)
                                            setpage(() => page + parseInt(1))
                                        }
                                    } />
                                </PaginationItem>

                            </>


                    }
                </PaginationContent>
            </Pagination>
        </div>
    )
}
export default Body



export function SkeletonCard() {
    return (

        <>
            {
               Array.from({ length: 3 }, (_, index) =>  (
                    <div key={index} className="flex flex-col space-y-3">
                        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>

               ))
            }

        </>



    )
}