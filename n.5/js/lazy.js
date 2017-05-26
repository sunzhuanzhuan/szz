function lazyload(aImages){
				loadImg(aImages);
				window.onscroll = function() { 
					loadImg(aImages);
				};	
				function loadImg(arr) {
					for(var i = 0, len = arr.length; i < len; i++) {
						if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad ) {
							arr[i].isLoad = true;
							//arr[i].style.cssText = "opacity: 0;";
							
							(function(i) {
								setTimeout(function() {
	//								if(arr[i].dataset) { 
	//									aftLoadImg(arr[i], arr[i].dataset.imgurl);
	//								} else {
									aftLoadImg(arr[i], arr[i].src1);
	//								}
									arr[i].style.cssText = "transition: 1s; opacity: 2;" 
								}, 500)
							})(i);
						}
					}
				}
				function aftLoadImg(obj, url) {
					var oImg = new Image();
					oImg.onload = function() {
						obj.src = oImg.src;
					}
					oImg.src = url; 
				}
				//原理：先将img标签中的src链接设为同一张图片（空白图片），将其真正的图片地址存储再img标签的自定义属性中（比如data-src）
				//当js监听到该图片元素进入可视窗口时，即将自定义属性中的地址存储到src属性中，达到懒加载的效果。
			}
