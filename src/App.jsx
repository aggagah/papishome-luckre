import lokal from "./assets/lokal.png";
import cycle from "./assets/cycle.png";
import halal from "./assets/halal.png";
import alami from "./assets/alami.png";
import ayam from "./assets/ayam.png";
import bebek from "./assets/bebek.png";
import krecek from "./assets/krecek.png";
import testimoni from "./assets/testimoni.jpg";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function App() {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            {/* Navbar */}
            <Navbar />
            {/* end navbar */}
            {/* body */}
            <div className="bg-body bg-no-repeat bg-cover bg-center bg-opacity-50 h-screen flex justify-center items-center p-large overflow-hidden">
                <div className="w-50 flex-col items-center justify-center">
                    <h1 className="text-bodyText text-center text-5xl">
                        WELCOME
                    </h1>
                    <p className="text-center text-bodyText text-xl">
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
                <h1 className="text-center text-3xl text-titleSelaras">
                    Selaras dengan kebaikan alam
                </h1>
                <div className="flex justify-between pt-10">
                    <div className="flex-col">
                        <img src={lokal} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras">
                                Bersumber Lokal
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Mengutamakan herba, rimpang, dan rempah dari
                                Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="flex-col">
                        <img src={alami} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras">
                                Bahan Alami
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Dibuat tanpa tambahan bahan pengawet
                            </p>
                        </div>
                    </div>
                    <div className="flex-col">
                        <img src={cycle} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras">
                                Produksi-Konsumsi Beretika
                            </h5>
                            <p className="text-center text-pararaphSelaras">
                                Menerapkan siklus produksi-konsumsi beretika
                                dari hulu ke hilir
                            </p>
                        </div>
                    </div>
                    <div className="flex-col">
                        <img src={halal} alt="" className="mx-auto" />
                        <div className="flex-col">
                            <h5 className="text-center text-subTitleSelaras">
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
            <div className="flex-col w-screen bg-bgProdukPil h-auto p-10">
                <div className="w-9/12 mb-10 mx-auto">
                    <h1 className="text-3xl text-titleSelaras">
                        Produk Pilihan
                    </h1>
                    <p className="text-pararaphSelaras text-lg">
                        Temukan rasa Nusantara disini
                    </p>
                </div>
                <div className="flex justify-evenly w-full mx-auto">
                    <div>
                        <img src={krecek} alt="" />
                        <p className="text-center bg-navbarIcon text-bodyText w-9/12 mx-auto text-2xl p-2 rounded-xl mt-1">
                            Krecek Jogja
                        </p>
                    </div>
                    <div>
                        <img src={bebek} alt="" />
                        <p className="text-center bg-navbarIcon text-bodyText w-9/12 mx-auto text-2xl p-2 rounded-xl mt-1">
                            Bebek Ungkep
                        </p>
                    </div>
                    <div>
                        <img src={ayam} alt="" />
                        <p className="text-center bg-navbarIcon text-bodyText w-9/12 mx-auto text-2xl p-2 rounded-xl mt-1">
                            Ayam Kampung
                        </p>
                    </div>
                </div>
            </div>
            {/* end Produk Pilihan */}

            {/* detail produk*/}
            <div className="bg-bodySelaras w-screen h-auto p-10">
                {/* title */}
                <div className="w-7/12 mb-5 mx-auto flex justify-start">
                    <h1 className="text-3xl text-titleSelaras">Krecek Jogja</h1>
                </div>
                <hr class="w-7/12 h-1 mx-auto bg-navbarIcon border-0 rounded mb-5"></hr>
                {/* content */}
                <div className="flex justify-around items-center w-7/12 mx-auto gap-20">
                    <img src={krecek} alt="" />
                    <p className="text-titleSelaras text-xl">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repudiandae rerum, deserunt amet provident illo
                        laborum quos delectus iste laboriosam accusamus iure
                        culpa maiores dolorum commodi assumenda quae quasi ipsa!
                        Laboriosam deserunt consectetur tenetur, pariatur
                        voluptatibus aut. Quod aliquam reiciendis labore enim
                        qui alias repudiandae ex, corrupti eligendi corporis
                        consequuntur hic.
                    </p>
                </div>
            </div>
            <div className="bg-bodySelaras w-screen h-auto p-10">
                {/* title */}
                <div className="w-7/12 mb-5 mx-auto flex justify-end">
                    <h1 className="text-3xl text-titleSelaras">
                        Ayam Kampung Ungkep
                    </h1>
                </div>
                <hr class="w-7/12 h-1 mx-auto bg-navbarIcon border-0 rounded mb-5"></hr>
                {/* content */}
                <div className="flex justify-around items-center w-7/12 mx-auto gap-20">
                    <p className="text-titleSelaras text-xl">
                        Ayam ungkep adalah salah satu hidangan khas Indonesia
                        yang terbuat dari ayam yang diolah dengan bumbu-bumbu
                        tradisional dan kemudian dimasak dalam proses
                        penggorengan atau pengukuran dengan menggunakan bahan
                        pelengkap seperti daun salam, serai, dan rempah-rempah
                        lainnya.
                    </p>
                    <img src={ayam} alt="" />
                </div>
            </div>

            <div className="bg-bodySelaras w-screen h-auto p-10">
                {/* title */}
                <div className="w-7/12 mb-5 mx-auto flex justify-start">
                    <h1 className="text-3xl text-titleSelaras">
                        Bebek kampung Ungkep
                    </h1>
                </div>
                <hr class="w-7/12 h-1 mx-auto bg-navbarIcon border-0 rounded mb-5"></hr>
                {/* content */}
                <div className="flex justify-around items-center w-7/12 mx-auto gap-20">
                    <img src={bebek} alt="" />
                    <p className="text-titleSelaras text-xl">
                        Bebek ungkep memiliki cita rasa yang khas dan unik,
                        dengan perpaduan rasa gurih, manis, dan pedas yang
                        menggugah selera. Dalam proses pengolahannya, bebek
                        ungkep direndam dalam bumbu rempah selama beberapa jam
                        sehingga bumbu meresap ke dalam daging bebek dan
                        menghasilkan rasa yang lezat.
                    </p>
                </div>
            </div>
            {/* end detail produk */}
            {/* testimoni*/}
            <div className="flex-col w-screen bg-bgProdukPil h-auto p-10">
                <div>
                    <h3 className="text-center text-lg text-titleTestimoni font-semibold">
                        TESTIMONI
                    </h3>
                    <h1 className="text-center text-3xl text-titleSelaras p-3">
                        Apa kata Mereka Tentang
                        <br />
                        PapisHome X Luc'kre
                    </h1>
                </div>
                <div className="flex justify-around items-center w-6/12 mx-auto p-5">
                    <p className="text-xl text-titleSelaras">
                        "Ayamnya enaak dan sambelnya mantap. <br />
                        Anakku suka" <br />
                        <span className="text-sm text-titleTestimoni font-light">
                            NAMA IBU-IBU
                        </span>
                    </p>
                    <img
                        className="border-2 rounded-lg border-titleSelaras"
                        src={testimoni}
                        width={"250"}
                        height={"200"}
                    ></img>
                </div>
            </div>
            {/*end testimoni*/}
            {/* contact */}
            <Contact />
            {/* end contact */}
            {/*keterangan*/}
            <div className="flex-col w-screen bg-bodyKet h-auto p-10">
                <div className="flex justify-around w-9/12 mx-auto">
                    <div className="w-1/4">
                        <h3 className="font-bold text-titleSelaras text-center">PapisHome X Luc'kre</h3>
                        <p className="text-pararaphSelaras">Rahsa Nusantara meracik kebaikan alam, herba, dan rempah
                            untuk keseharian sehat berkesadaran generasi kini dan nanti. 
                            Sejak 2016, Rahsa Nusantara mengupayakan proses yang etis dan 
                            bertanggung jawab, dengan mengedepankan bahan-bahan lokal yang alami, 
                            kesadaran lingkungan, serta pemberdayaan.
                        </p>
                    </div>
                    <div className="w-1/4">
                        <h3 className="font-bold text-titleSelaras text-center">Open Hours</h3>
                        <p className="text-center text-pararaphSelaras">
                            Senin       7AM - 9PM<br/>
                            Selasa      7AM - 9PM<br/>
                            Rabu        7AM - 9PM<br/>
                            Kamis       7AM - 9PM<br/>
                            Jumat       7AM - 9PM<br/>
                            Sabtu       9AM - 8PM<br/>
                            Minggu      9AM - 8PM<br/>
                        </p>
                    </div>
                    <div className="w-1/4">
                        <h3 className="font-bold text-titleSelaras text-center">Sosial Media</h3>
                        <div className="w-5/12 mx-auto flex justify-around mt-10">
                            <BsInstagram className="text-pararaphSelaras" size={"1.5em"}/>
                            <BsWhatsapp className="text-pararaphSelaras" size={"1.5em"}/>
                            <BsInstagram className="text-pararaphSelaras" size={"1.5em"}/>
                        </div>
                    </div>
                </div>
            </div>
            {/*end keterangan*/}
            {/*cosing*/}
            <div className="bg-titleSelaras w-screen h-auto p-7">
                <p className="text-center text-white">© PapiesHome X Luc’kre 2023</p>
            </div>
            {/*end closing*/}
        </div>
    );
}

export default App;
