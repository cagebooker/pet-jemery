import React from 'react'

const Jemery = () => {
  var JemeryWordsIndex = 0;
  const JemeryWords = ["我叫 杰莫里！","幹嘛！?","有什麼好玩的嗎？"]
  const addMeowText = ()=>{
    // console.log(document.querySelector('.decMeow_text'))
    document.querySelector('.decMeow_text').classList.add("decMeow_text-show");
    document.querySelector('.trigger').classList.add("trigger-show");
    document.querySelector('.jemery-hand').classList.add("jemery-hand-show");
    document.querySelector('.jemery-slide').classList.add("jemery-slide-show");
    document.querySelector('.decMeow_light').classList.add("decMeow_light-show");
  }
  const removeMeowText = ()=>{
    // console.log(document.querySelector('.decMeow_text'))
    document.querySelector('.decMeow_text').classList.remove("decMeow_text-show");
    document.querySelector('.trigger').classList.remove("trigger-show");
    document.querySelector('.jemery-hand').classList.remove("jemery-hand-show");
    document.querySelector('.jemery-slide').classList.remove("jemery-slide-show");
    document.querySelector('.decMeow_light').classList.remove("decMeow_light-show");
  }
  const sayNextWord = (params) => {
    document.querySelector('.jemery-slide').style.animation = 'none'; // 重置動畫
    setTimeout(() => {
      document.querySelector('.jemery-slide').style.animation = 'jump 0.3s ease-in-out'; // 重新啟動動畫
    }, 0);
    if(JemeryWordsIndex+1 < JemeryWords.length){
      document.querySelector('.decMeow_text').innerHTML = JemeryWords[JemeryWordsIndex+1]
      JemeryWordsIndex += 1;
    }else{
      JemeryWordsIndex = 0;
      document.querySelector('.decMeow_text').innerHTML = JemeryWords[0]
    } 
  }
  return (
    <div className="jemery">
      <div className="decMeow">
      <div className="decMeow_text">我叫 杰莫里！</div>
        <img className="jemery-hand" src={"node_modules/@kevingu/pet-jemery/public/img/meow.png"} alt="" /> 
        <img className="jemery-slide" src={"node_modules/@kevingu/pet-jemery/public/img/Jemery.png"} alt="" />
        <div className="decMeow_light"></div>
        <div className="trigger" onMouseEnter={addMeowText} onMouseLeave={removeMeowText} onClick={()=>{sayNextWord()}}></div>
      </div>
    </div>
  )
}



export default Jemery