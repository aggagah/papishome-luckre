import React from "react";
import { GoLocation } from "react-icons/go";
import { SlScreenSmartphone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div className="flex-col w-screen bg-bgProdukPil h-auto p-10">
            <div className="w-8/12 mx-auto text-center">
                <h1 className="text-titleSelaras text-2xl lg:text-3xl">
                    Contact Us
                </h1>
                <p className="text-titleSelaras text-base lg:text-lg">
                    Dapatkan informasi dan promo terbaru dari kami
                </p>
            </div>
            <div className="w-full lg:w-8/12 mx-auto flex justify-around mt-20 gap-2 lg:gap-0">
                {/* location */}
                <div className="flex flex-col items-center justify-around w-2/6 h-auto">
                    <GoLocation
                        className="mx-auto text-contactText"
                        size={"1.5em"}
                    />
                    <p className="text-contactText text-base lg:text-lg v">
                        Buah Batu
                    </p>
                </div>
                {/* phone */}
                <div className="flex flex-col items-center justify-around w-2/6 h-auto">
                    <SlScreenSmartphone
                        className="mx-auto text-contactText"
                        size={"1.5em"}
                    />
                    <p className="text-contactText text-base lg:text-lg text-center">
                        nomor wa
                    </p>
                </div>
                {/* email */}
                <div className="flex flex-col items-center justify-around w-2/6 h-auto">
                    <CiMail
                        className="mx-auto text-contactText"
                        size={"1.5em"}
                    />
                    <p className="text-contactText text-base lg:text-lg text-center">
                        email si mamah
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
