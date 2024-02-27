"use strict"
//this function will run only once
//this added for setting default CSS value
const setSwitchDocument=(function(){
    const documentList=document.getElementsByClassName("documentitem");
    const leng=documentList.length;
    for(let i =1;i<leng;i++){
        documentList[i].style="display:none";
    }
})();

const getSwitchDocument=function(ID){

    const documentList=document.getElementsByClassName("documentitem");
    const listList=document.getElementsByClassName("listitem");
    const vElement=document.getElementById("doc"+ID);
    

    for (let i =0; i<documentList.length;i++){
        if(documentList[i].isEqualNode(vElement)==true){
            documentList[i].style="display:block";
            listList[i].style="box-shadow:1px 1px 2px rgb(135, 135, 135) inset";
        }
        else{
            documentList[i].style="display:none";
            listList[i].style="box-shadow:none";
        }
    }
};