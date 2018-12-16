const axios = require('axios')

const estimate = (priceEstimate) => {
    const price = priceEstimate.replace(/[R$]+/g, '')
    const value = price.split('-')
    const sum = Number(value[0]) + Number(value[1])
    return sum / 2
}

module.exports = app => {
    const Exam = require('../models/exam')
    const Business = require('../business/professional')(app)
    const Validate = require('../../helpers/validate')

    return {
        pricing: async (req, res) => {
            try {
                const price = await axios.get('https://api.uber.com/v1.2/estimates/price?start_latitude=-23.568216&start_longitude=-46.701410&end_latitude=-23.586341&end_longitude=-46.663855', {
                    headers: { Authorization: `Token 7zG9bn9BRCag49ps-CILj-VutKWb-_yEMuf36Yia` }
                })

                const black = price.data.prices.find(uberCategory => uberCategory.display_name === 'Black')
                const blackValue = estimate(black.estimate)
                // Exam.create
                res.send({
                    value: blackValue * 4 + 60,
                    uber: true
                }).status(201)

            } catch (error) {
                console.log(error)
            }
            // curl -H 'Authorization: Token <SERVER_TOKEN>' \
            // -H 'Accept-Language: en_US' \
            // -H 'Content-Type: application/json' \
            // 'https://api.uber.com/v1.2/estimates/price?start_latitude=37.7752315&start_longitude=-122.418075&end_latitude=37.7752415&end_longitude=-122.518075'
        }
    }
}
