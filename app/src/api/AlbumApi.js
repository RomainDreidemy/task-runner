import BaseApi from './BaseApi'

class AlbumApi extends BaseApi {
  async getPhotoByAlbum (id) {
    const { data } = await this.get(`/albums/${id}/photos`)
    console.log({ Photo: data })
    return data
  }
}

export default new AlbumApi()
