(function (window) {
    var video_arr = []

    function ISarray(selector) {
        if (typeof selector === 'object' && 'length' in selector && selector !== window) {//判断是不是数组
            if (({}).toString.apply(selector) === '[object Array]') {
                //数组
                return 1
            } else {
                //伪数组
                return -1
            }
        } else {
            // 不是数组
            return 0
        }
    }
    function sync_video() {

        if (arguments.length == 1) {
            var d1 = arguments[0]
            switch (ISarray(d1)) {
                case 1:
                    video_arr = d1
                    break;
                case -1:
                    video_arr = Array.from(d1)
                    break;
                default:
                    video_arr.push(d1)
                    break;
            }
        } else if (arguments.length > 1) {
            video_arr = arguments
        }

        this.add = function () {
            if (arguments.length == 1) {
                var d1 = arguments[0]
                switch (ISarray(d1)) {
                    case 1:
                        video_arr.concat(d1)
                        break;
                    case -1:
                        video_arr.concat(Array.from(d1))
                        break;
                    default:
                        video_arr.push(d1)
                        break;
                }
            } else if (arguments.length > 1) {
                video_arr.concat(arguments)
            }
        }
        this.remove = function () {
            var video = arguments[0]
            var index = video_arr.indexOf(video)
            video_arr.slice(index, 1)
        }
        this.play = function () {
            for (var index = 0; index < video_arr.length; index++) {
                var ele = video_arr[index];
                ele.play()
            }
        }
        this.pause = function () {
            for (var index = 0; index < video_arr.length; index++) {
                var ele = video_arr[index];
                ele.pause()
            }
        }
    }
    window.sync_video = sync_video
})(window)
