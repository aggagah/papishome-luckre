import lokal from "./assets/lokal.png";
import cycle from "./assets/cycle.png";
import halal from "./assets/halal.png";
import alami from "./assets/alami.png";
import ayam from "./assets/ayam.png";
import bebek from "./assets/bebek.png";
import krecek from "./assets/krecek.png";
import testimoni from "./assets/testimoni.jpg";
import testimoni2 from "./assets/testimoni2.jpg";
import testimoni3 from "./assets/testimoni3.jpg";
import testimoni4 from "./assets/testimoni4.jpg";
import testimoni5 from "./assets/testimoni5.jpg";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function App() {
    return (
        <div className="w-screen h-screen overflow-x-hidden font-philo scroll-smooth">
            {/* Navbar */}
            <Navbar />
            {/* end navbar */}
            {/* body */}
            <div className="bg-body bg-no-repeat bg-cover bg-center bg-opacity-50 h-screen flex justify-center items-center p-large overflow-hidden">
                <div className="w-full lg:w-8/12 flex-col items-center justify-center">
                    <h1 className="text-bodyText text-center text-3xl lg:text-5xl font-philoRegular">
                        WELCOME
                    </h1>
                    <p className="text-center text-bodyText text-sm mt-5 lg:mt-0 lg:text-xl">
                        Selamat datang di PapisHome X Luc’kre di mana anda dapat
                        menemukan berbagai pilihan hidangan lezat. Kami
                        mengutamakan kualitas bahan makanan yang digunakan dalam
                        setiap hidangan kami, sehingga anda dapat merasakan cita
                        rasa yang lezat dan segar dalam setiap gigitannya.
                        Selain itu, kami juga memperhatikan presentasi makanan,
                        sehingga tampilan hidangan kami menarik dan menggugah
                        selera.
                    </p>
                </div>
            </div>
            {/* end body */}

            {/* selaras */}
            <div className="w-screen bg-bodySelaras p-10 flex-col items-center justify-between">
                <h1 className="text-center text-2xl lg:text-3xl text-titleSelaras">
                    Selaras Dengan Kebaikan Alam
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between pt-10">
                    <div className="flex flex-col gap-5">
                        <img src={lokal} alt="" className="mx-auto" />
                        <div className="flex flex-col">
                            <h5 className="text-center text-subTitleSelaras font-bold">
                                Bersumber Lokal
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Mengutamakan herba, rimpang, dan rempah dari
                                Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img src={alami} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras font-bold">
                                Bahan Alami
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Dibuat tanpa tambahan bahan pengawet
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img src={cycle} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras font-bold">
                                Produksi-Konsumsi Beretika
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Menerapkan siklus produksi-konsumsi beretika
                                dari hulu ke hilir
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <img src={halal} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras font-bold">
                                100% Halal
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Halal dan baik untuk asupan sehari-hari
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end selaras */}
            {/* Produk pilihan */}
            <div className="flex flex-col w-screen bg-bgProdukPil h-auto p-10">
                <div className="w-9/12 mb-10 mx-auto text-center lg:text-left">
                    <h1 className="text-2xl lg:text-3xl text-titleSelaras">
                        Produk Pilihan
                    </h1>
                    <p className="text-pararaphSelaras text-base lg:text-lg">
                        Temukan rasa Nusantara disini
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 justify-evenly w-full mx-auto">
                    <div>
                        <img src={krecek} alt="" />
                        <p className="text-center bg-navbarIcon text-bodyText w-9/12 mx-auto text-xl lg:text-2xl p-2 rounded-xl mt-5">
                            Krecek Jogja
                        </p>
                    </div>
                    <div>
                        <img src={bebek} alt="" />
                        <p className="text-center bg-navbarIcon text-bodyText w-9/12 mx-auto text-xl lg:text-2xl p-2 rounded-xl mt-5">
                            Bebek Ungkep
                        </p>
                    </div>
                    <div>
                        <img src={ayam} alt="" />
                        <p className="text-center bg-navbarIcon text-bodyText w-9/12 mx-auto text-xl lg:text-2xl p-2 rounded-xl mt-5">
                            Ayam Kampung
                        </p>
                    </div>
                </div>
            </div>
            {/* end Produk Pilihan */}

            {/* detail produk*/}
            <div className="bg-bodySelaras w-screen h-auto p-10">
                {/* title */}
                <div className="w-7/12 mb-5 mx-auto flex justify-center lg:justify-start">
                    <h1 className="text-2xl lg:text-3xl text-titleSelaras text-center lg:text-left">
                        Krecek Jogja
                    </h1>
                </div>
                <hr class="w-7/12 h-1 mx-auto bg-navbarIcon border-0 rounded mb-5"></hr>
                {/* content */}
                <div className="flex flex-col lg:flex-row justify-around items-center w-7/12 mx-auto gap-5 lg:gap-20">
                    <img src={krecek} alt="" />
                    <div className="flex flex-col justify-center overflow-x-auto">
                        <p className="text-titleSelaras text-base lg:text-xl text-center lg:text-justify">
                            Krecek Jojga adalah hidangan khas jogja yang
                            memiliki cita rasa khas nusantara. Terbuat dari
                            kulit sapi yang dipotong tipis dan dijadikan
                            kerupuk. Kerupuk tersebut kemudian diolah dengan
                            bumbu rempah agar menjadi krecek. Makanan krecek
                            memiliki rasa yang khas, yaitu pedas dan gurih.
                            Selain itu, krecek juga memiliki aroma rempah yang
                            khas dan menggugah selera. Biasa dihidangkan dengan
                            gudeg dan makanan lainnya.
                        </p>
                        <p className="text-titleSelaras text-base lg:text-xl text-center lg:text-justify pt-5 font-bold">
                            Rp 30.000 / 250gr
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-bodySelaras w-screen h-auto p-10">
                {/* title */}
                <div className="w-7/12 mb-5 mx-auto flex justify-center lg:justify-end">
                    <h1 className="text-2xl lg:text-3xl text-titleSelaras text-center lg:text-right">
                        Ayam Kampung Ungkep
                    </h1>
                </div>
                <hr class="w-7/12 h-1 mx-auto bg-navbarIcon border-0 rounded mb-5"></hr>
                {/* content */}
                <div className="flex flex-col-reverse lg:flex-row justify-around items-center w-7/12 mx-auto gap-5 lg:gap-20">
                    <div className="flex flex-col justify-center overflow-x-auto">
                        <p className="text-titleSelaras text-base lg:text-xl text-center lg:text-justify">
                            Ayam ungkep adalah salah satu hidangan khas
                            Indonesia yang terbuat dari ayam yang diolah dengan
                            bumbu-bumbu tradisional dan kemudian dimasak dalam
                            proses penggorengan atau pengukuran dengan
                            menggunakan bahan pelengkap seperti daun salam,
                            serai, dan rempah-rempah lainnya.
                        </p>
                        <p className="text-titleSelaras text-base lg:text-xl text-center lg:text-justify pt-5 font-bold">
                            Rp 90.000 / ekor <br />
                            <span className="text-sm lg:text-base font-normal">
                                + include sambel korek, lalapan daun pepaya, dan
                                ati ampela
                            </span>
                        </p>
                    </div>
                    <img src={ayam} alt="" />
                </div>
            </div>

            <div className="bg-bodySelaras w-screen h-auto p-10">
                {/* title */}
                <div className="w-7/12 mb-5 mx-auto flex justify-center lg:justify-start">
                    <h1 className="text-2xl lg:text-3xl text-titleSelaras text-center lg:text-right">
                        Bebek kampung Ungkep
                    </h1>
                </div>
                <hr class="w-7/12 h-1 mx-auto bg-navbarIcon border-0 rounded mb-5"></hr>
                {/* content */}
                <div className="flex flex-col lg:flex-row justify-around items-center w-7/12 mx-auto gap-5 lg:gap-20">
                    <img src={bebek} alt="" />
                    <div className="flex flex-col justify-center overflow-x-auto">
                        <p className="text-titleSelaras text-base lg:text-xl text-center lg:text-justify">
                            Bebek ungkep memiliki cita rasa yang khas dan unik,
                            dengan perpaduan rasa gurih, manis, dan pedas yang
                            menggugah selera. Dalam proses pengolahannya, bebek
                            ungkep direndam dalam bumbu rempah selama beberapa
                            jam sehingga bumbu meresap ke dalam daging bebek dan
                            menghasilkan rasa yang lezat.
                        </p>
                        <p className="text-titleSelaras text-base lg:text-xl text-center lg:text-justify pt-5 font-bold">
                            Rp 100.000 / ekor <br />
                            <span className="text-sm lg:text-base font-normal">
                                + include sambel korek, lalapan daun pepaya, dan
                                ati ampela
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* end detail produk */}
            {/* testimoni*/}
            <div className="flex-col w-screen bg-bgProdukPil h-auto p-10 overflow-x-auto">
                <div>
                    <h3 className="text-center text-xl text-titleTestimoni font-semibold">
                        TESTIMONI
                    </h3>
                    <h1 className="text-center text-2xl lg:text-3xl text-titleSelaras p-3 mb-5">
                        Apa kata Mereka Tentang
                        <br />
                        PapisHome X Luc'kre
                    </h1>
                </div>
                <div className="flex w-5/6 h-[400px] overflow-x-scroll mx-auto scroll-smooth scroll whitespace-nowrap gap-10 px-2">
                    <div className="flex flex-col justify-center items-center h-[325px] w-full mr-0 lg:mr-20 lg:gap-0 whitespace-nowrap text-center">
                        <img
                            className="border-2 rounded-lg border-titleSelaras mb-5"
                            src={testimoni}
                            width={"150"}
                            height={"100"}
                        ></img>
                        <p className="text-base lg:text-xl text-titleSelaras">
                            "Ayamnya enaak dan sambelnya mantap. <br />
                            Anakku suka" <br />
                            <span className="text-sm text-titleTestimoni font-light">
                                Customer
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[325px] w-[300px] mr-0 lg:mr-20 lg:gap-0 whitespace-nowrap text-center">
                        <img
                            className="border-2 rounded-lg border-titleSelaras mb-5"
                            src={testimoni2}
                            width={"150"}
                            height={"100"}
                        ></img>
                        <p className="text-base lg:text-xl text-titleSelaras">
                            "kreceknya luc'kre dahlah jodoh dunia akhirat<br/>
                            rela ga makan nasi demi makan ini dirumah"<br/>
                            <span className="text-sm text-titleTestimoni font-light">
                                Customer
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[325px] w-[300px] mr-0 lg:mr-20 lg:gap-0 whitespace-nowrap text-center">
                        <img
                            className="border-2 rounded-lg border-titleSelaras mb-5"
                            src={testimoni3}
                            width={"150"}
                            height={"100"}
                        ></img>
                        <p className="text-base lg:text-xl text-titleSelaras">
                            "Enak pisan empuk banget <br />
                            Bumbunya ampe meresap ke dalam2nya"  <br />
                            <span className="text-sm text-titleTestimoni font-light">
                                Customer
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[325px] w-[300px] mr-0 lg:mr-20 lg:gap-0 whitespace-nowrap text-center">
                        <img
                            className="border-2 rounded-lg border-titleSelaras mb-5"
                            src={testimoni4}
                            width={"150"}
                            height={"100"}
                        ></img>
                        <p className="text-base lg:text-xl text-titleSelaras">
                            "Sayur kreceknya enak bu" <br/>
                            <span className="text-sm text-titleTestimoni font-light">
                                Customer
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center h-[325px] w-[300px] mr-0 lg:mr-20 lg:gap-0 whitespace-nowrap text-center">
                        <img
                            className="border-2 rounded-lg border-titleSelaras mb-5"
                            src={testimoni5}
                            width={"150"}
                            height={"100"}
                        ></img>
                        <p className="text-base lg:text-xl text-titleSelaras">
                            "Gak nyesel beli ini ndol pisan empuk banget<br/>
                            bumbunya berasa pisan sammbelnya nendang abis <br/>
                            pokonya wajib beli bebek terenak" <br/>
                            <span className="text-sm text-titleTestimoni font-light">
                                Customer
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/*end testimoni*/}
            {/* contact */}
            {/* <Contact /> */}
            {/* end contact */}
            {/*keterangan*/}
            <div className="flex-col w-screen bg-bodyKet h-auto p-3 lg:p-10">
                <div className="flex justify-around w-full lg:w-9/12 mx-auto h-[200px]">
                    <div className="w-1/3 lg:w-1/4 h-full flex flex-col justify-start">
                        <h3 className="font-bold text-titleSelaras text-center mb-5">
                            PapisHome X Luc'kre
                        </h3>
                        <p className="text-pararaphSelaras text-sm lg:text-base text-center lg:text-justify">
                            Rasa Nusantara meracik kebaikan alam, herba, dan
                            rempah untuk keseharian sehat berkesadaran generasi
                            kini dan nanti. Sejak 2016, Rahasia Nusantara
                            mengupayakan proses yang etis dan bertanggung jawab,
                            dengan mengedepankan bahan-bahan lokal yang alami,
                            kesadaran lingkungan, serta pemberdayaan.
                        </p>
                    </div>
                    <div className="w-1/3 lg:w-1/4">
                        <h3 className="font-bold text-titleSelaras text-center mb-5">
                            Open Hours
                        </h3>
                        <p className="text-pararaphSelaras text-sm lg:text-base text-center">
                            Senin 7AM - 9PM
                            <br />
                            Selasa 7AM - 9PM
                            <br />
                            Rabu 7AM - 9PM
                            <br />
                            Kamis 7AM - 9PM
                            <br />
                            Jumat 7AM - 9PM
                            <br />
                            Sabtu 9AM - 8PM
                            <br />
                            Minggu 9AM - 8PM
                            <br />
                        </p>
                    </div>
                    <div className="w-1/3 lg:w-1/4 flex flex-col justify-start">
                        <h3 className="font-bold text-titleSelaras text-center">
                            Sosial Media
                        </h3>
                        <div className="w-full lg:w-5/12 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-left mt-10 gap-5 lg:gap-0">
                            <a href="https://www.instagram.com/papis.home/">
                                <BsInstagram
                                    className="text-pararaphSelaras"
                                    size={"2em"}
                                />
                            </a>
                            <a href="https://wa.link/y32067">
                                <BsWhatsapp
                                    className="text-pararaphSelaras"
                                    size={"2em"}
                                />
                            </a>
                            <a href="https://www.instagram.com/luc.kre/">
                                <BsInstagram
                                    className="text-pararaphSelaras"
                                    size={"2em"}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/*end keterangan*/}
            {/*cosing*/}
            <div className="bg-titleSelaras w-screen h-auto p-5 lg:p-7">
                <p className="text-center text-white">
                    © PapiesHome X Luc’kre {new Date().getFullYear()}
                </p>
            </div>
            {/*end closing*/}
        </div>
    );
}

export default App;
