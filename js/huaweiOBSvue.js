// ;(function($, window, document, undefined) {
var uploadType = "";
var defaults = {
    ak: '',
    sk: '',
    server: '',
    bucket: '',
    acl: 'public-read',
    input_file: 'input_file',
    elupload_file: 'eluploadFile',
    chunked: false,
    chunkSize: 1024 * 1024 * 5,
    multiple: false,
    fileLimit: 10000,
    fileSingleSizeLimit: 1024 * 1024 * 100,
    prefix: 'obs',
    accept: '',
    _container: null,
    timeout: 600,
    partNumberSize: [],
    onComplete: function(file) {

    },
    onBeforeFileQueued: function() {
        return true;
    },
    onFilesQueued: function(file) {
        return true;
    },
    onUploadSuccess: function(file, objectKey) {

    },
    onError: function(type) {

    },
    onUploadError: function(error) {

    },
    getPercent: function(transferredAmount, totalAmount, totalSeconds) {

    }
};

function OBSUploader(options) {
    this.options = {
        ...defaults,
        ...options
    };
    // this.options._container = document.getElementById(this.options.input_file);
    this._createInput();
}
window.OBSUploader.prototype = {
    constructor: OBSUploader,
    calculatePercent: function(transferredAmount, partNumber, totalAmount, f) {
        var part = this._getUploaded(f);
        part.partNumberSize[partNumber - 1] = transferredAmount;
        this._pushData(f, 'partNumberSize', part.partNumberSize);
        var j = 0,
            t = 0,
            l = part.partNumberSize.length;
        for (; j < l; j++) {
            if (part.partNumberSize[j] > 0)
                t += part.partNumberSize[j];
        }
        return parseInt((t * 100) / totalAmount);
    },
    _createObsClient: function() {
        var obsClient = new ObsClient({
            access_key_id: this.options.ak,
            secret_access_key: this.options.sk,
            server: this.options.server,
            timeout: this.options.timeout
        });
        return obsClient;
    },
    _initData: function() {
        this.options.processData = {};

    },
    // 为对象设置预定义访问策略
    _setObjectAcl: function(key, Bucket, ACL, onSuccess, onError) {
        let obsClient = this._createObsClient()
        if( ACL === 'public' ) ACL = obsClient.enums.AclPublicRead
        if( ACL === 'private' ) ACL = obsClient.enums.AclPrivate
        obsClient.setObjectAcl({
            Bucket: Bucket,
            Key: key,
            ACL
        }, function(err, result) {
            if (err) {
                onError && onError()
                console.error('Error-->' + err);
            } else {
                onSuccess && onSuccess()
                console.log('Status-->' + result.CommonMsg.Status);
            }
        });
    },
    _getObjFile: function(key, cacl) {
        let obsClient = this._createObsClient()
        let url = '';
        obsClient.getObject({
            Bucket: this.options.bucket,
            Key: key,
            SaveByType: 'file'
        }, function(err, result) {
            if (err) {
                console.error('Error-->' + err);
            } else {
                console.log('Status-->' + result.CommonMsg.Status);
                if (result.CommonMsg.Status < 300 && result.InterfaceResult) {
                    // 获取下载对象的路径
                    url = result.InterfaceResult.Content.SignedUrl
                    cacl(url)
                }
            }
        });

    },
    _pushData: function(f, key, value) {
        var name = f.name;
        var data = this.options.processData;
        var pdata = data[name];
        if (!pdata) {
            pdata = {};
        }
        pdata[key] = value;
        this.options.processData[name] = pdata;
        //  return pdata;
    },
    _getUploaded: function(f, partNumber, transferredAmount) {
        if (!this.options.processData[f.name] || !this.options.processData[f.name].partNumberSize) {
            this._pushData(f, 'partNumberSize', []);
        }
        var dd = this._getCurrentData(f);
        //   console.log(dd);
        return dd;
        //   this.options.processData[f.name].partNumberSize[partNumber - 1] = transferredAmount;
    },
    _getCurrentData: function(f) {
        return this.options.processData[f.name];
    },
    upload: function(num, filesRes) {
        uploadType = num;
        if (num == 1) {
            document.getElementById(this.options.prefix + this.options.input_file).click();
        } else {
            //拖拽上传
            // document.getElementById(this.options.elupload_file).click();
            this._addFileListener(2, filesRes);
        }


    },
    _validateFile: function(files) {
        if (this.options.accept) {
            for (var i = 0; i < files.length; i++) {
                var suffix = this._getSuffix(files[i].name);
                if (!suffix || this.options.accept.toUpperCase().indexOf(suffix.toUpperCase()) == -1) {
                    this.options.onError('Q_TYPE_DENIED');
                    if (uploadType == 1) {
                        this._clearFile();
                    }
                    return false;
                }
                // console.log(typeof this.options.validateSize);
                if (typeof this.options.validateSize === 'function') {
                    var b = this.options.validateSize(files[i]);
                    if (!b) {
                        return false;
                    }
                } else if (this.options.fileSingleSizeLimit <= files[i].size) {
                    this.options.onError('Q_EXCEED_SIZE_LIMIT');
                    if (uploadType == 1) {
                        this._clearFile();
                    }
                    return false;
                }
                if (this.options.multiple) { //多文件上传
                    if (files.length > this.options.fileLimit) {
                        this.options.onError('Q_EXCEED_NUM_LIMIT');
                        if (uploadType == 1) {
                            this._clearFile();
                        }
                        return false;
                    }
                }

            }
        }
        return true;
    },
    _createInput: function() {
        var input;
        var dom = document.createElement('span');
        if (this.options.multiple) {
            dom.innerHTML = '<input type="file" style="display:none" name="' + this.options.prefix + this.options.input_file + '" id="' + this.options.prefix + this.options.input_file + '" multiple="multiple"/>';
        } else {
            dom.innerHTML = '<input type="file" style="display:none" name="' + this.options.prefix + this.options.input_file + '" id="' + this.options.prefix + this.options.input_file + '" />';
        }
        // console.log(this.options.input_file + '11111');
        var input_container = document.getElementById(this.options.prefix + this.options.input_file) && document.getElementById(this.options.prefix + this.options.input_file).parentNode
        if (input_container) {
            document.getElementById(this.options.input_file).parentNode.removeChild(input_container)
        }
        document.getElementById(this.options.input_file).parentNode.appendChild(dom)
        this._addFileListener(1, "");
    },

    _addFileListener: function(num, typfiles) {
        // e.preventDefault();
        var b = this.options.onBeforeFileQueued();
        if (b) {
            if (num == 1) {
                document.getElementById(this.options.prefix + this.options.input_file).addEventListener('change', this._bind(function() {
                    this.options._container = document.getElementById(this.options.prefix + this.options.input_file);
                    var files = this.options._container;
                    // console.log(files);
                    if (files.files.length == 0) {
                        return;
                    }
                    this.options.onComplete(files.files);
                    let validateFile = this._validateFile(files.files);
                    if (validateFile) {
                        let success = this.options.onFilesQueued(files.files);
                        if (success) {
                            this._initData();
                            if (this.options.multiple) { //多文件上传
                                for (let i = 0; i < files.files.length; i++) {
                                    // console.log(files[i]);
                                    let f = files.files[i];
                                    // console.log(f);
                                    this._uploadFile(f);
                                }
                            } else {
                                this._uploadFile(files.files[0]);
                            }
                        }
                    }
                }, this));
            } else {
                let validateFile = this._validateFile(typfiles);
                if (validateFile) {
                    let success = this.options.onFilesQueued(typfiles);
                    if (success) {
                        this._initData();
                        if (this.options.multiple) { //多文件上传
                            for (let i = 0; i < typfiles.length; i++) {
                                // console.log(files[i]);
                                let f = typfiles[i];
                                // console.log(f);
                                this._uploadFile(f);
                            }
                        } else {
                            this._uploadFile(typfiles);
                        }
                    }
                }
            }
        }
    },

    _uploadFile: function(file) {
        if (this.options.chunked && file.size > this.options.chunkSize) { //分片上传
            this._uploadChunkFile(file);
        } else {
            this._uploadSingleFile(file);
        }
    },
    _uploadChunkFile: function(file) { //分片上传
        var key = this._createRandomId() + this._getSuffix(file.name);
        if (this.options.key) {
            key = this.options.key + key
        }
        var createObsClient = this._createObsClient();
        var part = Math.ceil(file.size / this.options.chunkSize);
        //   this.options.parts = [];
        this._pushData(file, 'parts', []);
        createObsClient.initiateMultipartUpload({
            Bucket: this.options.bucket,
            Key: key
        }, this._bind(function(err, result) {
            //console.log(result);
            if (err) {
                this.options.onUploadError(err);
                console.error('Error-->' + err);
            } else {
                console.log('Status-->' + result.CommonMsg.Status);
                if (result.CommonMsg.Status < 300 && result.InterfaceResult) {
                    var uploadId = result.InterfaceResult.UploadId;
                    //console.log('UploadId-->' + uploadId);
                    var that = this;
                    that._pushData(file, 'uploadId', uploadId);
                    var part = Math.ceil(file.size / this.options.chunkSize);
                    //console.log('part = ' + part);
                    var parts = [];
                    for (var j = 0; j < part; j++) {
                        (function(j) {
                            createObsClient.uploadPart({
                                Bucket: that.options.bucket,
                                Key: key,
                                // 设置分段号，范围是1~10000
                                PartNumber: j + 1,
                                // 设置Upload ID
                                UploadId: uploadId,
                                // 设置将要上传的大文件
                                SourceFile: file,
                                // 设置分段大小
                                PartSize: that.options.chunkSize,
                                // 设置分段的起始偏移大小
                                Offset: that.options.chunkSize * j,
                                ProgressCallback: that.options.getPercent
                            }, that._bind(function(err, result) {
                                if (err) {
                                    console.log('Error-->' + err);
                                    that.options.onUploadError(file, err);
                                } else {
                                    console.log('Status-->' + result.CommonMsg.Status);
                                    if (result.CommonMsg.Status < 300 && result.InterfaceResult) {
                                        console.log('ETag-->' + result.InterfaceResult.ETag);
                                        // var etag = result.InterfaceResult.ETag.replaceAll('"','');
                                        var etag = result.InterfaceResult.ETag;
                                        var content = that._getCurrentData(file);
                                        content.parts.push({
                                            'PartNumber': j + 1,
                                            'ETag': etag
                                        });
                                    } else {
                                        that.options.onUploadError(file, err);
                                    }
                                }
                            }, that));


                        })(j);

                    }
                }
            }
        }, this));
        var that = this;

        function combineFile() {
            var content = that._getCurrentData(file);
            var parts = content.parts;
            //console.log(parts);
            if (parts.length == part) {
                parts.sort(function(value1, value2) {
                    if (value1.PartNumber < value2.PartNumber) {
                        return -1;
                    } else if (value1.PartNumber > value2.PartNumber) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                createObsClient.completeMultipartUpload({
                    Bucket: that.options.bucket,
                    Key: key,
                    // 设置Upload ID
                    UploadId: content.uploadId,
                    Parts: parts
                }, that._bind(function(err, result) {
                    if (uploadType == 1) {
                        this._clearFile();
                    }
                    if (err) {
                        console.log('Error-->' + err);
                        this.options.onUploadError(file, err);
                    } else {
                        console.log('Status-->' + result.CommonMsg.Status);
                        if (result.CommonMsg.Status < 300 && result.InterfaceResult) {
                            this.options.onUploadSuccess(file, key);
                        } else {
                            this.options.onUploadError(file, err);
                        }

                    }
                }, that));
            } else {
                setTimeout(combineFile, 300);
            }
        }
        combineFile();
        //              }
        //          }
        //      }, this));



    },
    _uploadSingleFile: function(file) {
        var createObsClient = this._createObsClient();
        var objectKey = this._createRandomId() + this._getSuffix(file.name);
        if (this.options.key) {
            objectKey = this.options.key + objectKey
        }
        createObsClient.putObject({
            Bucket: this.options.bucket,
            Key: objectKey,
            SourceFile: file,
            ProgressCallback: this.options.getPercent
        }, this._bind(function(err, result) {
            if (uploadType == 1) {
                this._clearFile();
            }
            if (err) {
                this.options.onUploadError(file, err);
                console.error('Error-->' + err);
            } else {
                console.log('Status-->' + result.CommonMsg.Status);
                this.options.onUploadSuccess(file, objectKey);

            }
        }, this));

    },
    _clearFile: function() {
        document.getElementById(this.options.prefix + this.options.input_file).removeEventListener('change', function() {});
        this.options._container.value = '';
    },
    _getSuffix: function(fileName) {
        if (fileName && fileName.indexOf('.') > -1) {
            var s = fileName.substr(fileName.lastIndexOf('.'), fileName.length);
            return s;
        }
        return '';
    },
    _createRandomId: function() {
        return (Math.random() * 10000000).toString(16).substr(0, 4) + '-' + (new Date()).getTime() + '-' + Math.random().toString().substr(2, 5);
    },
    _bind: function(fn, _this) {
        return function() {
            return fn.apply(_this, arguments);
        };
    }
};
// })(jQuery, window, document);