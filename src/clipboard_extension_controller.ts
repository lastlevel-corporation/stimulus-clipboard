import Clipboard from './controllers'

/* stimulusFetch: 'lazy' */
export default class extends Clipboard {
    protected onSuccessCopy() {
        return console.log("the text has been copied successfully!");
    }

    protected onFailedCopy() {
        return console.log("the text copy has failed!");
    }
}
