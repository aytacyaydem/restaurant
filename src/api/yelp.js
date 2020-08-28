import axios from "axios"

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer 3O30OPcNVoHCxpPYK3is6WSU3DaFxBYVvfCMMzyRWBmnJ1Eb8c1reT8zuFIbH1uI1uNgQYLe92zdkS2PNE_YoHvuy7Ar8T6EaBm6H0nIoaZpfxGxMij897zUytRAX3Yx"
    }
})