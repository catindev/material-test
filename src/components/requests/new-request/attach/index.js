import template from './attach.tpl.html';

const bindings = {
    data: '<',
    styles: '<'
};

function controller ($scope, Upload, $timeout) {
    this.fDate = () => new Date().toLocaleTimeString();

    this.uploadFile = function(file) {

        file.upload = Upload.upload({
          url: 'api/document/upload',
          data: { file: file, comment: this.comment, attachableId: 1 },
        });

        file.upload.then(function (response) {

          $timeout(function () {
            file.result = response.data;
          });

        }, function (response) {

          if (response.status > 0)
                this.errorMsg = response.status + ': ' + response.data;

        }, function (evt) {

            file.progress = Math.min(
                100, parseInt(100.0 * evt.loaded / evt.total)
            );

        });
    }
}
controller.$inject = ['$scope', 'Upload', '$timeout'];

export default {
    bindings,
    template,
    controller
};
