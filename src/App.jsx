import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import logo from "./assets/logo.png";
import lokal from "./assets/lokal.png";
import cycle from "./assets/cycle.png";
import halal from "./assets/halal.png";
import alami from "./assets/alami.png";

function App() {
    return (
        <div className="w-screen h-screen overflow-x-hidden">
            <nav className="h-auto bg-navbarBg w-full px-7 py-5 flex justify-between absolute top-0">
                <div className="left flex gap-5 items-center">
                    <img src={logo} className="w-40" />
                    <ul className="flex gap-2 text-navbarTitle text-lg">
                        <li>Semua Produk</li>
                        <li>Kategori</li>
                    </ul>
                </div>
                <div className="right flex gap-5 items-center">
                    <ul className="flex gap-2 text-navbarTitle text-lg">
                        <li>Tentang Kami</li>
                        <li>Kontak Kami</li>
                    </ul>
                    <div className="flex gap-5">
                        <AiOutlineSearch
                            className="text-navbarIcon"
                            size={"1.5em"}
                        />
                        <CgProfile className="text-navbarIcon" size={"1.5em"} />
                        <AiOutlineShoppingCart
                            className="text-navbarIcon"
                            size={"1.5em"}
                        />
                    </div>
                </div>
            </nav>

            {/* body */}
            <div className="bg-body bg-no-repeat bg-cover bg-center bg-opacity-50 h-screen flex justify-center items-center p-large overflow-hidden mt-10">
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
        </div>
    );
}

export default App;
