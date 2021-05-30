import { StarIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { useState } from "react"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

function CheckoutProduct({ id, title, price, description, category, image, hasPrime }) {
    const dispatch = useDispatch()

    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime
        }
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }));
    }


    const MAX_RATING = 5
    const MIN_RATING = 1
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING)
    return (
        <div className=" grid grid-cols-5">
            <Image src={image} width={200} height={200} objectFit="contain" />
            {/* Mid */}
            <div className="col-span-3">
                <p className=''>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="h-5 text-yellow-500" />
                    ))}

                </div>
                <p className="text-xs my-2 line-clamp-3">{description} </p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime &&
                    <div className="flex items-center space-x-2">
                        <img loading="lazy" class="w-12" src="https://links.papareact.com/fdw" alt="" />
                        <p className='text-xs text-gray-500 '>FREE Next-day Delivery</p>
                    </div>

                }


            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className='button'>Add to Basket</button>
                <button onClick={removeItemFromBasket} className='button'>Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
