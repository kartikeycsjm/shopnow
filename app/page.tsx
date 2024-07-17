import Item from "./assets/components/Items/page";
import { product } from "./assets/types/type";
const getData = async () => {
  const res = await fetch('http://shopnow1.vercel.app/api/products', { cache: "no-store" })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const { data } = await getData();
  const categories = Array.from(new Set(data.map((item: product, index: number) => (item.category))))
  return (
    <div className="w-full min-h-screen">
      {
        categories.map((item:any, index:number) => (
          <div key={index}>
          <h2 className="font-bold m-3 text-[20px]">{item}</h2>
              <div id="category" className="w-[90%] m-4 p-2">
                {
                  data.map((i: product, ind: number) => (
                    <div key={ind}>
                      {
                        i.category === item &&
                        <Item name={i.name} 
                          description={i.description}
                          price={i.price}
                          picture={'/products/' + i.picture + '.png'}
                        />
                      }
                    </div>
                  ))
                }
              </div>
          </div>
        ))
      }
    </div>
  );
}
