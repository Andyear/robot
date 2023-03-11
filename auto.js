//  autojs('robot.weixin.js');
// 详细的使用方法，请参考  https://yooge.github.io/robot-docs/autojs-vue.html

var {
	robot,version
} = require('robot-tools');

function _autojs_(param) {
	robot.stop();
	// var param = {
	// 	vue: this, //可选,你也可以传别的对象，或者不传。 用来给机器人直接访问的
	// 	file: 'robot.weixin.js',
	// 	//file: '/sdcard/demo.js',
	// 	//file:'https://yooge.github.io/robot/remote_script.js',
	// 	//arguments:{},  //如果传入了vue，则自动会取它的data数据
	// 	onMessage: function(res) {}
	// }

	if (typeof(param) == 'string') {
		param = {
			file: param
		}
	}
	console.log("start");
	robot.start(param);
}

function _stopjs_() {
	robot.stop();
}

global.autojs = _autojs_;
global.stopjs = _stopjs_;


setTimeout(()=>{
	
	console.log('version= ', version.name);
	console.log('plus.runtime.versionCode ', plus.runtime.versionCode);
	console.log('plus.runtime.innerVersion', plus.runtime.innerVersion);
	console.log('plus.runtime.uniVersion ', plus.runtime.uniVersion);
	console.log('plus.runtime.version', plus.runtime.version);
	
 
},3000);