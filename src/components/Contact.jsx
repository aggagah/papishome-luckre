import React from "react";
import { GoLocation } from "react-icons/go";
import { SlScreenSmartphone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";

function Contact() {
    return (
        <div className="flex-col w-screen bg-bgProdukPil h-auto p-10">
            <div className="w-8/12 mx-auto text-center">
                <h1 className="text-titleSelaras text-3xl">Contact Us</h1>
                <p className="text-titleSelaras text-lg">
                    Dapatkan informasi dan promo terbaru dari kami
                </p>
            </div>
            <div className="w-8/12 mx-auto flex justify-around mt-20">
                {/* location */}
                <div>
                    <GoLocation
                        className="mx-auto text-contactText"
                        size={"1.5em"}
                    />
                    <p className="text-contactText text-lg">Buah Batu</p>
                </div>
                {/* phone */}
                <div>
                    <SlScreenSmartphone
                        className="mx-auto text-contactText"
                        size={"1.5em"}
                    />
                    <p className="text-contactText text-lg">nomor wa</p>
                </div>
                {/* email */}
                <div>
                    <CiMail
                        className="mx-auto text-contactText"
                        size={"1.5em"}
                    />
                    <p className="text-contactText text-lg">email si mamah</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
