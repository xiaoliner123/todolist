    var oInput = document.getElementsByTagName("input")[0];
    var aList = document.getElementsByClassName('AddList')[0];

		aList.onclick = function() {
				// 添加数据
				var data = oInput.value;
				addData(data);
				// 清空数据
				clearData();
		}

		// 模糊查询
		oInput.oninput = function() {
            var arrList = document.getElementsByClassName("List");
            var arr = [];
            // console.log(this.value.trim())
			for(var i = 0;i < arrList.length;i++) {
				if(arrList[i].children[1].innerHTML.trim().indexOf(this.value.trim()) != -1) {
                    // console.log(arrList[i].children[1].innerHTML)
                    // console.log('ok')
                    arr.push(i);
				}
            }
			// 显示
			show(arr);
		};


		function show(arr) {
			var arrList = document.getElementsByClassName("List");
			// 隐藏所有
			for(var i = 0;i < arrList.length;i++) {
				arrList[i].style.display = "none";
			}

			// 显示
			if(arr.length > 0) {
				for(var i = 0;i < arr.length;i++) {
					arrList[arr[i]].style.display = "block";
				}
			} else {
				for(var i = 0;i < arrList.length;i++) {
					arrList[i].style.display = "block";
				}
			}

		}

		function addData(data)  {
            var allList = document.getElementsByClassName('allList')[0]
            var tempDiv = document.createElement("div")
			var tempInput = document.createElement("input");
			var tempBtn = document.createElement("button");
			var tempSpan = document.createElement("span");

            tempDiv.className = 'List'
			tempBtn.innerHTML = "删除";
			tempBtn.name = "delete";
            tempSpan.innerHTML = data;
            tempInput.type = 'checkbox'
            tempDiv.appendChild(tempInput)
            tempDiv.appendChild(tempSpan);
			tempDiv.appendChild(tempBtn);
            allList.appendChild(tempDiv);
            
		}

		function clearData() {
			var oInput = document.getElementsByTagName("input")[0];
			oInput.value = "";
		}

		// 点击删除
    var Lists = document.getElementsByClassName("Lists");
        for(var i=0;i< Lists.length;i++){
            Lists[i].onclick = function(event) {
                var event = event || window.event;
                var target = event.target;
                if(target.name == "delete") {
                    target.parentNode.parentNode.removeChild(target.parentNode);
                }
		    };
        }
