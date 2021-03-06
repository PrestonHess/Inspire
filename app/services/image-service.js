import Img from "../models/image.js"
import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {

  getImg() {
    imgApi.get('')
      .then(res => {
        let newImg = new Img(res.data)
        store.commit('img', newImg)
      })
      .catch(err => {
        console.error(err);
      })
  }


  constructor() {
  }
}

const imageService = new ImageService();
export default imageService;
