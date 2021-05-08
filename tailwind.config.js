module.exports = {
    purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                orange: "#c13515",
                red: "#b32505",
                yellow: "#e07912",
                green: "#008a05",
                blue: "#428bff",
                pink: "#ff385c",
                "dark-pink": "#92174d",
                purple: "#460479",
                grey: "#b0b0b0",
                "dark-grey": "#717171",
                "darkest-grey": "#222",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
