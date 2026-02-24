// 監視対象の要素を設定。ここでは <body> を監視する
const targetNode = document.body;

// オブザーバの設定
const config = {
   childList: true,
   subtree: true
};

// コールバック関数の定義
const callback = (mutationsList, observer) => {
   for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
         // 変更されたノードをログに出力
         mutation.addedNodes.forEach(node => {
         });
         //divの中にiframeが追加されたかどうかを確認
         mutation.addedNodes.forEach(node => {
            if (node.nodeName === 'DIV') {
               const iframes = node.getElementsByTagName('iframe');
               if (iframes.length > 0) {
                  console.log('DIV内にiframeが追加されました:', node);
                  //divを非表示にする
                  node.style.display = 'none';
               }
            }
         });
      }
   }
};

// MutationObserverのインスタンスを作成
const observer = new MutationObserver(callback);
// 監視を開始
observer.observe(targetNode, config);

// 必要がなくなったら監視を停止
// observer.disconnect();