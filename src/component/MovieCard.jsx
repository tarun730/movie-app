import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/components/ui/card";
import { Link } from "react-router-dom"



const MovieCard = ({ data, movielink }) => {
  const {
    Title,
    Poster,
    Type,
    Year,
  } = data;

  const posterSrc = Poster !== "N/A" ? Poster : "/placeholder.png"; // Make sure you have a placeholder image

  return (
    <Card className="MovieCard w-64 shadow-lg pb-0
    
  
    
    ">
     

      <div className="grid md:grid-cols-2    ">

        <CardHeader>
          <img src={posterSrc} alt={`Poster of ${Title}`} className="h-auto w-[9vw] max-w-full rounded-lg" />
        </CardHeader>
        <CardContent className="details p-4">
          <CardTitle>{Title}</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {/* <p>Type: {Type}</p> */}
            <p>Year: {Year}</p>
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter className="mt-auto hidden xl:inline-flex items-center text-white bg-primary shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center rounded-b-lg">
        <Link to={movielink}><CardAction className="uppercase">more details</CardAction></Link>
      </CardFooter>
    </Card>

  );
};

export default MovieCard;
