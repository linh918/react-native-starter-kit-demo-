// import RNFetchBlob from "react-native-fetch-blob";

// const Blob = RNFetchBlob.polyfill.Blob;
// const fs = RNFetchBlob.fs;

export default class NetworkUtils {
  /**
     * 
     * @param {string} url 
     * @callback {res} onSuccess, {error} onFailure 
     */
  static downloadFileToSpecificDiretory(url, onSuccess, onFailure) {
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      path: dirs.DownloadDir + "/" + this.getFileNameWithExtension(url)
    })
      .fetch(
        "GET",
        url,
        {
          //them headers
        }
      )
      .then(onSuccess)
      .catch(onFailure);
  }

  /**
     * 
     * @param {string} url 
     * @callback {res} onSuccess, {error} onFailure 
     */
  static downloadFileToDefaultDirectory(url, onSuccess, onFailure) {
    RNFetchBlob.config({
      // file saved into /data/data/com.fetch-blob
      fileCache: true
    })
      .fetch(
        "GET",
        url,
        {
          //headers
        }
      )
      .then(onSuccess)
      .catch(onFailure);
  }

  /**
     * 
     * @param {string} url 
     * @param {string} extension 
     * @callback {res} onSuccess, {error} onFailure 
     */
  static downloadFileWithExtension(url, extension, onSuccess, onFailure) {
    let dirs = RNFetchBlob.fs.dirs;
    RNFetchBlob.config({
      path:
        dirs.DownloadDir +
        "/" +
        this.getFileNameWithoutExtension(url) +
        "." +
        extension,
      appendExt: extension
    })
      .fetch(
        "GET",
        url,
        {
          //some headers ..
        }
      )
      .then(onSuccess)
      .catch(onFailure);
  }

  /**
     * 
     * @param {string} filepath 
     * @param {string} server 
     * @callback {res} onSuccess ,{error} onFailure 
     */
  static uploadFileToServer(filepath, server, onSuccess, onFailure) {
    RNFetchBlob.fetch(
      "POST",
      server,
      {
        Authorization: "Bearer access-token...",
        "Content-Type": "application/octet-stream"
      },
      RNFetchBlob.wrap(filepath)
    )
      .then(onSuccess)
      .catch(onFailure);
  }

  /**
     * 
     * @param {string} url 
     */
  
  static getFileNameWithExtension(url) {
    let arr = url.split("/");
    return arr[arr.length - 1];
  }

  /**
     * 
     * @param {string} url 
     */
  static getFileNameWithoutExtension(url) {
    let arr = url.split("/");
    return arr[arr.length - 1].split(".")[0];
  }

  /**
   * 
   */
  static isInternetConnected() {
    return NetInfo.isConnected.fetch().then(isConnected => {
      return isConnected;
    });
  }

  /**
   * 
   * @callback calbackFunction 
   */
  static connectInfo(calbackFunction) {
    return NetInfo.addEventListener("change", calbackFunction);
  }
/**
 * 
 * @param {*} url 
 * @callback  onSuccess 
 * @callback  onFailure 
 */
  static getDataFromApi(url, onSuccess, onFailure) {
    console.log("getdata" + url);
    fetch(url)
      .then(response => response.json())
      .then(onSuccess)
      .catch(onFailure);
  }
}
