import React from 'react'

const Jemery = () => {
  var JemeryWordsIndex = 0;
  const JemeryWords = ["我叫 杰莫里！","幹嘛！?","有什麼好玩的嗎？"]
  const addMeowText = ()=>{
    // console.log(document.querySelector('.decMeow_text'))
    document.querySelector('.jemery_text').classList.add("jemery_text-show");
    document.querySelector('.trigger').classList.add("trigger-show");
    document.querySelector('.jemery-hand').classList.add("jemery-hand-show");
    document.querySelector('.jemery-slide').classList.add("jemery-slide-show");
    document.querySelector('.jemery_light').classList.add("jemery_light-show");
  }
  const removeMeowText = ()=>{
    // console.log(document.querySelector('.decMeow_text'))
    document.querySelector('.jemery_text').classList.remove("jemery_text-show");
    document.querySelector('.trigger').classList.remove("trigger-show");
    document.querySelector('.jemery-hand').classList.remove("jemery-hand-show");
    document.querySelector('.jemery-slide').classList.remove("jemery-slide-show");
    document.querySelector('.jemery_light').classList.remove("jemery_light-show");
  }
  const sayNextWord = (params) => {
    document.querySelector('.jemery-slide').style.animation = 'none'; // 重置動畫
    setTimeout(() => {
      document.querySelector('.jemery-slide').style.animation = 'jump 0.3s ease-in-out'; // 重新啟動動畫
    }, 0);
    if(JemeryWordsIndex+1 < JemeryWords.length){
      document.querySelector('.jemery_text').innerHTML = JemeryWords[JemeryWordsIndex+1]
      JemeryWordsIndex += 1;
    }else{
      JemeryWordsIndex = 0;
      document.querySelector('.jemery_text').innerHTML = JemeryWords[0]
    } 
  }
  return (
    <div className="jemery">
        <div className="jemery_text">我叫 杰莫里！</div>
        <img className="jemery-hand" src="https://i.imgur.com/spE5Dwx.png" alt="" /> 
        <img className="jemery-slide" src="https://i.imgur.com/WIbDGk6.png" alt="" />
        <div className="jemery_light"></div>
        <div className="trigger" onMouseEnter={addMeowText} onMouseLeave={removeMeowText} onClick={()=>{sayNextWord()}}></div>
    </div>
  )
}



export default Jemery