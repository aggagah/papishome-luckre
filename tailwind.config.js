/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                body: "url('./src/assets/bgbody.jpg')",
            },
            height: {
                selaras: "300px",
            },
            padding: {
                large: "100px",
                medium: "50px",
            },
            colors: {
                navbarBg: "#876C43",
                navbarTitle: "#D5B57A",
                navbarIcon: "#483111",
                bodyText: "#fff",
                bodySelaras: "#E1E0D7",
                titleSelaras: "#483111",
                subTitleSelaras: "#483215",
                pararaphSelaras: "#57534E",
                bgProdukPil: "#FBF7F2"
            },
        },
    },
    plugins: [],
};
