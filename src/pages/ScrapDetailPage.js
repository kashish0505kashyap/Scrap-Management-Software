import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CardData from "../components/CardData";

const ScrapDetailPage = () => {
    const { productId } = useParams();
    const thisProduct = CardData.find((prod) => String(prod.id) === productId);

    const [num, setNum] = useState(thisProduct.amount);
    const [compute, setCompute] = useState(
        num * (thisProduct.sellRate - thisProduct.buyRate)
    );
    const [buyingMoney, setBuyingMoney] = useState(num * thisProduct.buyRate);
    const [sellingMoney, setSellingMoney] = useState(
        num * thisProduct.sellRate
    );

    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isBuying, setIsBuying] = useState(false);
    const [inputAmount, setInputAmount] = useState(0);

    const openPopup = (isBuying) => {
        setIsBuying(isBuying);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (isBuying) {
            handleBuyScrap(inputAmount);
        } else {
            handleSellScrap(inputAmount);
        }
        closePopup();
    };

    const handleBuyScrap = (amount) => {
        setNum(num + parseFloat(amount));
        setCompute(
            (num + parseFloat(amount)) *
                (thisProduct.sellRate - thisProduct.buyRate)
        );
        setBuyingMoney((num + parseFloat(amount)) * thisProduct.buyRate);
    };

    const handleSellScrap = (amount) => {
        if (num >= parseFloat(amount)) {
            setNum(num - parseFloat(amount));
            setCompute(
                (num - parseFloat(amount)) *
                    (thisProduct.sellRate - thisProduct.buyRate)
            );
            setSellingMoney((num - parseFloat(amount)) * thisProduct.sellRate);
        } else {
            alert("Not enough scrap available");
        }
    };

    if (!thisProduct) return <></>;

    return (
        <div className="scrapDetail flex flex-col md:flex-row md:items-center md:justify-center p-8">
            {/* Left Side (Image) */}
            <div className="leftSide mb-4 md:mb-0 md:mr-8">
                <img
                    src={thisProduct.img}
                    alt={thisProduct.title}
                    className="w-96 h-96 rounded"
                />
            </div>

            {/* Right Side (Details) */}
            <div className="rightSide md:w-1/2">
                <h1 className="text-2xl font-bold mb-2">{thisProduct.title}</h1>
                <div className="details">
                    <div className="counter">
                        <p className="text-lg font-semibold mb-2">{num} Kg</p>
                        <div className="btn_div">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
                                onClick={() => openPopup(true)}
                            >
                                Buy Scrap
                            </button>
                            <button
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => openPopup(false)}
                            >
                                Sell Scrap
                            </button>
                        </div>
                    </div>
                    <div className="scrap mt-4">
                        <h3 className="text-lg font-semibold mb-2">
                            Amount of Scrap item currently available in the
                            store: {num} kg
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Buying rate : ₹ {thisProduct.buyRate} /kg
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Selling rate : ₹ {thisProduct.sellRate} /kg
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Estimated Profit with the current amount: ₹{" "}
                            {sellingMoney - buyingMoney}
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Money Invested when Buying: ₹ {buyingMoney}
                        </h3>
                        <h3 className="text-lg font-semibold mb-2">
                            Money Received when Selling: ₹ {sellingMoney}
                        </h3>
                    </div>
                </div>
            </div>

            {isPopupVisible && (
                <div className="popup fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="popup-content bg-white p-4 rounded">
                        <span
                            className="close-btn absolute top-0 right-0 mt-2 mr-2 text-red-500 cursor-pointer text-xl"
                            onClick={closePopup}
                        >
                            &times;
                        </span>
                        <form onSubmit={handleFormSubmit}>
                            <label className="block mb-2">
                                Amount:
                                <input
                                    className="w-full border rounded px-2 py-1"
                                    type="number"
                                    value={inputAmount}
                                    onChange={(e) =>
                                        setInputAmount(e.target.value)
                                    }
                                />
                            </label>
                            <button
                                className="block w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScrapDetailPage;
