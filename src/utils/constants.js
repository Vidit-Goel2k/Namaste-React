export const CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";

const getCorsProxiedApi = (apiUrl) => {
    // return 'https://corsproxy.org/?' 
    return 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent(apiUrl)
} 

const SWIGGY_API = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6302312&lng=77.4349177&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

const SWIGGY_RESTAURANT_API = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6275674&lng=77.4376541&restaurantId=';

// export const SWIGGY_API_CORS_PROXIED = SWIGGY_API; // getCorsProxiedApi(SWIGGY_API);
export const SWIGGY_API_CORS_PROXIED = getCorsProxiedApi(SWIGGY_API);

export const SWIGGY_RESTAURANT_API_CORS_PROXIED = getCorsProxiedApi(SWIGGY_RESTAURANT_API);

// export const SWIGGY_API_DATA = "data.cards[4].card.card.gridElements.infoWithStyle";
// export const SWIGGY_API_RESTAURANT_DATA = "restaurants[].info";