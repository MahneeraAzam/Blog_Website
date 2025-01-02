import { Button } from "@/components/ui/button"
import MyCards from "./myCards"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { ICard } from "./hero"

export default async function PopularPosts() {
  
    const res: ICard[] = await client.fetch(`*[_type == 'cards'][0].cards[]{
    'cardImg': cardImg.asset->url,
    'description': description,
    'category': category,
    'date': date,
    'heading': heading,
    'id': id
  }`)
  
  return (
    <div className="bg-[#DA5F38]">
         <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold tracking-tight text-[white]">Popular Post</h2>
        <Link href={'/blog'}>
          <Button variant="default" className="bg-[#E97451] text-white hover:bg-[#DA5F38]">
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {res.slice(0,6).map((post, index: number) => (
          <MyCards key={index} post={post}/>
        ))}
      </div>
    </section>
    </div>
 
  )
}
