import axios from 'axios'

const config = {
  apiKey: 'fhvQUAMPfDxf5wshkfu_I1JO6tMa',
  apiSecret: '3y80UKx2OMuhBGDryjQUNLA3fMYa',
  clientID: 'pontus-dev-200829',
  tokenURL: 'https://api.vasttrafik.se/token',
  dataURL: 'https://api.vasttrafik.se/bin/rest.exe/v2',
  dataFormat: 'json',
}

// const departureBoardDefaults = {
//   useVas: 1, // Västtågen
//   useLDTrain: 1, // Long Distance Trains
//   useRegTrain: 1, // Regional Trains
//   useBus: 1,
//   useBoat: 1,
//   useTram: 1,
//   excludeDR: 0, // journeys which require tel. registration
// }
// const departureBoardOptionals = {
//   timeSpan: 20, // if not set, result will contain next 20 departures (minutes, maximum value: 1439)
//   maxDeparturesPerLine: 2, // returns only given number of journeys for every combination of line and direction
//   needJourneyDetail: 0, // exclude reference URL for the Journey Detail Service
//   direction: '<stopid>', // get only departures of vehicles with a specified direction
// }

export default class Vasttrafik {
  // instance vars
  bearerToken = ''
  expiresAt = 0

  getData = async (path, params) => {
    // check if token needs to be fetched
    if (this.bearerToken === '' || this.tokenExpired()) {
      this.bearerToken = await this.getToken()
    }

    // get call to dataURL + service path, default format to 'json' (config.dataFormat)
    const response = await axios.get(config.dataURL + path, {
      params: Object.assign({ format: config.dataFormat }, params),
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
      },
    })

    return response.data
  }

  getToken = async () => {
    // encode key:secret
    const accessToken = Buffer.from(
      `${config.apiKey}:${config.apiSecret}`,
      'utf8'
    ).toString('base64')

    // post call to get bearer token specific for 'clientID'
    const response = await axios.post(
      config.tokenURL,
      `grant_type=client_credentials&scope=device_${config.clientID}`,
      {
        headers: {
          Authorization: `Basic ${accessToken}`,
        },
      }
    )

    // create a future timestemp "expireAt" using "expires_in" as milliseconds
    this.expiresAt = Date.now() + Number(response.data.expires_in) * 1000

    // return bearer token (despite confusing name)
    return response.data.access_token
  }

  tokenExpired = () => {
    return this.expiresAt - Date.now() < 0 ? true : false
  }
}

// tutorials on token based authorization
// https://medium.com/javascript-in-plain-english/all-in-one-tutorial-on-how-to-create-the-authentication-part-of-your-react-app-2530e7435629
// https://flaviocopes.com/axios-send-authorization-header/
