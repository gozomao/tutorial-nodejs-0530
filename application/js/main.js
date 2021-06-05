// //我是前端程式 (瀏覽器~)
// alert("嗨嗨 ,我是前端程式!!!");

$(function(){

//     /////事件聆聽->綁事件上去
//     // //綁定點擊事件
//     // $("#button-1").click(()=>{
//     //     alert("點我看程式!!!");
//     // });

//     // $("#button-2").click(()=>{
//     //     console.log("本土確診");
//     // });

//     // $("#button-2").mouseover(()=>{
//     //     console.log("啊啊啊");
//     // });


// // });
//綁定click(點擊)事件
//寫法---->$(想定位的標籤).事件(處理函式    )
  $("#button-1").click(()=>{
    alert("點我看程式");
  });
  $("#button-2").click(()=>{
    alert("點我看惡靈古堡");
  });

  $("#button-add").click(()=>{
    //1.先抓到次數值
    let value = $("#number-qq").text(); //此時value為字串
    
    value = Number(value)//把字串轉成數字
    
    console.log(value);   

    
    //2.幫次數值+1
    value +=1;

  
    //3.寫回去#number-qq的標籤裡

     $("#number-qq").text(value)
     
     if(value<0){
        //增加class的方法
        $("#number-qq").addClass("text-danger");
      }else{
       //移除class的方法
       $("#number-qq").removeClass("text-danger");
      };
    
     

   });

    $("#button-sub").click(()=>{
   
        let value = $("#number-qq").text(); //此時value為字串
        
        value = Number(value)//把字串轉成數字
        
        console.log(value);   

        if(value === -10){
        alert("不可小於-10!!!");
        return; //結束 function 執行
        //從下面開始 ,程式不會執行到

        };
        value -=1;
        $("#number-qq").text(value)
    
        if(value<0){
          //增加class的方法
          $("#number-qq").addClass("text-danger");
        }else{
          //移除class的方法
          $("#number-qq").removeClass("text-danger");
        };


    });


   
});
