import { useContext } from "react";
import { BooksContext } from "../../context";
import { MdDeleteOutline, MdOutlineShoppingCart } from "react-icons/md";
import { toast } from 'react-toastify';

const CartDetails = ({ onClose }) => {
    const { state, dispatch } = useContext(BooksContext);

    function handleDeleteCart(event, item) {
        event.preventDefault();

        dispatch({
            type:"REMOVE_FROM_CART",
            payload:item
        });
        toast.success(`Removed ${item.title} from Cart !`, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 text-black bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
                <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
                    <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
                        Your Carts
                    </h2>
                    <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                    {
                        state.cartData.length === 0 ?
                        (
                            <p className="text-3xl overflow-hidden">The Cart is Empty!!!</p>
                         ) :
                        (<>
                            {state.cartData.map((item) => (
                                <div
                                    key={item.id}
                                    className="grid grid-cols-[1fr_auto] gap-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            className="rounded overflow-hidden"
                                            src={ `${item.cover}`}
                                            alt={item.title}
                                            width={"80px"}
                                            height={"80px"}
                                        />
                                        <div>
                                            <h3 className="text-base md:text-xl font-bold">
                                                {item.title}
                                            </h3>
                                            <p className="max-md:text-xs text-[#575A6E]">
                                                {item.genre}
                                            </p>
                                            <span className="max-md:text-xs">
                                                ${item.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-4 items-center">
                                        <button
                                            className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                                            onClick={() => handleDeleteCart(event, item)}>
                                                <MdDeleteOutline />
                                            <span className="max-md:hidden">
                                                Remove
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </>)
                    }
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a
                            className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                            href="#"
                        >
                            <MdOutlineShoppingCart/>
                            <span>Checkout</span>
                        </a>
                        <a
                            className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                            href="#"
                            onClick={onClose}
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartDetails