import items from "../../shared/data/items.json"
import { ItemCard } from "../../shared/components/ItemCard"

export const Store = () => {
    return (
        <>
            <h1 className="text-center mt-6 text-4xl uppercase tracking-wider font-medium text-blue-900">Store</h1>
            <section className="my-16 w-full flex flex-1 justify-center items-center gap-2 flex-wrap">
                {items.map((item) => (
                    <ItemCard key={item.id} {...item} />
                ))}
            </section>
        </>
    )
}