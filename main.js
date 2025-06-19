// HTML要素を取得
const zoroDisplay = document.querySelector('#zoro');
const resultDisplay = document.querySelector('#result');
const button = document.querySelector('#button');

let intervalId = null; // setIntervalを管理するための変数

// ボタンがクリックされたときの処理
button.addEventListener('click', () => {
  // すでに実行中の場合は何もしない
  if (intervalId) {
    return;
  }
  
  // 1. 準備
  button.disabled = true; // ボタンを無効化して連打を防ぐ
  button.textContent = '実行中...';
  resultDisplay.textContent = 'ゾロ目を待っています...';
  
  const targetNumber = Math.floor(Math.random() * 10); // 今回の目標となるゾロ目の数字
  let count = 0;
  
  // 2. 0.05秒ごと（50ミリ秒）に数字を更新する処理を開始
  intervalId = setInterval(() => {
    count++;
    
    // 新しいランダムな数字を生成
    const currentNumber = Math.floor(Math.random() * 10);
    
    // 画面の数字を更新
    zoroDisplay.textContent = currentNumber;
    
    // 3. ゾロ目が出たか判定
    if (currentNumber === targetNumber) {
      // 4. ゾロ目が出たらIntervalを停止
      clearInterval(intervalId);
      intervalId = null; // intervalIdをリセット
      
      // 結果を表示
      zoroDisplay.textContent = targetNumber; // 最後に目標の数字で確定させる
      resultDisplay.textContent = `${count}回目で「${targetNumber}」のゾロ目が出ました！`;
      
      // ボタンを有効に戻す
      button.disabled = false;
      button.textContent = 'もう一度';
    }
  }, 50); // 50ミリ秒（=0.05秒）ごとに実行
});
