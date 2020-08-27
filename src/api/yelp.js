import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer 0OUv_BUGb-EHH7Wz6MMlw2GRgAbULMFIg82Em4CwscadGX4UNdmZRICnsysS0y6VEu42Bq4pcSDcPWX8xnQ0K5QOTvdtAYSI9IFmzkDvt6im4hNs66siH67APAhGX3Yx'
    }
})

