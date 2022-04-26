module.exports = {
    mode: "jit",
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx,vue}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            urbanist: ["Urbanist", "sans-serif"],
        },
        extend: {
            colors: {
                "light-purple": "#5142FC",
                "bg-purple": "#13131f",
                card: "#343444",
                "custm-black": "#0D0D11",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
