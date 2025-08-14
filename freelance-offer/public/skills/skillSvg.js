
export default function Split({ index }) {
return (
    <svg id={`skillsvg-${index}`} class="skillSvg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs> 
            <linearGradient id={`sw-skill${index}`} x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="gainsboro" offset="0%"></stop>
                <stop id="stop2" stop-color="white
                " offset="100%"></stop>
            </linearGradient>
        </defs>
    <path fill={`url(#sw-skill${index})`} d="M21.2,-25.4C26.6,-20.6,29.7,-13.2,31.6,-5.2C33.6,2.9,34.4,11.6,31.1,18.7C27.9,25.8,20.7,31.4,13.1,32.8C5.4,34.2,-2.5,31.6,-10.9,29C-19.3,26.3,-28,23.8,-32.4,17.9C-36.8,12,-36.9,2.7,-34.7,-5.5C-32.5,-13.7,-28,-20.8,-21.8,-25.4C-15.6,-30.1,-7.8,-32.3,0,-32.3C7.9,-32.4,15.7,-30.2,21.2,-25.4Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"  stroke={`sw-skill${index}`}></path>
    </svg>
);
}