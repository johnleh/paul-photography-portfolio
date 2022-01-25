import Link from "next/link"

export default function NotFound() {
    return ( 
        <div className="page_container">
            <h1>Uh Oh!</h1>
            <h2>Page not found!</h2>
            <p>Click <Link href="/"><a><b>here</b></a></Link> to return to home.</p>
        </div>
    )
}