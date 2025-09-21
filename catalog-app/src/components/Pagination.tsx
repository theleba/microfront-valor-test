import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

const Pagination = ({prevUrl, nextUrl, fetchPokemons}:
    {
    prevUrl: string | null;
    nextUrl: string | null;
    fetchPokemons: (prevUrl: string) => void 
    }) => {
    return (
         <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => prevUrl && fetchPokemons(prevUrl)}
          disabled={!prevUrl}
          className={`px-4 py-2 text-[#f40c0c] disabled:opacity-50`}
        >
           <ArrowBigLeft/>
        </button>
        <button
          onClick={() => nextUrl && fetchPokemons(nextUrl)}
          disabled={!nextUrl}
          className={`px-4 py-2 text-[#f40c0c] disabled:opacity-50`}
        >
          <ArrowBigRight/>
        </button>
      </div>
    )
}

export default Pagination