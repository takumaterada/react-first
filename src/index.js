console.log("hello eeee");

document.getElementById("title").textContent = "Hello Wor";

// var val1 = "var変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "varを再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// letは再宣言不可能

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";
// const val3 = "const再宣言";
// constは上書き再宣言不可能;

// const val4 = {
//   name: "じゃけぇ",
//   age: 28,
// };
// val4.name = "jake";
// val4.addrres = "広島";
// console.log(val4);
// constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "vird";
// val5.push("mon");
// console.log(val5);
// constで定義した配列はプロパティの変更が可能

// テンプレート文字列
// const name = "jake";
// const age = "28";
// 私の名前はjakeです。年齢は28歳です。

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// 従来の方法

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数

// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "jake",
//   age: 28,
// };

// const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message3);

// const { name, age } = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// const myProfile = ["jake", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}よ。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}と${age}`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("じゃけぇ");

// スプレッド構文

// 配列の展開

// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);

// mapやfilteを使った配列の処理

const nameArr = ["田中", "山田", "jake"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "jake") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
// };
// console.log(checkSum(10, 20));

// 論理演算子の本当の意味を知る
// const flag1 = true;
// const flag2 = true;

// if (flag1 && flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// ||は左側がfalseならなら右側を返す
// const num = 100;
// const fee = num || "金額設定です";
// console.log(fee);

// &&は左がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグをdivを未完了リストから削除
    deleteFromcompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグを作成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグをdivを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子様相に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを未完了リストから削除
    deleteFromcompleteList(deleteButton.parentNode);
  });

  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リスト追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
